import apiConfig from "../config/apiConfig";
import apiService from "../services/apiServices";
import globalConfig from "@/common/config/GlobalConstants.js";
import router from "@/routes";
import { ref } from "vue";
import {
  getCompanySubDomain,
  logoutUser,
} from "@/common/helpers/commonFunctions";

const excludedPages = [
  "Forgot Password",
  "About Us",
  "Privacy Policy",
  "Disclaimer",
  "Terms and Conditions",
  "FAQ",
  "Notifications",
  "Invalid Domain",
  "Reset Password",
];
const breadcrumbData = ref([]);

const sessionCheck = async (to, from, next) => {
  // If session check has already been performed, continue with the navigation
  if (excludedPages.includes(to.meta.title) || globalConfig.sessionChecked) {
    next();
    return;
  }

  try {
    let subDomain = getCompanySubDomain(window.location.host);
    const url = apiConfig.SESSION_API;
    const result = await apiService.apiCall("post", url, {
      csd: subDomain,
    });
    const checkResponseCode = parseInt(result.data?.responseCode);
    if (checkResponseCode !== 1) {
      localStorage.clientLogo = `${apiConfig.HOST_URL}/${result?.data?.data?.company?.companyLogoPath}`;
      localStorage.clientName = result?.data?.data?.company?.companyName;
      localStorage.companyId = result?.data?.data?.company?.companyID;
    }
    globalConfig.sessionChecked = true; // Set the flag to indicate that session check is complete
    switch (checkResponseCode) {
      case 0:
        // If user is already logged in & is still trying to visit the below pages, prevent him & redirect him to dashboard, else let him proceed.
        if (
          ["Login", "Change Token", "Invalid Domain"].includes(to.meta.title) ||
          !to.meta.title
        ) {
          next("/profile");
        } else next();
        break;
      case 9:
        // If user is not logged in & is still trying to visit the below pages, let him proceed.
        if (
          [
            "Login",
            "Forgot Password",
            "Change Password",
            "Invalid Domain",
            "Reset Password",
          ].includes(to.meta.title)
        ) {
          next();
        }
        break;
      case 111:
        router.push("/invalidDomain");
        break;
      case 100:
        router.push("/profile");
        break;
      default:
        next("/login");
        updateTitle({ meta: { title: "Login" } });
        localStorage.clear();
        break;
    }
  } catch (err) {
    next("/login");
    updateTitle({ meta: { title: "Login" } });
    localStorage.clear();
  }
};

const unsetSessionCheckFlag = () => {
  globalConfig.sessionChecked = false;
};

const updateTitle = (to) => {
  document.title = to.meta.title
    ? `${to.meta.title} | Global Benefit Solutions`
    : "Global Benefit Solutions";
};

const checkLocalStorage = (to) => {
  if (excludedPages.includes(to.meta.title) || to.meta.title == "Login") return;
  if (
    !localStorage.iaUserFirstName ||
    !localStorage.iaUserLastName ||
    !localStorage.iaUserType
  ) {
    logoutUser();
  }
};

const runEverytimeBeforeRouting = (to, from, next) => {
  updateTitle(to);
  breadcrumbData.value = to.meta.breadcrumb;
  sessionCheck(to, from, next);
  checkLocalStorage(to);
};

const runEverytimeAfterRouting = () => {
  unsetSessionCheckFlag();
};

export { runEverytimeBeforeRouting, runEverytimeAfterRouting, breadcrumbData };
