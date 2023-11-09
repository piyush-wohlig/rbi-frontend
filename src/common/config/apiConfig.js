const config = {
    MAINSUB_DOMAIN: "www",
    HOST: "gibindia.com",
    SWIPE_Z_SUB_DOMAIN: "global-uat",
    SWIPE_Z_HOST: "opusnet.in",
    PORT: "api",
    SWIPE_Z_PORT: "api",
    MICROSERVICE: {
      COMPANY: "ms1",
      LOGIN: "ms2",
      POLICY: "ms3",
      IMPORT: "ms4",
      ENDORSEMENT: "ms5",
      DASHBOARD: "ms6",
      CLAIMS: "ms7",
      NOTIFICATION: "ms8",
      ECARD: "ms9",
      VOLUNTARY: "ms10",
      SWIPEZVERSION: "v1",
    },
    PROTOCOL: "https",
    SWIPE_Z_PROTOCOL: "https",
  };
  config.PROTOCOL_STR = `${config.PROTOCOL}://${config.MAINSUB_DOMAIN}.${config.HOST}/${config.PORT}/`;
  config.SWIPEZ_PROTOCOL_STR =
    config.SWIPEZ_PROTOCOL +
    "://" +
    config.SWIPEZ_SUB_DOMAIN +
    "." +
    config.SWIPEZ_HOST +
    "/" +
    config.SWIPEZ_PORT +
    "/";
  config.HOST_URL = config.PROTOCOL + "://" + config.HOST;
  config.PORT_IP = {
    COMPANY: config.PROTOCOL_STR + config.MICROSERVICE.COMPANY,
    LOGIN: config.PROTOCOL_STR + config.MICROSERVICE.LOGIN,
    POLICY: config.PROTOCOL_STR + config.MICROSERVICE.POLICY,
    IMPORT: config.PROTOCOL_STR + config.MICROSERVICE.IMPORT,
    DASHBOARD: config.PROTOCOL_STR + config.MICROSERVICE.DASHBOARD,
    CLAIMS: config.PROTOCOL_STR + config.MICROSERVICE.CLAIMS,
    ENDORSEMENT: config.PROTOCOL_STR + config.MICROSERVICE.ENDORSEMENT,
    NOTIFICATION: config.PROTOCOL_STR + config.MICROSERVICE.NOTIFICATION,
    ECARD: config.PROTOCOL_STR + config.MICROSERVICE.ECARD,
    VOLUNTARY: config.PROTOCOL_STR + config.MICROSERVICE.VOLUNTARY,
    SWIPEZ_VERSION:
      config.SWIPEZ_PROTOCOL_STR + config.MICROSERVICE.SWIPEZ_VERSION,
  };
  
  config.LOGIN_ENDPOINT = config.PORT_IP.LOGIN + "/user/login";
  config.LOGOUT_API = config.PORT_IP.LOGIN + "/user/logout";
  config.SESSION_API = config.PORT_IP.LOGIN + "/user/session";
  config.GET_OTP = config.PORT_IP.LOGIN + "/user/getOTP";
  config.GET_CAPTCHA = config.PORT_IP.LOGIN + "/user/captcha";
  config.FORGOT_PASSWORD_API = config.PORT_IP.LOGIN + "/user/password/forgot";
  config.CHANGE_PASSWORD = config.PORT_IP.LOGIN + "/user/account/password/change";
  config.RESET_PASSWORD = config.PORT_IP.LOGIN + "/user/password/reset/";
  config.GET_ALL_POLICIES = config.PORT_IP.POLICY + "/company/";
  config.GET_VOLUNTARY_POLICIES =
    config.PORT_IP.VOLUNTARY +
    "/company/%companyId%/voluntary/policies/%policyFlag%";
  
  config.GET_EMPLOYEE_POLICY_DETAILS =
    config.PORT_IP.POLICY + "/company/%companyId%/employee/%employeeId%";
  
  config.GET_COMPANY_SETTING =
    config.PORT_IP.COMPANY + "/Company/%companyID%/Settings";
  
  config.GET_EMPLOYEE_STATUS =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/endorsement/employees/%employeeId%";
  
  config.FETCH_CUSTOM_FIELD =
    config.PORT_IP.COMPANY + "/Company/%companyId%/custom/fields";
  
  config.FETCH_CORPORATE_SSP = config.PORT_IP.COMPANY + "/Company/sso/config";
  config.GET_EMPLOYEE_PROFILE =
    config.PORT_IP.LOGIN + "/company/%companyId%/employee/%employeeId%";
  config.WEBSERVICEURL = {
    SAFETYNET: config.PORT_IP.LOGIN + "/user/intializeSafteyNet",
  };
  config.GET_EMPLOYEE_DETAILS_LIST =
    config.PORT_IP.IMPORT +
    "/company/%companyId%/employees/detailed/page/%page%/perpage/%perpage%";
  
  config.GET_DEPENDANTS_LIST =
    config.PORT_IP.IMPORT +
    "/company/%companyId%/dependants/page/1/perpage/%perpage%/";
  
  config.GET_PENDING_DEPENDENTEDITAPPROVALS =
    config.PORT_IP.IMPORT +
    "/company/%companyId%/pendingApproval/listDependantedits";
  
  config.GET_VOLUNTARY_POLICIES_BOTH =
    config.PORT_IP.VOLUNTARY + "/company/%companyId%/voluntary/policies/both";
  
  config.GET_REPORT_NOMINEES =
    config.PORT_IP.LOGIN + "/company/%companyId%/report/nominees";
  
  config.WEBSERVICEURL = {
    SAFETYNET: config.PORT_IP.LOGIN + "/user/intializeSafteyNet",
  };
  
  config.GET_POLICY_SETTINGSDATA =
    config.PORT_IP.POLICY + "/company/%companyId%/policy/%policyId%/setting";
  
  config.GET_ENROLLMENT_POLICY =
    config.PORT_IP.ENDORSEMENT + "/company/%companyId%/policy";
  
  config.GET_POLICY_DETAILS =
    config.PORT_IP.POLICY + "/company/:companyId/policy/:policyId";
  
  config.GET_ENROLLMENT_VOLUNTARY =
    config.PORT_IP.VOLUNTARY +
    "/company/%companyId%/voluntary/policies/voluntary";
  
  config.GET_ENROLLMENT_VOLUNTARY_DATA =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/endorsement/policy/%policyId%";
  
  config.ADD_EMERGENCY_CONTACT =
    config.PORT_IP.LOGIN +
    "/company/%companyId%/employee/%employeeId%/emergencyContact";
  
  config.EDIT_EMERGENCY_CONTACT =
    config.PORT_IP.LOGIN +
    "/company/%companyId%/employee/%employeeId%/emergencyContact";
  
  config.DELETE_EMERGENCY_CONTACT =
    config.PORT_IP.LOGIN +
    "/company/%companyId%/employee/%employeeId%/emergencyContact/remove";
  
  config.UPDATE_PERSONAL_INFO =
    config.PORT_IP.LOGIN + "/company/%companyID%/employee/%employeeID%/personal";
  
  config.GET_VOLUNTARY_POLICIES =
    config.PORT_IP.VOLUNTARY +
    "/company/%companyId%/voluntary/policies/%policyFlag%";
  
  config.GET_VOLUNTARY_POLICY_EMPLOYEE_DETAILS =
    config.PORT_IP.VOLUNTARY +
    "/company/%companyId%/voluntaryPolicy/%policyId%/employee/%employeeId%";
  
  config.VOLUNTARY_GET_DEPENDENTS =
    config.PORT_IP.LOGIN +
    "/company/%companyId%/employee/%employeeId%/dependants/%policyId%";
  
  config.GET_VOLUNTARY_POLICIES_BOTH =
    config.PORT_IP.VOLUNTARY + "/company/:companyId/voluntary/policies/both";
  
  config.GET_HOSPITALS =
    config.PORT_IP.IMPORT + "/company/%companyId%/hospitals/%pid%";
  
  config.GET_PENDINGEMPLOYEE_APPROVALS =
    config.PORT_IP.IMPORT + "/company/%companyId%/pendingApproval/listEmployees";
  
  config.GET_PENDINGDEPENDENT_APPROVALS =
    config.PORT_IP.IMPORT + "/company/%companyId%/pendingApproval/listDependants";
  
  config.CORPORATE_ADDITION_UPLOAD =
    config.PORT_IP.IMPORT + "/company/%companyId%/validate/employees/";
  
  config.GET_CONSOLIDATE_PRODUCT_MAPPING =
    config.PORT_IP.POLICY + "/company/%companyId%/report";
  
  config.GET_ENROLLMENT_REPORT_EDIT_EMPLOYEE =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/approvalReport/editEmployees/policy/%policyId%";
  
  config.DELETE_DEPENDENTSDATA =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/pendingApproval/listDependentDeletes";
  
  config.NEW_EMP_PENDINGDEPENDENTSLIST =
    config.PORT_IP.ENDORSEMENT + "/company/%companyId%/endorsement/dependents";
  
  config.GET_ENROLLMENT_REPORT_EDIT_DEPENDENT =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/approvalReport/editDependents/policy/%policyId%";
  
  config.GET_ENROLLMENT_REPORT_ADD_DEPENDENT =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/approvalReport/addDependents/policy/%policyId%";
  
  config.OFFLINEUPLOAD_UPDATEFILESTATUS =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/offlineUpload/updateFileStatus";
  
  config.GET_ENROLLMENT_REPORT_DELETE_DEPENDENT =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/approvalReport/deleteDependents/policy/%policyId%";
  
  config.GET_NOMINEE_DATA_API =
    config.PORT_IP.VOLUNTARY + "/company/%companyId%/voluntary/policies/both";
  
  config.GET_ENDORSEMENT_POLICY =
    config.PORT_IP.ENDORSEMENT + "/company/%companyId%/endorsement/getPolicy";
  
  config.GET_ACTIVEEMPLOYEES_LIST =
    config.PORT_IP.ENDORSEMENT + "/company/%companyId%/list/activeEmployees";
  
  config.GET_ACTIVEDEPENDENTS_LIST =
    config.PORT_IP.ENDORSEMENT + "/company/%companyId%/list/activeDependents/";
  
  config.DELETE_EMPLOYEE_GRID =
    config.PORT_IP.ENDORSEMENT + "/company/%companyId%/soft/delete/";
  
  config.VALIDATE_EMPLOYEES =
    config.PORT_IP.ENDORSEMENT + "/company/%companyId%/validate/employees/";
  
  config.VALIDATE_EMPLOYEES_MODIFICATION =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/validate/edit/uploads/true/";
  
  config.SOFTDELETEVALIDATEDEP =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/validate/dependents/false/";
  
  config.GET_CORPORATE_REPORTS_DATA_CLAIMS =
    config.PORT_IP.CLAIMS + "/Dashboard/company/%companyId%/claims/%claimId%";
  
  config.GET_CLAIM_INTIMATION_BOTH =
    config.PORT_IP.VOLUNTARY + "/company/%companyId%/voluntary/policies/both";
  config.GET_CLAIM_INTIMATION_DATA =
    config.PORT_IP.CLAIMS +
    "/company/%companyId%/policy/%claimId%/intimate-claim";
  
  config.GET_HELP_DESK = config.PORT_IP.IMPORT + "/Company/%companyId%/helpdesk";
  
  config.GET_EMPLOYEES_CODE_LIST =
    config.PORT_IP.IMPORT + "/company/%companyId%/employees/";
  
  config.PENDING_EMPLOYEE_EDIT =
    config.PORT_IP.IMPORT + "/company/:companyId/adminApproval/";
  
  config.CLAIMSTATUSBY_EMPLOYEEID =
    config.PORT_IP.CLAIMS + "/Dashboard/claimStatusByEmployeeID/";
  
  config.CORPORATE_CLAIMS_SETTLEMENT_PAYMENT =
    config.PORT_IP.CLAIMS +
    "/company/:companyId/employee/:employee/claims/:claims/payment";
  
  config.DOWNLOAD_FILE = config.PORT_IP.POLICY + "/download/file";
  config.SAVE_FEEDBACK =
    config.PORT_IP.LOGIN +
    "/company/%companyId%/employee/%employeeId%/savefeedback";
  config.GET_WELLNESS_EVENT =
    config.PORT_IP.COMPANY +
    "/Wellness/Company/%companyId%/Employee/%employeeId%";
  config.GET_PARTNER =
    config.PORT_IP.LOGIN + "/company/%companyId%/employee/%employeeId%";
  config.GET_PARTNER_URL =
    config.PORT_IP.CLAIMS + "/wellnessVendor/visitappEncryptString";
  config.POST_FLOAT_STATEMENT =
    config.PORT_IP.ENDORSEMENT + "/company/%companyId%/float/statement";
  
  config.POST_FLOAT_STATEMENT_LINEWISE =
    config.PORT_IP.ENDORSEMENT + "/company/%companyId%/float/statement/lineWise";
  
  config.LIST_EMPLOYEEDEPENDANT_FILEUPLOAD =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/policyId/:policyId/listEmployeeDependantFileUpload/page/1/";
  
  config.PENDING_DEPENDENTDELETES =
    config.PORT_IP.ENDORSEMENT + "/company/:companyId/adminApproval/";
  
  config.GET_WELLNESS_EVENT =
    config.PORT_IP.COMPANY +
    "/Wellness/Company/%companyId%/Employee/%employeeId%";
  config.UPDATE_ATTENDEES =
    config.PORT_IP.COMPANY + "/Wellness/Company/%companyId%/attendees/update?";
  config.PARTNER_LIST =
    config.PORT_IP.COMPANY +
    "/wellnessPartner/company/%companyId%/employee/%employeeId%/getWellnessPartnerURL";
  config.GET_WELLNESS_CONTENT =
    config.PORT_IP.COMPANY +
    "/WellnessContent/company/%companyId%/getWellnessContent";
  config.GET_DISEASE_CATEGORY =
    config.PORT_IP.COMPANY +
    "/WellnessContent/company/%companyId%/getDiseaseCategoryYears";
  config.UPDATE_CONTENT_EVENT_TYPE =
    config.PORT_IP.LOGIN +
    "/company/%companyId%/employee/%employeeId%/updateContentVisitCount";
  
  config.GET_POLICY_LIST = config.PORT_IP.POLICY + "/company/%companyId%/policy/";
  config.GET_VOLUNTARY_POLICY_DETAILS =
    config.PORT_IP.VOLUNTARY + "/company/:companyId/voluntaryPolicy/:policyId";
  
  config.DEPENDENTS_APPROVE =
    config.PORT_IP.VOLUNTARY +
    "/company/:companyId/policy/:policyId/dependents/approval/";
  
  config.GET_POLICY_DETAILS =
    config.PORT_IP.POLICY + "/company/:companyId/policy/:policyId";
  
  config.FETCH_LOCATION =
    config.PORT_IP.DASHBOARD + "/Dashboard/getBranchLocations?companyId";
  
  config.GET_CLAIMS_AMT_NO_CLAIMS =
    config.PORT_IP.CLAIMS +
    "/%dashboardType%/claimRelationshipWiseAndClaimCost?location=%locationValue%&companyId=%companyId%&policyType=%policyType%&policyId=%policyId%";
  config.GET_CLAIMS_AMT_STATUS =
    config.PORT_IP.CLAIMS +
    "/%dashboardType%/claimAmountStatusWise?location=%locationValue%&companyId=%companyId%&policyType=%policyType%&policyId=%policyId%";
  config.GET_CLAIMS_NO_STATUS =
    config.PORT_IP.CLAIMS +
    "/%dashboardType%/claimNumberStatusWise?location=%locationValue%&companyId=%companyId%&policyType=%policyType%&policyId=%policyId%";
  config.GET_CLAIMS_TYPEWISE =
    config.PORT_IP.CLAIMS +
    "/%dashboardType%/claimSumInsuredWiseDistributionClaimsType?location=%locationValue%&companyId=%companyId%&policyType=%policyType%&policyId=%policyId%";
  config.GET_CLAIMS_VS =
    config.PORT_IP.CLAIMS +
    "/HRDashboard/claimVsPremiumRatio?&policyId=%policyId%&companyId=%companyId%";
  config.GET_CLIMS_VS_RATION =
    config.PORT_IP.CLAIMS +
    "/Dashboard/claimVsPremiumRatio?policyType=%policyType%&companyId=%companyId%";
  config.GET_CLAIM_LOCATION_WISE =
    config.PORT_IP.CLAIMS +
    "/%dashboardType%/claimLocationWise?location=%locationValue%&policyType=%policyType%&policyId=%policyId%";
  
  config.RELATIONSHIP_GENDER_WISE_COUNT =
    config.PORT_IP.DASHBOARD +
    "/%dashboardType%/RelationshipAndGenderWiseCount?location=%locationValue%&policyType=%policyValue%&companyId=%companyId%&policyId=%policyId%";
  config.GET_GENDER_WISE_DISTRIBUTION =
    config.PORT_IP.DASHBOARD +
    "/%dashboardType%/genderWiseDistributionCoveredMembers?location=%locationValue%&policyType=%policyValue%&companyId=%companyId%&policyId=%policyId%";
  config.MONTH_ON_MONTH_ADD_DEL_EMP =
    config.PORT_IP.DASHBOARD +
    "/%dashboardType%/MonthOnMonthAddDeleteEmp?location=%locationValue%&policyType=%policyValue%&companyId=%companyId%&policyId=%policyId%";
  config.GET_PREMIUM_DATA =
    config.PORT_IP.DASHBOARD +
    "/Dashboard/getPremiumData?location=%locationValue%&policyType=%policyValue%&companyId=%companyId%";
  config.SUM_INSURED_RELATIONSHIP =
    config.PORT_IP.DASHBOARD +
    "/%dashboardType%/SumInsuredAndRelationshipWise?location=%locationValue%&policyType=%policyValue%&companyId=%companyId%&policyId=%policyId%";
  config.GET_INSURED_AGE =
    config.PORT_IP.DASHBOARD +
    "/%dashboardType%/InsuredAgeBandWise?location=%locationValue%&policyType=%policyValue%&companyId=%companyId%&policyId=%policyId%";
  config.CORPORATES_LIST_API = config.PORT_IP.COMPANY + "/company/list";
  config.PUSH_BROADCAST = config.PORT_IP.NOTIFICATION + "/push/broadcast";
  config.GET_PUSH_BROADCAST =
    config.PORT_IP.NOTIFICATION + "/push/user-push-notification";
  config.SEEN_NOTIFICATIONS =
    config.PORT_IP.NOTIFICATION + "/push/user-push-notification-seen";
  config.READ_NOTIFICATIONS =
    config.PORT_IP.NOTIFICATION + "/push/user-push-notification-read";
  config.PUSH_BROADCAST_DASHBOARD =
    config.PORT_IP.NOTIFICATION + "/push/broadcast";
  
  config.TAT_DOWNLOAD =
    config.PORT_IP.CLAIMS + "/company/%companyId%/TAT/Report/Policy/%policyId%";
  config.TAT_CHARTS =
    config.PORT_IP.CLAIMS + "/company/%companyId%/TAT/Report/Chart/%chartId%";
  config.GET_CHART_TABLE =
    config.PORT_IP.CLAIMS + "/company/%companyId%/TAT/Claims/Data";
  
  config.GET_WELLNESS_REPORT_DATA =
    config.PORT_IP.COMPANY + "/Wellness/company/%companyId%/eventReport";
  config.GET_CORPORATE_CLAIM_SETTLEMENT =
    config.PORT_IP.CLAIMS + "/company/%companyId%/claims/settled-payments";
  config.GET_NOMINEE_POLICY =
    config.PORT_IP.POLICY + "/company/%companyId%/policy";
  config.GET_EMPLOYEE_POLICY_DETAILS =
    config.PORT_IP.POLICY + "/company/%companyId%/employee/%employeeId%";
  config.GET_EMPLOYEE_POLICY_DETAILS =
    config.PORT_IP.POLICY + "/company/%companyId%/employee/%employeeId%";
  config.GET_EMPLOYEE_EMPLOYEE_DETAILS =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/endorsement/employees/%employeeId%";
  config.GET_NOMINEE_LIST =
    config.PORT_IP.LOGIN + "/company/%companyId%/employee/%employeeId%/nominees";
  config.NOMINEE_PERCENTAGE_ALLOCATION =
    config.PORT_IP.LOGIN +
    "/company/%companyId%/policy/%policyId%/employee/%employeeId%/nominee/percentage";
  config.GET_POLICY_SETTINGS_DATA =
    config.PORT_IP.POLICY + "/company/%companyId%/policy/%policyId%/setting";
  
  config.FETCH_DEFAULT_TAX = config.PORT_IP.COMPANY + "/Tax";
  config.GET_CORPORATE_REPORTS_E_CARD =
    config.PORT_IP.ECARD + "/ecard/view/policy/%claimId%";
  config.POST_DOWNLOAD = config.PORT_IP.POLICY + "/download/file";
  
  config.GET_DEPENDENT_LIST =
    config.PORT_IP.LOGIN +
    "/company/%companyId%/employee/%employeeId%/dependants";
  config.GET_NOMINEE_LIST =
    config.PORT_IP.LOGIN + "/company/%companyId%/employee/%employeeId%/nominees";
  config.GET_EMPLOYEE_POLICIES =
    config.PORT_IP.POLICY + "/company/%companyID%/employee/%employeeID%";
  config.GET_TOPUP_SIOPTIONS_FOR_POLICY =
    config.PORT_IP.POLICY +
    "/company/%companyId%/policy/%policyId%/emp/%employeeId%";
  config.GET_CLAIM_STATUS =
    config.PORT_IP.CLAIMS +
    "/Dashboard/claimStatusByEmployeeID/%employeeId%/%isClaimPayment%";
  config.GET_POLICY_SETTINGS_DATA =
    config.PORT_IP.POLICY + "/company/%companyId%/policy/%policyId%/setting";
  
  config.GET_DEPENDANTS_LIST_DASHBOARD =
    config.PORT_IP.LOGIN +
    "/company/%companyId%/employee/%employeeId%/dependants";
  config.VOLUNTARY_GET_DEPENDENTS =
    config.PORT_IP.LOGIN +
    "/company/%companyId%/employee/%employeeId%/dependants/%policyId%";
  config.GET_VOLUNTARY_POLICY_EMP_DETAILS =
    config.PORT_IP.VOLUNTARY +
    "/company/%companyId%/voluntaryPolicy/%policyId%/employee/%employeeId%";
  config.FETCH_DIRECT_PAYMENT_URL =
    config.PORT_IP.VOLUNTARY +
    "/company/%companyId%/voluntary/%policyId%/directPayment/%employeeId%";
  
  config.WELLNESS_VENDOR_LIST =
    config.PORT_IP.CLAIMS + "/wellnessVendor/list?companyId=";
  config.WELLNESS_VENDOR_URL =
    config.PORT_IP.CLAIMS + "/wellnessVendor/visitappEncryptString";
  config.ECARD =
    config.PORT_IP.ECARD + "/ecard/view/policy/%policyId%/employee/%employeeId%";
  config.GET_EMP_UPLOAD_CLAIMFORMDETAILS =
    config.PORT_IP.CLAIMS + "/company/%companyId%/list/formdetails";
  config.FILE_DOWNLOAD_URL = config.PORT_IP.POLICY + "/download/file";
  config.MOVE_TO_TPASSO = config.PORT_IP.CLAIMS + "/mediClmInt/medAsstSSO";
  
  config.POST_ADD_NOMINEE =
    config.PORT_IP.LOGIN +
    "/company/%companyId%/policy/%policyId%/employee/%employeeId%/nominees";
  config.UNVOTE_VOLUNTARY_SI_OPTION =
    config.PORT_IP.VOLUNTARY + "/company/%companyId%/voluntaryVoting/unvote";
  config.VOTE_VOLUNTARY_SI_OPTION =
    config.PORT_IP.VOLUNTARY + "/company/%companyId%/voluntaryVoting";
  config.VOLUNTARY_ADD_DEPENDENT =
    config.PORT_IP.VOLUNTARY +
    "/company/%companyId%/policy/%policyId%/addDependent";
  (config.VOLUNTARY_EDIT_DEPENDENT =
    config.PORT_IP.VOLUNTARY +
    "/company/%companyId%/policy/%policyId%/editDependent/%dependentId%"),
    (config.GET_VOTINGREPORT_LOCATIONWISE =
      config.PORT_IP.VOLUNTARY + "/company/%companyId%/policy/%policyId%/");
  config.DELETE_NOMINEE =
    config.PORT_IP.LOGIN +
    "/company/%companyId%/policy/%policyId%/employee/%employeeId%/nominees";
  
  config.GET_VOTINGREPORT_LOCATIONWISE =
    config.PORT_IP.VOLUNTARY + "/company/%companyId%/policy/%policyId%/";
  
  config.FETCH_DIRECT_PAYMENT_URL =
    config.PORT_IP.VOLUNTARY +
    "/company/%companyId%/voluntary/%policyId%/directPayment/%employeeId%";
  
  config.PUSH_NOTIFICATION =
    config.PORT_IP.NOTIFICATION + "/push/user-push-notification";
  config.SEEN_NOTIFICATIONS =
    config.PORT_IP.NOTIFICATION + "/push/user-push-notification-seen";
  config.READ_NOTIFICATIONS =
    config.PORT_IP.NOTIFICATION + "/push/user-push-notification-read";
  config.GET_CITY = config.PORT_IP.COMPANY + "/GeoLocation/State/";
  config.GET_STATES = config.PORT_IP.COMPANY + "/GeoLocation/Country/%id%/State";
  config.UPDATE_EVENT_ATTENDEES =
    config.PORT_IP.COMPANY + "/Wellness/Company/%companyId%/attendees/%action%?";
  config.UPDATE_NOMINEE =
    config.PORT_IP.LOGIN +
    "/company/%companyId%/policy/%policyId%/employee/%employeeId%/nominee/%nomineeId%";
  config.CLAIM_INTIMATION_FORM_SUBMIT =
    config.PORT_IP.CLAIMS +
    "/company/%companyId%/policy/%policyId%/intimate-claim";
  config.MOVE_TO_TPA_SSO = config.PORT_IP.CLAIMS + "/mediClmInt/medAsstSSO";
  config.GET_MY_CLAIM_INTIMATION_LIST_DETAILED =
    config.PORT_IP.CLAIMS +
    "/company/%companyId%/policy/%policyId%/employee/%employeeId%/intimate-claim";
  
  config.CLAIM_INTIMATION_FORM_SUBMIT =
    config.PORT_IP.CLAIMS +
    "/company/%companyId%/policy/%policyId%/intimate-claim";
  
  config.MOVE_TO_TPA_SSO = config.PORT_IP.CLAIMS + "/mediClmInt/medAsstSSO";
  
  config.GET_MY_CLAIM_INTIMATION_LIST_DETAILED =
    config.PORT_IP.CLAIMS +
    "/company/%companyId%/policy/%policyId%/employee/%employeeId%/intimate-claim";
  
  config.FETCH_FHPL_URL =
    config.PORT_IP.LOGIN + "/company/%companyId%/policy/%policyId%/tpaSso";
  config.GET_DEPENDENT_LIST =
    config.PORT_IP.LOGIN +
    "/company/%companyId%/employee/%employeeId%/dependants";
  config.FETCH_BAJAJ_ALLIANZ_URL =
    config.PORT_IP.LOGIN + "/company/%companyId%/bajajAllianzSso";
  config.SWIPEZ_VOLUNTARY_REDIRECTION_URL =
    config.SWIPE_Z_PROTOCOL +
    "://" +
    config.SWIPE_Z_SUB_DOMAIN +
    "." +
    config.SWIPE_Z_HOST +
    "/redirect/";
  
  config.DOWNLOAD_EMPLOYEE_ENDORSEMENT =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/endorsement/batch/download";
  config.DOWNLOAD_DEPENDENT_ENDORSEMENT =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/endorsement/batch/download/dependents";
  config.DOWNLOAD_DELETE_EMPLOYEE_ENDORSEMENT =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/endorsement/delete/employee/batch/download";
  config.DOWNLOAD_DELETE_DEPENDENT_ENDORSEMENT =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyId%/download/delete/batch/dependent";
  
  config.GET_EMPLOYEE_POLICIES =
    config.PORT_IP.POLICY + "/company/%companyId%/employee/%employeeID%";
  config.GET_ENDORSEMENT_PENDING_DEPENDENTLIST =
    config.PORT_IP.ENDORSEMENT +
    "/company/%companyID%/policy/%policyId%/dependent/%dependentID%";
  config.WORDPRESS_FILE_DOWNLOAD_URL =
    config.PORT_IP.POLICY + "/download/file/wp";
  config.FILE_DOWNLOAD_URL = config.PORT_IP.POLICY + "/download/file";
  export default config;
  