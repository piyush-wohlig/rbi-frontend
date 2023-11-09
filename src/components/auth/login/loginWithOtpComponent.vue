<template>
  <form name="loginWithOtp">
    <div
      class="form-group"
      :class="{ username: showOptField }"
      v-if="!isOtpSent"
    >
      <span class="p-float-label">
        <InputText
          id="username"
          v-model="username"
          type="text"
          autocomplete="off"
          :class="{ 'p-invalid': usernameError }"
          aria-describedby="text-error"
        />
        <label for="username" class="text-xs required">{{
          authConst.LOGIN.PLACEHOLDERS.USERNAME
        }}</label>
      </span>
      <span v-if="usernameError" class="errorMsg">{{ usernameError }}</span>
    </div>
    <div class="form-group" :style="{ width: '100%' }" v-show="showOptField">
      <span class="p-input-icon-right" :style="{ width: '100%' }">
        <span class="p-float-label" :style="{ width: '100%' }">
          <InputText
            id="otp"
            v-model="otp"
            :type="showOtp ? 'text' : 'password'"
            autocomplete="off"
            @change="onInputChange"
            @input="onInputChange"
          />
          <label for="otp" class="text-xs required">{{
            authConst.LOGIN.PLACEHOLDERS.OTP
          }}</label>
          <i
            v-if="otp"
            class="cursor-pointer z-1 pi show-pass-icon"
            @click="toggleShow"
            :class="{
              'pi-eye-slash': showOtp && otp,
              'pi-eye': !showOtp,
            }"
          />
        </span>
        <span v-if="otpError" class="errorMsg">{{ otpError }}</span>
      </span>
    </div>
    <div class="otp-expire-count-down" v-if="isOtpSent">
      OTP will expire in {{ countdownDisplay }}
    </div>
    <div class="flex justify-content-between">
      <div class="required-field-wrapper">
        <span class="required-field-txt">
          <span class="red-color">*</span>
          {{ authConst.LOGIN.INFO.REQUIRED_FILED_INDICATION }}</span
        >
      </div>
      <div class="" v-if="!buttonDisabled">
        <span
          :class="[
            'forgot-pwd-link cursor-pointer',
            { disabled: buttonDisabled },
          ]"
          @click.prevent="loginWithOtp() || startCountdown()"
        >
          {{ authConst.LOGIN.ACTIONS.RESEND_OTP }}
        </span>
      </div>
    </div>
    <Button
      v-if="!showOptField"
      type="submit"
      class="login-btn"
      label="Send OTP"
      :disabled="!username || usernameError"
      @click.prevent="loginWithOtp()"
    />
    <Button
      v-else
      type="submit"
      class="login-btn"
      label="Submit"
      :disabled="!otp || otpError"
      @click.prevent="getCaptcha"
    />

    <recaptcha
      :isVisible="isVisible"
      @formSubmit="triggerFormSubmit"
    ></recaptcha>
  </form>
</template>

<script setup> 
import { ref, computed, defineEmits } from "vue";
import { useField, useForm } from "vee-validate";
// import recaptcha from "@/common/components/custom_recaptcha.vue";
import * as Yup from "yup";
import apiService from "@/common/services/apiServices";
import apiConfig from "@/common/config/apiConfig";
import authConst from "../authConfig";
import {
  getCompanySubDomain,
  updateLocalStorage,
  updatePolicyDataToLocalStorage,
  updateSettingsToLocalStorage,
  getEmployeeStatusType,
  updatePolicyAccessLevels,
  fetchCustomFields,
  validateEmail,
  checkPasswordExpiry,
  redirectToHomepage,
} from "@/common/helpers/commonFunctions";
import globalConfig from "@/common/config/GlobalConstants.js";
import { useToast } from "primevue/usetoast";
const { TOAST } = globalConfig;
const toast = useToast();
import { useRouter } from "vue-router";
const emit = defineEmits(["enableLoader"]);
const router = useRouter();
const showOtp = ref(false);
const isOtpSent = ref(false);
let showOptField = ref(false);
let countdown = ref(600);
let intervalId = ref(null);
let buttonDisabled = ref(true);
const { resetForm } = useForm();
const showLoading = ref(false);
const loginUserId2 = ref("");
const loginUserId = ref("");
const Timer = ref("");
const x = ref(null);
const loginApiData = ref({});
const disableEnter = ref(false);
const isVisible = ref();
let companySubDomain = getCompanySubDomain(window.location.host);

const { value: username, errorMessage: usernameError } = useField(
  "username",
  Yup.string().required(authConst.LOGIN.ERRORS.REQUIRED_FIELDS)
);
const { value: otp, errorMessage: otpError } = useField(
  "otp",
  showOptField.value
    ? Yup.string().required(authConst.LOGIN.ERRORS.REQUIRED_FIELDS)
    : undefined
);

const startCountdown = () => {
  buttonDisabled.value = true;
  countdown.value = 600;

  if (intervalId.value) {
    clearInterval(intervalId.value);
  }

  intervalId.value = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
    } else {
      clearInterval(intervalId.value);
      intervalId.value = null;
      buttonDisabled.value = false;
    }
  }, 1000);
};

const toggleShow = () => {
  if (otp.value) {
    showOtp.value = !showOtp.value;
  }
};

const getCaptcha = () => {
  isVisible.value = true;
};

const triggerFormSubmit = (captchaValue, popUpVisibility) => {
  emit("enableLoader", true);
  isVisible.value = popUpVisibility;
  if (captchaValue !== "") {
    try {
      validateOTP(captchaValue);
    } catch (err) {
      toast.add({
        severity: TOAST.SEVERITY.ERROR,
        detail: err.responseDesc,
        life: TOAST.DURATION,
      });
    }
  }
};

const countdownDisplay = computed(() => {
  const minutes = Math.floor(countdown.value / 60);
  const seconds = countdown.value % 60;
  return `${minutes.toString().padStart(2, "0")}m:${seconds
    .toString()
    .padStart(2, "0")}s`;
});

const getOTPApiCall = async (loginObject) => {
  loginApiData.value = {
    password: loginObject.loginPwd,
  };

  if (loginObject.loginCsd !== "") {
    loginApiData.value.username = username.value;
    loginApiData.value.csd = companySubDomain;
  } else {
    loginApiData.value.email = loginObject.loginID;
  }
  const response = await apiService.apiCall(
    "post",
    apiConfig.GET_OTP,
    loginApiData.value
  );
  if (response?.data?.responseCode === 0) {
    isOtpSent.value = true;
    toast.add({
      severity: TOAST.SEVERITY.SUCCESS,
      detail: response?.data?.responseDesc,
      life: TOAST.DURATION,
    });
  } else {
    isOtpSent.value = false;
    toast.add({
      severity: TOAST.SEVERITY.ERROR,
      detail: response?.data?.responseDesc,
      life: TOAST.DURATION,
    });
  }
  return response;
};

const loginWithOtp = () => {
  if (username.value && username.value.length > 0) {
    const loginObject = {};
    let validEmail = companySubDomain ? true : validateEmail(loginUserId.value);
    if (validEmail) {
      loginObject.loginID = loginUserId2.value;
      loginObject.loginCsd = companySubDomain;
      getOTPApiCall(loginObject)
        .then((response) => handleOTPResponse(response))
        .catch((response) => {
          showLoading.value = false;
          console.log(response, "error");
          isOtpSent.value = false;
          showOptField.value = false;
          resetForm();
        });
    } else {
      showLoading.value = false;
      showOptField.value = false;
      isOtpSent.value = false;
      disableEnter.value = false;
    }
    startCountdown();
  } else {
    try {
      showOptField.value = true;
    } catch (err) {
      console.log("err", err);
    }
  }
};

const handleOTPResponse = (response) => {
  showLoading.value = false;
  if (
    response.data.responseCode === 0 ||
    response.data.responseCode.toString() === "0"
  ) {
    isOtpSent.value = true;
    showOptField.value = true;
    let countDownDate = new Date().setMinutes(new Date().getMinutes() + 10);

    x.value = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      Timer.value = `${minutes}m ${seconds}s`;

      if (distance < 0) {
        clearInterval(x.value);
        Timer.value = "00:00";
        document.getElementById("resendButton").disabled = false;
      }
    }, 1000);
  }
};

const passwordChangeDate = ref(null);
const passwordResetDate = ref(null);

let subDomain = getCompanySubDomain(window.location.host);

const isSuperUser = () => {
  return localStorage.iaData.user?.isSuperUser;
};

const isSuperUserAlreadyLoggedInAsCorpUser = () => {
  if (localStorage.iaData.originalSession) {
    return localStorage.iaData?.originalSession?.user?.isSuperUser;
  }
  return false;
};

const getTopupStatus = async (apiPath, policyId) => {
  try {
    const tempObj = {};
    tempObj.policyId = policyId;
    tempObj.topupStatus = false;
    tempObj.isAlreadyAppliedForTopup = false;
    const response = await apiService.apiCall("get", apiPath);
    if (response.data.responseCode === 0) {
      if (response.data.data[0].topup.length > 0) {
        tempObj.topupStatus = response.data.data[0].topup[0].topupStatus;
        tempObj.isAlreadyAppliedForTopup =
          response.data.data[0].topup[0].isAlreadyAppliedForTopup;
      }
    } else {
      toast.add({
        severity: TOAST.SEVERITY.ERROR,
        detail: response.data.responseDesc,
        life: TOAST.DURATION,
      });
    }
    return tempObj;
  } catch (error) {
    console.log("Error", error);
  }
};

const apiPathStringReplace = (apiPath, replaceObject) => {
  return apiPath.replace(/%\w+%/g, function (all) {
    return replaceObject[all] || all;
  });
};

const updateTopupStatusToLocalStorage = async () => {
  try {
    let policyIdObj = JSON.parse(localStorage.employeePolicyDetails);
    let companyId = JSON.parse(localStorage.iaData).company.companyID;
    let employeeId = JSON.parse(localStorage.iaData).user.id;
    const isAlreadyAppliedForTopupObj = {};
    const topStatusObj = {};
    const apiPath = apiConfig.GET_TOPUP_SIOPTIONS_FOR_POLICY;
    for (let policyType in policyIdObj) {
      for (let policyId in policyIdObj[policyType]) {
        let replacements = {
          "%companyId%": companyId,
          "%policyId%": policyId,
          "%employeeId%": employeeId,
        };
        let finalAPIpath = apiPathStringReplace(apiPath, replacements);
        const res = await getTopupStatus(finalAPIpath, policyId);
        if (res) {
          topStatusObj[res.policyId] = res.topupStatus;
          isAlreadyAppliedForTopupObj[res.policyId] =
            res.isAlreadyAppliedForTopup;
        } else {
          toast.add({
            severity: TOAST.SEVERITY.ERROR,
            detail: `Not Able To Fetch Topup Status For Some Policies!`,
            life: TOAST.DURATION,
          });
        }
      }
    }
    localStorage.setItem(
      "isAlreadyAppliedForTopup",
      JSON.stringify(isAlreadyAppliedForTopupObj)
    );
    localStorage.setItem("employeeTopupStatus", JSON.stringify(topStatusObj));
  } catch (error) {
    console.log("Error", error);
  }
};

const setUserDataInLocalStorage = async (data) => {
  const localStorage = window.localStorage;
  passwordChangeDate.value = data.data.user.passwordChangedDate;
  passwordResetDate.value = data.data.user.passwordResetDate;

  // Update user information to localStorage
  localStorage.token_id = data?.id;
  // Update local storage and perform session check
  await updateLocalStorage(data, subDomain);
  localStorage.corporate_user_landing_page_url = data.data.user.landingPageUrl;
  localStorage.corporate_user_visualr_url = data.data.user.visualrPageUrl;
  localStorage.employees_access_level = data.data.user.employees_access_level;
  localStorage.employeeId = data.data.user.id;

  try {
    await updatePolicyDataToLocalStorage();
    await updateTopupStatusToLocalStorage();
    await updateSettingsToLocalStorage();
    await fetchCustomFields();
  } catch (error) {
    emit("enableLoader", false);
    console.log("Error", error);
  }
  // Promises for letious asynchronous operations
  const promises = [];

  promises.push(
    getEmployeeStatusType()
      .then((response) => {
        if (response.value.data.responseCode !== 0) {
          emit("enableLoader", false);
          toast.add({
            severity: TOAST.SEVERITY.ERROR,
            detail: response.value.data.responseDesc,
            life: TOAST.DURATION,
          });
        } else {
          updatePolicyAccessLevels(response.value.data.data);
        }
      })
      .catch((error_response) => {
        emit("enableLoader", false);
        console.log(error_response);
      })
  );

  await Promise.all(promises);
};

const setInitialStateOfApplication = (data) => {
  const localStorage = window.localStorage;
  // let companySubDomain = getCompanySubDomain(window.location.host);
  // let passwordResetDate = data.data.data.user.passwordResetDate;
  let passwordChangeDate = data?.data?.user?.passwordChangedDate;
  localStorage.token_id = data?.data?.id;
  globalConfig.isUserLoggedIn = true;
  emit("enableLoader", false);
  if (isSuperUser()) {
    location.reload(true);
  } else if (
    passwordChangeDate === null &&
    !isSuperUserAlreadyLoggedInAsCorpUser()
  ) {
    globalConfig.onIagreePage = true;
    globalConfig.testPasswordChange = false;
    globalConfig.changePassword = true;
    router.push("/iAgree");
  } else if (
    passwordChangeDate !== null &&
    checkPasswordExpiry(data) >= globalConfig.passwordExpiry.passwordExpiryLimit
  ) {
    globalConfig.changePassword = true;
    globalConfig.passwordExpired = true;
    router.push("/changePassword");
  } else {
    globalConfig.testPasswordChange = globalConfig.onIagreePage = false;
    redirectToHomepage();
  }
};

const loginOtpApiCall = async (loginObject, captchaValue) => {
  const apiData = {
    OTP: otp.value,
  };

  if (loginObject.loginCsd !== "") {
    apiData.username = username.value;
    apiData.csd = companySubDomain;
  } else {
    apiData.email = username.value;
  }

  if (captchaValue !== undefined && captchaValue !== "") {
    apiData.captchaResponse = captchaValue;
  }

  const url = apiConfig.LOGIN_ENDPOINT;
  const response = await apiService.apiCall("post", url, apiData);
  if (response.data.responseCode == 0) {
    toast.add({
      severity: TOAST.SEVERITY.SUCCESS,
      detail: response.data.responseDesc,
      life: TOAST.DURATION,
    });
    await setUserDataInLocalStorage(response.data);
    setInitialStateOfApplication(response.data);
  } else {
    emit("enableLoader", false);
    toast.add({
      severity: TOAST.SEVERITY.ERROR,
      detail: response.data.responseDesc,
      life: TOAST.DURATION,
    });
  }
};

const validateOTP = async (captchaValue) => {
  clearInterval(x);
  const loginObject = {
    loginID: username.name,
    loginPwd: "",
    loginCsd: companySubDomain,
    captchaResponse: undefined,
  };
  try {
    showLoading.value = true;
    loginOtpApiCall(loginObject, captchaValue);
  } catch (error) {
    emit("enableLoader", false);
    if (error === "Your OTP is expired.") {
      document.getElementById("Timer").innerHTML = "00:00";
      document.getElementById("resendButton").disabled = false;
    }
    showLoading.value = false;
    resetForm();
  }
};
</script>

<style lang="scss" scoped>
:deep(.p-float-label label) {
  transform: translateY(-60%);
  margin-top: 0;
  line-height: 1.2;
}

.show-pass-icon {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
}
.forgot-pwd-link {
  &.disabled {
    pointer-events: none; /* Disable click events */
    text-decoration: none; /* Remove underline */
    cursor: not-allowed; /* Show a "not allowed" cursor on hover */
  }
}
.icon-button.p-button {
  background-color: transparent !important;
  border: none !important;
  color: inherit;
  font-size: 1.5em;
}

.icon-button.p-button:hover,
.icon-button.p-button:hover .pi {
  background-color: transparent !important;
  color: inherit !important;
}
.larger-icon .pi {
  font-size: 18px;
}
/* Responsive Design */
@media only screen and (max-width: 600px) {
  .captchaContainer {
    max-width: 100%;
  }
  .captchaQuestion {
    font-size: 0.8rem;
    line-height: 1.6rem;
  }
}

@media only screen and (max-height: 768px) and (min-width: 768px) {
  :deep(.p-float-label label) {
    font-size: 10px !important;
  }

  .forgot-pwd-link {
    font-size: 12px !important;
  }
}
</style>
