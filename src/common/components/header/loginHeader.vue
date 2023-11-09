<template>
  <header class="login-header flex justify-content-between">
    <div
      class="client-name-wrapper flex align-items-center bg-img"
      :style="{ backgroundImage: `url(${logoBg})` }"
    ></div>
    <div :class="[`client-logo`, { 'only-client-name': !clientLogo }]">
      <div
        class="client-name-wrapper flex align-items-center"
        v-if="!clientLogo"
      >
        <span class="client-name">{{ clientName }}</span>
      </div>
    </div>
    <div class="company-logo-wrapper flex align-items-center">
      <div class="bell-icon" v-if="props.showNotification">
        <div>
          <i
            v-badge.danger="'1'"
            class="pi pi-bell bell-icon mr-5 custom-margint-top cursor-pointer"
          ></i>
        </div>
      </div>
      <div class="company-logo">
        <img :src="`${companyLogo}`" alt="Company Logo" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, defineProps, onBeforeMount } from "vue";
import apiConfig from "@/common/config/apiConfig";
import apiService from "@/common/services/apiServices";
import { getCompanySubDomain } from "@/common/helpers/commonFunctions";
const clientLogo = ref("");
const clientName = ref("");
const companyLogo = ref(require("@/assets/images/Layer_1.png"));
const logoBg = ref(require("@/assets/images/maze.png"));
let subDomain = getCompanySubDomain(window.location.host);
const objectData = {
  csd: subDomain,
};

onBeforeMount(async () => {
  const url = apiConfig.SESSION_API;
  const response = await apiService.apiCall("post", url, objectData);
  if (response?.data?.responseCode !== 1) {
    clientLogo.value = response?.data?.data?.company?.companyLogoPath;
    clientName.value = response?.data?.data?.company?.companyName;
    window.userFirstName = response?.data?.data?.user?.firstName;
    window.userLastName = response?.data?.data?.user?.firstName;
  }
});

const props = defineProps(["showNotification"]);
</script>

<style lang="scss" scoped>
.login-header {
  padding: 34px 40px;
  position: relative;

  .client-logo {
    max-width: 141px;
    height: 76px;

    img {
      width: auto;
      height: 100%;
    }
  }

  .bg-img {
    background-position: right top;
    background-repeat: no-repeat;
    height: 140px;
    width: 138px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
  .client-name-wrapper {
    width: 200px;
    height: 60px;
    line-height: 24px;
    .client-name {
      letter-spacing: 0.04em;
      color: $font-dark-blue;
      font-size: $font-16;
      font-family: $poppins-700;
    }
  }
  .company-logo {
    height: 32px;
    max-width: 182px;
    margin-right: 45px;
    img {
      width: 100%;
      height: auto;
    }
  }
}
@media only screen and (max-width: 599px) {
  .login-header {
    .bg-img {
      display: none;
    }
    padding: 15px;
    background: $bg-color-input !important;

    .client-logo {
      height: 37px;
      width: 69px;
      display: flex;
      align-items: center;
      // display: none;

      &.only-client-name {
        height: auto;
      }

      img {
        width: 100%;
        height: auto;
      }
    }
    .company-logo-wrapper {
      justify-content: flex-end;
      margin: 0;
      width: 100%;
    }
  }

  .only-client-name {
    &.client-logo {
      height: auto;
      max-width: 160px;
      width: 100%;
    }
  }
}

.client-name {
  font-size: 16px;
  letter-spacing: 0.64px;
  color: $dark-blue;
  border-left: 2px solid $dark-blue;
  display: block;
  padding-left: 10px;
}

@media screen and (max-width: 375px) {
  .login-header {
    .company-logo {
      img {
        width: 100%;
        height: auto;
      }
    }
    .client-name-wrapper {
      width: 100%;
      height: 60px;
      line-height: 24px;
      margin: 0px 8px 0 0;
    }
  }
}

@media screen and (max-width: 479px) {
  .login-header {
    align-items: center;
    .company-logo {
      margin-right: 0;
      img {
        width: 100%;
        height: auto;
      }
    }
    .client-name-wrapper {
      width: 100%;
      height: auto;
      line-height: 24px;
      margin: 0px 8px 0 0;
    }
  }
  .login-form-container {
    margin-top: 48px;
  }
}

@media screen and (min-width: 1367px) and (max-width: 2560px) {
  .login-header {
    .client-logo {
      img {
        max-width: 100%;
        height: 100%;
      }
    }
    .company-logo {
      img {
        max-width: 100%;
        height: auto;
        float: right;
      }
    }
  }
}

@media only screen and (max-height: 768px) and (min-width: 768px) {
  .login-header {
    padding: 16px 40px;

    .client-logo {
      height: 54px;
    }
    .bg-img {
      height: 140px;
      width: 80px;
      background-size: contain;
    }

    .company-logo {
      margin-right: 0 !important;
    }

    .client-name-wrapper {
      margin-top: 0;
      height: auto;
      line-height: 18px;
    }

    .company-logo-wrapper {
      margin-top: 0 !important;
    }
  }
}

@media only screen and (max-height: 835px) and (min-width: 768px) {
  .login-header {
    padding: 20px 55px;
    padding-left: 30px;
  }
}
</style>
