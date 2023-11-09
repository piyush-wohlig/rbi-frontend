import apiConfig from "@/common/config/apiConfig";
import apiService from "@/common/services/apiServices";
import customConfig from "./fieldCustomizationConfig";
import globalConfig from "@/common/config/GlobalConstants.js";
import router from "@/routes";
import { ref } from "vue";
import moment from "moment";
import { filter } from "lodash";

const { REGEX_PATTERNS } = globalConfig;
const stateList = ref({});

const getCompanySubDomain = (loginLocation) => {
  let is_ip_address_regex = /\d+[.]\d+[.]\d+[.]\d+$/;
  let config_main_domain = apiConfig.HOST;
  let config_sub_domain = apiConfig.MAINSUB_DOMAIN;
  if (
    loginLocation === "localhost" ||
    is_ip_address_regex.test(loginLocation) ||
    loginLocation.includes("localhost")
  ) {
    return "testglobal"; //"gtltestcorpo1";
  }
  let domain = loginLocation?.replace(config_main_domain, "");
  if (domain?.length === 0) {
    return "";
  } else {
    let current_sub_domain = domain.split(".")[0];
    if (current_sub_domain === config_sub_domain) {
      return "";
    } else {
      return current_sub_domain;
    }
  }
};

const getTime = (pushDate) => {
  return moment(pushDate).format("HH:mm A");
};

const getDate = (pushDate) => {
  return moment(pushDate).format("DD-MMM-yy");
};

const getDateTime = (pushDate) => {
  return moment(pushDate).format("HH:mm A, DD-MMM-yy");
};

const updateLocalStorage = (response, subDomain) => {
  const localStorage = window.localStorage; // Assuming localStorage is available
  localStorage.userLoginFlag = true;
  let iaData = JSON.stringify(response.data);
  localStorage.setItem("iaData", iaData);
  localStorage.iaUserFirstName = response.data.user.firstName;
  localStorage.iaUserLastName = response.data.user.lastName;
  localStorage.iaUserEmailId = response.data.user.email;
  localStorage.iaUserGender = response.data.user.gender;
  localStorage.iaUserMaritalStatus = response.data.user.maritalStatus;
  // Assuming you have a function `getUserRole` to get user roles
  localStorage.iaUserType = getUserRole(response.data.user.roles);
  localStorage.subDomain = subDomain;

  if (
    response.data.user.passwordChangeDate === undefined ||
    response.data.user.passwordChangeDate === null
  ) {
    localStorage.passwordChangeStatus = true;
  }
};

const getUserRole = (roles) => {
  /*Array of roles that can be there*/
  let roleArray = [
    "IA_SUPER_ADMIN",
    "IA_ADMIN",
    "IA_EXECUTIVE",
    "CORPORATE_ADMIN",
    "LOCATION_ADMIN",
    "EMPLOYEE",
  ];
  for (let role = 0; role < roleArray.length; role++) {
    let currentRole = roleArray[role];
    for (let apiRole = 0; apiRole < roles.length; apiRole++) {
      if (roles[apiRole] === currentRole) {
        return currentRole;
      }
    }
  }
  return "Role Not Found";
};

const updatePolicyDataToLocalStorage = async () => {
  const deferred = ref(null);
  const objData = getLocalStorageData("iaData");
  const getCompanyID = objData.company.companyID;
  const getEmployeeID = objData.user.id;
  const employeePolicyDetails = { GPA: {}, GTL: {}, GMC: {} };

  const url = apiConfig.GET_EMPLOYEE_POLICY_DETAILS.replace(
    "%companyId%",
    getCompanyID
  ).replace("%employeeId%", getEmployeeID);
  const response = await apiService.apiCall("get", url);
  if (response.data.responseCode == 0) {
    if (response.data && response.data.data.length !== 0) {
      const basePolicies = response.data.data;
      for (const policyType in basePolicies) {
        for (let j = 0; j < basePolicies[policyType].length; j++) {
          const basePolicy = basePolicies[policyType][j];
          const tempPolicy = {
            policyId: basePolicy.policyId,
            corporateAsNominee: basePolicy.corporateAsNominee,
            policyNumber: basePolicy.policyNumber,
            insuranceCompany: basePolicy.insurers.name,
            insuranceCompanyBranch: basePolicy.insurers.branch.name,
            startDate: basePolicy.policyStartDate,
            endDate: basePolicy.policyEndDate,
            sumInsured: basePolicy.employeeSiAmount,
            mappedDate: basePolicy.mappedDate,
            isSIAsSalaryMultiplier: basePolicy.isSIAsSalaryMultiplier,
            siType: basePolicy.siType,
            policyType: basePolicy.policyType,
            salMultiplierCustomMsg: basePolicy.salMultiplierCustomMsg,
            policyAccessLevel: basePolicy.policyAccessLevel,
            order: basePolicy.order,
          };

          if (basePolicy.gradeId && basePolicy.gradeName) {
            tempPolicy.gradeId = basePolicy.gradeId;
            tempPolicy.gradeName = basePolicy.gradeName;
          }

          if (policyType === "GMC") {
            tempPolicy.relationshipsAllowed =
              constructRelationshipArray(basePolicy);
            tempPolicy.editStatus = basePolicy.editStatus;
            tempPolicy.childAgeLimit = basePolicy.childAgeLimit;
            tempPolicy.parentsAgeLimit = basePolicy.parentsAgeLimit;
            tempPolicy.parent_or_inlaw_allowed_case =
              basePolicy.parent_or_inlaw_allowed_case;
            tempPolicy.age_exception_flag = basePolicy.age_exception_flag;
            tempPolicy.parent_age_exception_flag =
              basePolicy.parent_age_exception_flag;
            tempPolicy.enrollment_cutoff_end_date =
              basePolicy.enrollmentEndDate;
            tempPolicy.maxFamilySize = basePolicy.maxFamilySize;
            tempPolicy.isFamilyFloater = basePolicy.isFamilyFloater;
            tempPolicy.siType = basePolicy.siType;
            tempPolicy.employeePremiumAmount = basePolicy.employeePremiumAmount;
          }

          if (policyType !== "GMC") {
            tempPolicy.isNomineeAllowed = basePolicy.isNomineeAllowed;
          }

          employeePolicyDetails[policyType][tempPolicy.policyId] = tempPolicy;
        }
      }
      localStorage.employeePolicyDetails = JSON.stringify(
        employeePolicyDetails
      );
      deferred.value = employeePolicyDetails;
    } else {
      deferred.value = employeePolicyDetails;
    }
  } else {
    deferred.value = employeePolicyDetails;
  }

  return deferred;
};

const getLocalStorageData = (name) => {
  let storedData = localStorage.getItem(name);
  let parsedObject = JSON.parse(storedData);
  return parsedObject;
};

const updateSettingsToLocalStorage = async () => {
  try {
    const objData = getLocalStorageData("iaData");
    const url = apiConfig.GET_COMPANY_SETTING.replace(
      "%companyID%",
      objData.company.companyID
    );
    return apiService.apiCall("get", url).then((response) => {
      if (response.data.responseCode === 0) {
        localStorage.corpSetting = JSON.stringify(response.data.result);
      }
      return response;
    });
  } catch (error) {
    console.log("Error", error);
  }
};

const getEmployeeStatusType = async () => {
  const deferred = {};
  const objData = getLocalStorageData("iaData");
  const getCompanyID = objData.company.companyID;
  const getEmployeeID = objData.user.id;
  const url = apiConfig.GET_EMPLOYEE_STATUS.replace(
    "%companyId%",
    getCompanyID
  ).replace("%employeeId%", getEmployeeID);
  const response = await apiService.apiCall("get", url);
  if (response.data.responseCode == 0) {
    const data = response.data && response.data.data ? response.data.data : [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].eb_policy_product_policy_type === "GMC") {
        localStorage.endorsementEmployeeStatus = data[i].employeeStatus;
        localStorage.endorsementEmpWindowPeriodEndDate =
          data[i].window_period_end_date;
        localStorage.endorsementEmpWindowPeriodStartDate =
          data[i].window_period_start_date;
        localStorage.endorsementEmpAccessLevel =
          data[i].employee_product_access_level;
      }
    }
    deferred.value = response;
  } else {
    deferred.value = response;
  }
  return deferred;
};

const updatePolicyAccessLevels = (response) => {
  const access_levels = {};
  for (let i = 0; i < response.length; i++) {
    const type = response[i].eb_policy_product_policy_type;
    const policyId = response[i].eb_policy_product_id;
    if (["GMC", "GPA", "GTL"].includes(type)) {
      access_levels[type] = response[i];
      access_levels[policyId] = response[i];
    } else if (type === "VOLUNTARY_GMC") {
      access_levels[policyId] = response[i];
    }
  }
  localStorage.policyAccessLevels = JSON.stringify(access_levels);
};

const fetchCustomFields = async (
  FIELD_TYPE,
  policy_id,
  POLICY_TYPE,
  force_api_call
) => {
  let fieldCustomizationObject = localStorage.fied_customization_object
    ? JSON.parse(localStorage.fied_customization_object)
    : undefined;
  if (fieldCustomizationObject && !force_api_call) {
    if (policy_id) {
      if (fieldCustomizationObject[FIELD_TYPE].fields[policy_id]) {
        return Promise.resolve(
          fieldCustomizationObject[FIELD_TYPE].fields[policy_id]
        );
      } else {
        if (
          ["GMC", "GPA", "GTL", "VOLUNTARY_GMC"].indexOf(POLICY_TYPE) === -1
        ) {
          return Promise.reject(
            "No Valid Policy Type Found For Field Customization!"
          );
        } else {
          return Promise.resolve(
            fieldCustomizationObject[FIELD_TYPE].fields[POLICY_TYPE]
          );
        }
      }
    } else {
      return Promise.resolve(
        FIELD_TYPE && fieldCustomizationObject[FIELD_TYPE].fields
      );
    }
  } else {
    const original_fields_config = JSON.parse(JSON.stringify(customConfig));
    const url = apiConfig.FETCH_CUSTOM_FIELD.replace(
      "%companyId%",
      JSON.parse(localStorage.iaData).company.companyID
    ).replace("%employeeId%", localStorage.employeeId);
    const response = await apiService.apiCall("get", url);
    if (response.data.responseCode == 0) {
      const result = response.data.result;
      for (let i = 0; i < result.length; i++) {
        result[i].fieldObject = JSON.parse(result[i].fieldObject);
        if (
          [
            "voluntary_voting_screen_fields",
            "policy_view_fields",
            "list_dependents_screen_fields",
          ].indexOf(result[i].fieldType) !== -1
        ) {
          original_fields_config[result[i].fieldType].fields[
            result[i].policyId
          ] = result[i].fieldObject;
        } else {
          for (let field_key in result[i].fieldObject) {
            original_fields_config[result[i].fieldType].fields[field_key] =
              result[i].fieldObject[field_key];
          }
        }
      }
      localStorage.fied_customization_object = JSON.stringify(
        original_fields_config
      );
      fieldCustomizationObject = JSON.parse(
        localStorage.fied_customization_object
      );
      return Promise.resolve(
        FIELD_TYPE && fieldCustomizationObject[FIELD_TYPE].fields
      );
    } else {
      localStorage.fied_customization_object = JSON.stringify(
        original_fields_config
      );
      fieldCustomizationObject = JSON.parse(
        localStorage.fied_customization_object
      );
      return Promise.resolve(
        FIELD_TYPE && fieldCustomizationObject[FIELD_TYPE].fields
      );
    }
  }
};

const constructRelationshipArray = (pVal) => {
  const relationshipsAllowed = ref([]);
  const relationArray = ref(globalConfig.FAMILY_RELATIONSHIP);
  for (let i = 0; i < relationArray.value.length; i++) {
    if (pVal[relationArray.value[i].isCovered]) {
      if (relationArray.value[i].isCovered === "isParentsAllowed") {
        relationshipsAllowed.value.push("father");
        relationshipsAllowed.value.push("mother");
      } else if (relationArray.value[i].isCovered === "isInLawsAllowed") {
        relationshipsAllowed.value.push("fatherinlaw");
        relationshipsAllowed.value.push("motherinlaw");
      } else {
        relationshipsAllowed.value.push(relationArray.value[i].key);
      }
    }
  }

  return relationshipsAllowed;
};

const logoutUser = async () => {
  function runRemainingLogoutProcedure() {
    globalConfig.isUserLoggedIn = false;
    localStorage.clear();
    router.push("/login");
  }

  try {
    const url = apiConfig.LOGOUT_API;
    await apiService.apiCall("get", url);
    runRemainingLogoutProcedure();
  } catch (err) {
    // Logout the user even if the API throws error
    runRemainingLogoutProcedure();
  }
};

const validateEmail = (value) => {
  if (globalConfig.REGEX_PATTERNS.EMAIL.test(value)) {
    return false;
  }
  return true;
};

const detectMobile = () => {
  const userAgent = navigator.userAgent;
  const mobileKeywords = [
    "Android",
    "iPhone",
    "iPad",
    "iPod",
    "Windows Phone",
    "BlackBerry",
    "Kindle",
    "Silk",
    "Opera Mini",
    "Opera Mobi",
  ];

  // Check if the user agent contains any mobile keywords
  return (
    mobileKeywords.some((keyword) => userAgent.includes(keyword)) &&
    window.innerWidth < 768
  );
};

const isSameOrBetween = function (startDate, endDate) {
  const valid =
    moment(startDate).isBefore(endDate) || moment(startDate).isSame(endDate);
  return (
    valid &&
    (moment().isSame(startDate, "day") ||
      moment().isSame(endDate, "day") ||
      moment().isBetween(startDate, endDate, "day"))
  );
};

const fetchVoluntaryPolicies = (companyId, empId, flag) => {
  let voluntary_flag = "voluntary";
  if (flag) {
    voluntary_flag = flag;
  }

  const url =
    apiConfig.GET_VOLUNTARY_POLICIES.replace("%companyId%", companyId).replace(
      "%policyFlag%",
      voluntary_flag
    ) + (empId ? "/" + empId : "");

  return apiService.apiCall("get", url).then(
    function (response) {
      if (empId) {
        let data = response.data.data;
        for (let i = 0; i < data?.length; i++) {
          const access_level = getPolicyAccessLevel(
            data[i].eb_policy_product_policy_type,
            data[i].eb_policy_product_id
          );
          data[i].policyAccessLevel = access_level;
        }
        data = filter(data, function (policy) {
          return policy.policyAccessLevel !== "NO_ACCESS";
        });
        response.data.data = data;
        //vm.localStorage.voluntaryPolicies[voluntary_flag] = JSON.parse(JSON.stringify(response));
      }
      return Promise.resolve(response);
    },
    function (response) {
      return Promise.reject(response);
    }
  );
};

const getPolicyAccessLevel = (policyType, policyId) => {
  let access_levels;
  if (localStorage.policyAccessLevels)
    access_levels = JSON.parse(localStorage.policyAccessLevels);
  //policy access level only for mapped policies. rest will have all access (as per discussion with Pradeep)
  return (
    (access_levels &&
      access_levels[policyType] &&
      access_levels[policyType].employee_product_access_level) ||
    (access_levels && access_levels[policyId]
      ? access_levels[policyId].employee_product_access_level
      : "ALL_ACCESS")
  );
};

const fetchVoluntaryPolicyForEmployee = function (companyId, policyId, empId) {
  const url = apiConfig.GET_VOLUNTARY_POLICY_EMPLOYEE_DETAILS.replace(
    "%companyId%",
    companyId
  )
    .replace("%policyId%", policyId)
    .replace("%employeeId%", empId);

  return apiService.apiCall("get", url).then(
    function (response) {
      if (response.data.responseCode == 0) {
        const access_level = getPolicyAccessLevel(
          response.data.data?.policyData?.policyType,
          response.data.data?.policyData?.ebPolicyProductId
        );
        response.data.data.policyData.policyAccessLevel = access_level;
      }
      return Promise.resolve(response);
    },
    function (response) {
      return Promise.reject(response);
    }
  );
};

const fetchVotingOptionByAge = function (
  ageBandData,
  option,
  relation,
  dob,
  isPerMember
) {
  let year = moment().diff(moment(dob), "years");
  const month = moment().diff(moment(dob), "months");
  const months = month % 12;
  //var month = (moment(dob)).month() + 1;
  if (months >= 6) {
    year++;
  }

  for (let i = 0; i < ageBandData.length; i++) {
    if (
      year >= ageBandData[i].policyAgeBandStart &&
      year <= ageBandData[i].policyAgeBandEnd &&
      relation === ageBandData[i].relation.toLowerCase()
    ) {
      if (!isPerMember && option == ageBandData[i].premium) {
        return ageBandData[i].sumInsured;
      } else if (option == ageBandData[i].sumInsured) {
        return ageBandData[i].premium;
      }
    }
  }
  return "NA";
};

const fetchVoluntaryDependents = function (companyId, policyId, employeeId) {
  const url = apiConfig.VOLUNTARY_GET_DEPENDENTS.replace(
    "%companyId%",
    companyId
  )
    .replace("%policyId%", policyId)
    .replace("%employeeId%", employeeId);

  return apiService.apiCall("get", url);
};

const getEmployeeDob = function () {
  const url = apiConfig.GET_EMPLOYEE_PROFILE.replace(
    "%companyId%",
    localStorage.companyId
  ).replace("%employeeId%", localStorage.employeeId);

  return apiService.apiCall("get", url);
};

const getBasePoliciesForEmployee = function (companyId, employeeid) {
  const url =
    apiConfig.GET_ALL_POLICIES + companyId + "/employee/" + employeeid;
  return apiService.apiCall("get", url).then(
    function (response) {
      return Promise.resolve(response.data.data);
    },
    function (response) {
      return Promise.reject(response);
    }
  );
};

const policyName = (name) => {
  let policyName;
  switch (name) {
    case "GMC":
      policyName = "Group Mediclaim";
      break;
    case "GPA":
      policyName = "Group Personal Accident";
      break;
    case "GTL":
      policyName = "Group Term Life";
      break;
    default:
      policyName = name;
      break;
  }
  return policyName;
};

const capitalize = (value) => {
  return value
    ?.toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const removeUnderscore = (input) => input?.replace(/_/g, " ");

const replaceUnderscoreWithEmptySpace = (input) => input.replace(/_/g, " ");

const customCurrencyFormat = (amountValue, decimal = 2) => {
  if (amountValue === null || amountValue === undefined) return amountValue;
  const isNegative = Math.sign(amountValue) === -1 ? true : false;
  const absAmountValue = Math.abs(amountValue);
  const formattedValue =
    parseFloat((absAmountValue * 100) / 100).toFixed(decimal) + "" || "";
  const [n1, n2] = formattedValue.split(".");
  const formattedAmountValue = n1.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
  const displayValue = n2
    ? formattedAmountValue + "." + n2
    : formattedAmountValue;
  return isNegative
    ? "- " + "₹" + " " + displayValue
    : "₹" + " " + displayValue;
};

const relationDisplayValue = (input) => {
  const displayFamilyDefinitionRelations = [
    ...globalConfig.familyRelations,
    ...globalConfig.additionalRelationsForDisplay,
  ];
  if (input) {
    const match = displayFamilyDefinitionRelations.find(
      (item) => item.key === input
    );
    if (match) return match.display;
  }

  const normalized = removeUnderscore(input);
  return capitalize(normalized);
};

const copayFilter = (input) => {
  if (parseInt(input) === 0) return "NA";
  return input + "%";
};

const checkForNull = (value) => {
  if (value === null || value === "") {
    return "NA";
  } else return value;
};

const capitalizeText = (text) => {
  return text
    .toLowerCase()
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase());
};

const getModifiedFieldsOfObject = (origObj, modifiedObj) => {
  // The below function will convert DD/MM/YYYY format dates to a valid YYYY-MM-DD format so that it can be parsed by moment.
  const convertInvalidDatesToPartialISOFormat = (dateStr) => {
    const separator = dateStr.includes("/") ? "/" : "-";
    return dateStr.split(separator).reverse().join("-");
  };

  const areInputsDateAndDifferent = (key) => {
    if (typeof origObj[key] == "number" || typeof modifiedObj[key] == "number")
      return false;
    // Checking here for dates with DD/MM/YYYY formats as they are valid dates for us both not for the date parsers.
    if (REGEX_PATTERNS.DATE_DDMMYYYY.test(origObj[key]))
      origObj[key] = convertInvalidDatesToPartialISOFormat(origObj[key]);
    if (REGEX_PATTERNS.DATE_DDMMYYYY.test(modifiedObj[key]))
      modifiedObj[key] = convertInvalidDatesToPartialISOFormat(
        modifiedObj[key]
      );

    // Check if inputs are date. If true, then make their formats same (i.e YYYY-MM-DD).
    if (moment(origObj[key]).isValid())
      origObj[key] = moment(origObj[key]).format("YYYY-MM-DD");
    if (moment(modifiedObj[key]).isValid())
      modifiedObj[key] = moment(modifiedObj[key]).format("YYYY-MM-DD");

    return origObj[key] != modifiedObj[key];
  };

  const diffObj = {};
  for (const key in origObj) {
    if (
      Object.prototype.hasOwnProperty.call(origObj, key) &&
      Object.prototype.hasOwnProperty.call(modifiedObj, key)
    ) {
      // If origObj[key] is an array, compare them and if they are different, include them in diffObj
      if (origObj[key] instanceof Array) {
        if (JSON.stringify(origObj[key]) != JSON.stringify(modifiedObj[key])) {
          diffObj[key] = modifiedObj[key];
        }
        continue;
      }

      // If origObj[key] is an object, recursively compare its fields and include them in diffObj if they are different
      if (typeof origObj[key] === "object" && origObj[key] != null) {
        const nestedDiff = getModifiedFieldsOfObject(
          origObj[key],
          modifiedObj[key]
        );
        if (Object.keys(nestedDiff).length > 0) {
          diffObj[key] = nestedDiff;
        }
        continue;
      }

      // If inputs are date (even in different formats), regularize their formats
      // Or for other data types, if the values are different, include them in diffObj
      if (areInputsDateAndDifferent(key) || origObj[key] != modifiedObj[key]) {
        diffObj[key] = modifiedObj[key];
      }
    }
  }
  return diffObj;
};

const restrictLength = (e, l) => {
  if (e.value) {
    let x = e.value + "";
    x = x.slice(0, l);
    e.originalEvent.target.value = +x;
  }
};

const checkPasswordExpiry = (data) => {
  let todaysDate = moment(new Date()).format("YYYY-MM-DD");
  let passwordChangeDate, passwordResetDate, latestPasswordChangedDate;

  if (data) {
    passwordChangeDate = data?.data?.user?.passwordChangedDate;
    passwordResetDate = data?.data?.user?.passwordResetDate;
  }

  if (passwordResetDate && passwordChangeDate) {
    if (moment(passwordResetDate).isAfter(passwordChangeDate)) {
      latestPasswordChangedDate =
        moment(passwordResetDate).format("YYYY-MM-DD");
    } else {
      latestPasswordChangedDate =
        moment(passwordChangeDate).format("YYYY-MM-DD");
    }
  } else if (passwordResetDate && !passwordChangeDate) {
    latestPasswordChangedDate = moment(passwordResetDate).format("YYYY-MM-DD");
  } else {
    latestPasswordChangedDate = moment(passwordChangeDate).format("YYYY-MM-DD");
  }

  let numOfDaysCrossed = moment(todaysDate).diff(
    latestPasswordChangedDate,
    "days"
  );
  return numOfDaysCrossed;
};

const fetchSiTypeKey = (policy_type, policyId) => {
  let policy_data = JSON.parse(localStorage.employeePolicyDetails)[
    policy_type.toUpperCase()
  ][policyId];
  let i, j, employee_designation, employee_custom, pattern;
  let si_type = policy_data?.siType.type.toUpperCase();
  if (si_type === "FIXED") {
    return policy_data?.siType.FIXED;
  } else if (si_type === "SAL_MULTIPLE") {
    return policy_data?.siType.SAL_MULTIPLE;
  } else if (si_type === "GRADED") {
    employee_designation = JSON.parse(localStorage.iaData).user.designation;
    for (i = 0; i < policy_data?.siType.GRADED.length; i++) {
      for (j = 0; j < policy_data?.siType.GRADED[i].designation.length; j++) {
        if (
          policy_data?.siType.GRADED[i].designation[j].toLowerCase() ===
          employee_designation.toLowerCase()
        ) {
          return policy_data?.siType.GRADED[i];
        }
      }
    }
  } else if (
    (si_type === "MULTIPLE + GRADED" || si_type === "SAL_MULTIPLE_GRADED") &&
    policy_data?.gradeName
  ) {
    employee_designation = JSON.parse(localStorage.iaData).user.designation;
    for (i = 0; i < policy_data?.siType.SAL_MULTIPLE_GRADED.data.length; i++) {
      for (
        j = 0;
        j < policy_data?.siType.SAL_MULTIPLE_GRADED.data[i].designation.length;
        j++
      ) {
        if (
          policy_data?.siType.SAL_MULTIPLE_GRADED.data[i].designation[
            j
          ].toLowerCase() === policy_data?.gradeName.toLowerCase()
        ) {
          return policy_data?.siType.SAL_MULTIPLE_GRADED.data[i];
        }
      }
    }
  } else if (si_type === "CUSTOM") {
    employee_custom = JSON.parse(localStorage.iaData).user.custom;
    for (i = 0; i < policy_data?.siType.CUSTOM.length; i++) {
      for (j = 0; j < policy_data?.siType.CUSTOM[i].customgrade.length; j++) {
        pattern = new RegExp(
          "(^s*|,s*)" +
          policy_data?.siType.CUSTOM[i].customgrade[j].toLowerCase().trim() +
          "(s*$|s*,)"
        );
        if (pattern.test(employee_custom.toLowerCase())) {
          return policy_data?.siType.CUSTOM[i];
        }
      }
    }
  } else if (
    si_type === "MULTIPLE + CUSTOM" ||
    si_type === "SAL_MULTIPLE_CUSTOM"
  ) {
    employee_custom = JSON.parse(localStorage.iaData).user.custom;
    for (i = 0; i < policy_data?.siType.SAL_MULTIPLE_CUSTOM.data.length; i++) {
      for (
        j = 0;
        j < policy_data?.siType.SAL_MULTIPLE_CUSTOM.data[i].customgrade.length;
        j++
      ) {
        pattern = new RegExp(
          "(^s*|,s*)" +
          policy_data?.siType.SAL_MULTIPLE_CUSTOM.data[i].customgrade[j]
            .toLowerCase()
            .trim() +
          "(s*$|s*,)"
        );
        if (pattern.test(employee_custom.toLowerCase())) {
          return policy_data?.siType.SAL_MULTIPLE_CUSTOM.data[i];
        }
      }
    }
  }
};

const getSumInsuredForAllRelationsOfEmployees = (
  policy_type,
  isFamilyFloater,
  isSiMultiplier,
  policyId
) => {
  let si_type_key = fetchSiTypeKey(policy_type, policyId);
  if (isSiMultiplier) {
    return {
      multiplier: si_type_key.multiplier,
    };
  } else if (isFamilyFloater) {
    return {
      siAmount: si_type_key.siAmount,
    };
  } else {
    const filteredActors = {};

    for (const key in si_type_key?.actors) {
      if (Object.prototype.hasOwnProperty.call(si_type_key.actors, key)) {
        const si_relation = si_type_key.actors[key];
        if (si_relation.siAmount !== 0) {
          filteredActors[key] = si_relation;
        }
      }
    }
    return filteredActors;
  }
};

const clearConstantObject = (obj) => {
  // This function will empty the constant object as directly assigning an empty object to it will throw an error
  // For e.g const a = {x:1}
  // a = {} // will not work
  // so clearConstantObject(a) will work equivalent to a = {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      delete obj[key];
    }
  }
};

const getEmployeeWindowPeriodForPolicy = (policyType, policyId, type) => {
  let access_levels = localStorage.policyAccessLevels;
  return (
    (access_levels &&
      access_levels[policyType] &&
      access_levels[policyType][type]) ||
    (access_levels && access_levels[policyId]
      ? access_levels[policyId][type]
      : null)
  );
};

const getEmployeeMaritalStatus = () => {
  const url = apiConfig.GET_EMPLOYEE_PROFILE.replace(
    "%companyId%",
    localStorage?.companyId
  ).replace("%employeeId%", localStorage?.employeeId);
  return apiService.apiCall("get", url);
};

const getPolicySettingsData = function (companyId, policyId) {
  const url = apiConfig.GET_POLICY_SETTINGS_DATA.replace(
    "%companyId%",
    companyId
  ).replace("%policyId%", policyId);

  return apiService.apiCall("get", url);
};

const fetchFileFromUrl = async (filePath, isWordpress) => {
  const url = isWordpress
    ? apiConfig.WORDPRESS_FILE_DOWNLOAD
    : apiConfig.FILE_DOWNLOAD;

  const response = await apiService.apiCall("post", url, null, {
    filePath,
    responseType: "blob", // Specify the responseType as 'blob'
  });

  return response;
};

const downloadFile = (blob, blobUrl, fileName, fileExt) => {
  // IE10+
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, `${fileName}.${fileExt}`);
  } else {
    const link = document.createElement("a");
    link.setAttribute("href", blobUrl);
    link.setAttribute("download", `${fileName}.${fileExt}`);
    link.click();

    // Clean up the Blob URL after the download has started
    URL.revokeObjectURL(blobUrl);
    // Remove the dynamically created link element
    link.remove();
  }
};

const fetchtax = () => {
  const url = apiConfig.FETCH_DEFAULT_TAX;
  return apiService.apiCall("get", url);
};

const setMembersCovered = (data) => {
  if (data) localStorage.memberscovered = JSON.stringify(data);
};

const getAgeBandDependentsDob = () =>
  localStorage.dependentsAgeBandDobData &&
  JSON.parse(localStorage.dependentsAgeBandDobData);

const clearDependents = () =>
  (localStorage.dependentsData = JSON.stringify([]));

const clearMembersCovered = () => {
  localStorage.memberscovered = JSON.stringify([]);
  localStorage.masterDependents = JSON.stringify([]);
};

const clearAgeBandDependentsDob = () =>
  (localStorage.dependentsAgeBandDobData = null);

const mapDependentFields = (data) => {
  const dependentData = [];
  for (let i = 0; i < data.length; i++) {
    const dependent = {};
    for (let j = 0; j < globalConfig.mappedKeys.length; j++) {
      if (data[i][globalConfig.mappedKeys[j].fetchKeyName] !== undefined) {
        dependent[globalConfig.mappedKeys[j].key] =
          data[i][globalConfig.mappedKeys[j].fetchKeyName];
      }
    }
    dependentData.push(dependent);
  }
  return dependentData;
};

const updateMasterDependents = (modifiedDependents) => {
  const masterDependents =
    localStorage.masterDependents && JSON.parse(localStorage.masterDependents);
  for (let i = 0; i < modifiedDependents.length; i++) {
    let found = false;
    for (let j = 0; masterDependents && j < masterDependents.length; j++) {
      if (modifiedDependents[i].relation === masterDependents[j].relation) {
        found = true;
        masterDependents[j] = modifiedDependents[i];
        break;
      }
    }
    if (!found) {
      masterDependents.push(modifiedDependents[i]);
    }
  }
};

const setDependents = (data, fetched) => {
  if (fetched) {
    localStorage.dependentsData = JSON.stringify(mapDependentFields(data));
    localStorage.masterDependents = JSON.stringify(mapDependentFields(data));
  } else {
    updateMasterDependents(data);
    localStorage.dependentsData = JSON.stringify(data);
  }
};

const fetchLandingPageUrl = () => localStorage.corporate_user_landing_page_url;

const redirectToHomepage = () => {
  if (
    fetchLandingPageUrl() ||
    fetchLandingPageUrl() !== "null" ||
    fetchLandingPageUrl() !== null
  ) {
    router.push("/landingPage/view");
  } else {
    router.push("/dashboard");
  }
};

const getDependents = () =>
  localStorage.dependentsData && JSON.parse(localStorage.dependentsData);

const relationValue = (input) => {
  for (let i = 0; i < globalConfig.familyRelations.length; i++) {
    if (globalConfig.familyRelations[i].key === input) {
      return globalConfig.familyRelations[i].value;
    } else if (input === "self") {
      return "Employee";
    }
  }
  const normalized = removeUnderscore(input);
  return capitalize(normalized);
};

const customCurrencyRoundOff = (amount) => {
  if (isNaN(amount)) {
    return "";
  }
  let getNum = Math.round(amount);
  return "₹" + getNum.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
};

const setAgeBandDependentsDob = (data) =>
  (localStorage.dependentsAgeBandDobData = JSON.stringify(data));

const findValuesByKey = (array, obj, find_key) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      findValuesByKey(array, obj[key], find_key);
    } else if (key === find_key) {
      if (obj[key]) {
        array.push(obj[key]);
      }
    }
  }
};

const voluntaryRelationValue = (input) => {
  if (input) {
    for (let i = 0; i < globalConfig.voluntaryFamilyRelations.length; i++) {
      if (globalConfig.voluntaryFamilyRelations[i].key === input) {
        return globalConfig.voluntaryFamilyRelations[i].value;
      } else if (input === "self") {
        return "Employee";
      }
    }
  }
  const normalized = removeUnderscore(input);
  return capitalize(normalized);
};

const getMembersCovered = () =>
  localStorage.memberscovered && JSON.parse(localStorage.memberscovered);

const filterDependentsBasedOnSelectedRelations = (
  dependentsData,
  selectedRelations
) => {
  const checkInMasterDependentList = (relation) => {
    const master =
      localStorage.masterDependents &&
      JSON.parse(localStorage.masterDependents);
    for (let i = 0; i < master.length; i++) {
      if (master[i].relation === relation) return master[i];
    }
    return false;
  };

  const dependents = [...dependentsData];
  //remove unvoted dependents
  //looping backwards as need to remove and loop at the same time
  for (let i = dependents.length - 1; i >= 0; i--) {
    const relation = dependents[i].relation;
    if (selectedRelations.indexOf(relation) === -1) {
      dependents.splice(i, 1);
    }
  }
  //add back new dependents
  for (let i = 0; i < selectedRelations.length; i++) {
    const relation = selectedRelations[i];
    let found = false;
    if (["self", "parents", "parentsinlaw"].indexOf(relation) !== -1) continue;
    for (let j = 0; j < dependents.length; j++) {
      if (relation === dependents[j].relation) {
        found = true;
        break;
      }
    }
    if (found === false) {
      const avaliableInMaster = checkInMasterDependentList(relation);
      if (avaliableInMaster) {
        dependents.push(avaliableInMaster);
      } else {
        dependents.push({ relation: relation });
      }
    }
  }
  return dependents;
};

const mergeDependentsWithAgeBandDob = (
  coveredMembers,
  dependentsData,
  dependentsDob
) => {
  dependentsData = JSON.parse(JSON.stringify(dependentsData));
  for (let i = 0; i < coveredMembers.length; i++) {
    const relation = coveredMembers[i];
    let found = false;
    for (let j = 0; j < dependentsData.length; j++) {
      if (dependentsData[j].relation === relation) {
        dependentsData[j].dob = dependentsDob[relation];
        found = true;
      }
    }
    if (found === false && relation !== "self") {
      const obj = {};
      obj.relation = relation;
      obj.dob = dependentsDob[relation];
      dependentsData.push(obj);
    }
  }
  return dependentsData;
};

const loadCity = function (stateid) {
  const url = apiConfig.GET_CITY;
  return apiService.apiCall("get", url + stateid + "/City");
};

const getStates = (countryID) => {
  countryID = !countryID || countryID === undefined ? "" : countryID;
  const url = apiConfig.GET_STATES.replace(/%\w+%/, countryID);
  if (stateList.value[countryID]) {
    return Promise.resolve(stateList.value[countryID]);
  } else {
    return apiService.apiCall("get", url).then(
      (response) => {
        stateList.value[countryID] = JSON.parse(JSON.stringify(response));
        return Promise.resolve(response);
      },
      (response) => {
        return Promise.reject(response);
      }
    );
  }
};

const copyObject = (source, target) => {
  // Can be used to assign properties to an object variable wjere the object varibale is a constant.
  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
};

const fetchDirectPaymentUrl = (policyId) => {
  const url = apiConfig.FETCH_DIRECT_PAYMENT_URL.replace(
    "%companyId%",
    localStorage.companyId
  )
    .replace("%policyId%", policyId)
    .replace("%employeeId%", localStorage.employeeId);
  return apiService.apiCall("get", url);
};

function calculateTimeAgo(notificationTimestamp) {
  const notificationTime = new Date(notificationTimestamp);
  const currentTime = new Date();

  const timeDifference = currentTime - notificationTime;

  if (timeDifference >= 24 * 3600 * 1000) {
    const daysAgo = Math.floor(timeDifference / (24 * 3600 * 1000));
    return `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  } else {
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
  }
}

const convertJSONToCSVAndDownload = (
  jsonData,
  fileName,
  selectedColumns,
  customHeaders
) => {
  const convertToCSV = (data, selectedColumns, customHeaders) => {
    const headers = customHeaders || selectedColumns || Object.keys(data[0]);
    const rows = data.map((row) =>
      selectedColumns
        .map((item) =>
          row[item] != null || row[item] != undefined
            ? JSON.stringify(row[item])
            : ""
        )
        .join(",")
    );
    return [headers.join(","), ...rows].join("\n");
  };

  const csvData = convertToCSV(
    jsonData,
    selectedColumns || Object.keys(jsonData[0]),
    customHeaders
  );
  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
  const blobUrl = URL.createObjectURL(blob);

  downloadFile(blob, blobUrl, fileName, "csv");
};

const movetotpaSSO = (companyId, employeeID) => {
  const url = apiConfig.MOVE_TO_TPA_SSO;
  const apiData = {
    employeeID,
    companyId,
  };
  return apiService.apiCall("post", url, apiData);
};

const getclaimStatus = function (policyType, policyId) {
  let employeeId = localStorage.employeeId;
  let isClaimPayment = "";
  let url = apiConfig.GET_CLAIM_STATUS.replace(
    "%employeeId%",
    employeeId
  ).replace("%isClaimPayment%", isClaimPayment);
  let postData = {
    status: [
      "rejected",
      "settled",
      "awaiting payment details from employee",
      "additional documents require",
      "in process",
      "rejected",
    ],
  };
  postData.policyType = policyType;
  if (policyId) postData.policyId = policyId;
  return apiService.apiCall("post", url, postData);
};

const payloadDate = function (date, format) {
  let dateFormat = "DD/MM/YYYY";
  if (format) dateFormat = format;
  return moment(date).format(dateFormat);
};

const validateDisplayValue = function (input) {
  if (input) {
    return input;
  }
  return "NA";
};

const getEmployeeStatusForPolicy = (policyType, policyId) => {
  const access_levels = JSON.parse(localStorage.getItem("policyAccessLevels"));
  //policy access level only for mapped policies. rest will have all access (as per discussion with Pradeep)
  return (
    (access_levels &&
      access_levels[policyType] &&
      access_levels[policyType].employeeStatus) ||
    (access_levels && access_levels[policyId]
      ? access_levels[policyId].employeeStatus
      : null)
  );
};

const addDependentAPI = function (
  companyId,
  policyId,
  dependent,
  certificateBlob,
  certificateKey
) {
  let payload = new FormData();
  let dependents_payload = { data: [dependent] };
  payload.append("bodyJson", JSON.stringify(dependents_payload));
  if (certificateKey) {
    payload.append(certificateKey, certificateBlob);
  }
  let url = apiConfig.VOLUNTARY_ADD_DEPENDENT.replace(
    "%companyId%",
    companyId
  ).replace("%policyId%", policyId);

  return apiService
    .apiCall("post", url, payload, {
      headers: {
        "Content-type": undefined,
      },
    })
    .then(
      function (response) {
        if (response.data.responseCode == 0) {
          return Promise.resolve(response);
        } else {
          let error_message = "";
          for (
            let i = 0;
            response.data.invalidData && i < response.data.invalidData.length;
            i++
          ) {
            error_message += response.data.invalidData[i].error_message + " ";
          }
          return Promise.reject(error_message || response.data.responseDesc);
        }
      },
      function (response) {
        return Promise.reject(response);
      }
    );
};

const editDependentAPI = function (companyId, policyId, dependent) {
  let payload = new FormData();
  let dependents_payload = dependent;
  payload.append("bodyJson", JSON.stringify(dependents_payload));
  let url = apiConfig.VOLUNTARY_EDIT_DEPENDENT.replace("%companyId%", companyId)
    .replace("%policyId%", policyId)
    .replace("%dependentId%", dependent.dependentID);

  return apiService
    .apiCall("put", url, payload, {
      headers: {
        "Content-type": undefined,
      },
    })
    .then(
      function (response) {
        if (response.data.responseCode == 0) {
          return Promise.resolve(response.data);
        } else {
          let error_message = "";
          for (
            let i = 0;
            response.data.invalidData && i < response.data.invalidData.length;
            i++
          ) {
            error_message += response.data.invalidData[i].error_message + " ";
          }
          return Promise.reject(error_message || response.data.responseDesc);
        }
      },
      function (response) {
        return Promise.reject(response);
      }
    );
};

const fetchFhplUrl = function (companyId, policyId, data) {
  let url = apiConfig.FETCH_FHPL_URL.replace("%companyId%", companyId).replace(
    "%policyId%",
    policyId
  );
  return apiService.apiCall("post", url, data);
};

const fetchBajajAllianzUrl = function (companyId, data) {
  let url = apiConfig.FETCH_BAJAJ_ALLIANZ_URL.replace("%companyId%", companyId);
  return apiService.apiCall("post", url, data);
};

const voluntaryInsuranceRedirect = function (redirect_in_same_window) {
  let url = apiConfig.SWIPEZ_VOLUNTARY_REDIRECTION_URL;
  let csd = getCompanySubDomain(window.location.host);
  let id = atob(localStorage.token_id);
  let redirect_param = btoa("id=" + id + "&csd=" + csd);
  let voluntary_window = window.open(
    url + redirect_param,
    redirect_in_same_window ? "_top" : "_blank"
  );
  voluntary_window.focus();
};

const formattedDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const fetchFile = (file_path, is_wordpress) => {
  let url = is_wordpress
    ? apiConfig.WORDPRESS_FILE_DOWNLOAD_URL
    : apiConfig.FILE_DOWNLOAD_URL;
  let data = {
    filePath: file_path,
  };
  let options = {
    responseType: "blob",
  };
  apiService.apiCall("post", url, data, options).then(
    function (response) {
      if (
        response &&
        response.data &&
        response.data.type === "application/json"
      ) {
        if (window.FileReader) {
          let reader = new FileReader();
          reader.onload = function (event) {
            let result = JSON.parse(event.target.result);
            return Promise.reject(result.responseDesc);
          };
          reader.readAsText(response.data);
        } else {
          return Promise.reject("Unable To Fetch Selected File!");
        }
      } else {
        return Promise.resolve(response);
      }
    },
    function (response) {
      return Promise.reject(response);
    }
  );
};

const downloadFiles = (downloadedFile, filename, filemimetype) => {
  // create a download anchor tag
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(downloadedFile.data, filename);
  } else {
    let downloadLink = document.createElement("a");
    downloadLink.target = "_blank";
    downloadLink.download = filename;
    // convert downloaded data to a Blob
    let blob = new Blob([downloadedFile.data], { type: filemimetype });
    // create an object URL from the Blob
    let URL = window.URL || window.webkitURL;
    let downloadUrl = URL.createObjectURL(blob);
    //window.open(downloadUrl);
    // set object URL as the anchor's href
    downloadLink.href = downloadUrl;
    // append the anchor to document body
    document.body.append(downloadLink);
    // fire a click event on the anchor
    downloadLink.click();
    // cleanup: remove element and revoke object URL
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadUrl);
  }
};

const checkGmcEnrollmentStatus = () => {
  let gmcPolicyId = Object.keys(localStorage.employeePolicyDetails["GMC"])[0];
  let enrollmentEndDate = moment(
    localStorage.employeePolicyDetails["GMC"][gmcPolicyId]
      .enrollment_cutoff_end_date,
    "YYYY-MM-DD"
  );
  return (
    moment().isSame(enrollmentEndDate, "day") ||
    moment().isBefore(enrollmentEndDate, "day")
  );
};

const removeQueryParams = (...queryParams) => {
  // To remove any query params of any URL
  // For e.g. /list?id=1 --> /list
  const url = new URL(window.location.href);
  queryParams.forEach((qp) => {
    url.searchParams.delete(qp);
  });
  history.replaceState(null, "", url.toString());
}

export {
  logoutUser,
  getCompanySubDomain,
  updateLocalStorage,
  updatePolicyDataToLocalStorage,
  updateSettingsToLocalStorage,
  getEmployeeStatusType,
  updatePolicyAccessLevels,
  fetchCustomFields,
  validateEmail,
  detectMobile,
  isSameOrBetween,
  fetchVoluntaryPolicies,
  getPolicyAccessLevel,
  fetchVoluntaryPolicyForEmployee,
  fetchVotingOptionByAge,
  fetchVoluntaryDependents,
  getEmployeeDob,
  getBasePoliciesForEmployee,
  policyName,
  capitalize,
  removeUnderscore,
  customCurrencyFormat,
  relationDisplayValue,
  copayFilter,
  getLocalStorageData,
  checkForNull,
  capitalizeText,
  getModifiedFieldsOfObject,
  restrictLength,
  checkPasswordExpiry,
  fetchSiTypeKey,
  getSumInsuredForAllRelationsOfEmployees,
  getEmployeeStatusForPolicy,
  getEmployeeWindowPeriodForPolicy,
  relationValue,
  customCurrencyRoundOff,
  clearConstantObject,
  getEmployeeMaritalStatus,
  getPolicySettingsData,
  fetchFileFromUrl,
  fetchtax,
  setMembersCovered,
  getAgeBandDependentsDob,
  clearDependents,
  clearMembersCovered,
  clearAgeBandDependentsDob,
  setDependents,
  fetchLandingPageUrl,
  redirectToHomepage,
  getDependents,
  setAgeBandDependentsDob,
  downloadFile,
  findValuesByKey,
  voluntaryRelationValue,
  getMembersCovered,
  filterDependentsBasedOnSelectedRelations,
  mergeDependentsWithAgeBandDob,
  loadCity,
  getStates,
  getTime,
  getDate,
  getDateTime,
  copyObject,
  fetchDirectPaymentUrl,
  calculateTimeAgo,
  convertJSONToCSVAndDownload,
  movetotpaSSO,
  getclaimStatus,
  replaceUnderscoreWithEmptySpace,
  payloadDate,
  validateDisplayValue,
  addDependentAPI,
  editDependentAPI,
  fetchFhplUrl,
  fetchBajajAllianzUrl,
  voluntaryInsuranceRedirect,
  formattedDate,
  downloadFiles,
  checkGmcEnrollmentStatus,
  fetchFile,
  removeQueryParams,
};
