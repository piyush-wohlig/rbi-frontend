<template>
  <div class="layout-grid">
    <div
      class="order__left centered no__overflow"
      :style="{ backgroundImage: `url(${loginPageImage})` }"
    ></div>
    <div class="order__right">
      <div>
        <LoginHeader />
        <router-view :key="route.fullPath" />
      </div>
      <LoginFooter />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import LoginHeader from "@/common/components/header/loginHeader.vue";
import LoginFooter from "@/common/components/footer/loginFooter.vue";
const loginPageImage = ref(require("@/assets/images/login-image.jpg"));

const route = useRoute();
</script>

<style lang="scss">
.layout-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  overflow-y: auto;
  margin: 0;
}

:deep(.order__right .login-form-container .p-tabview .p-tabview-nav) {
  margin-left: 0;
}

.order__left {
  order: 1;
  background-size: cover;
  background-position: 50% 30%;
  background-repeat: no-repeat;

  .page-title {
    font-size: 80px;
    font-weight: 700;
  }

  .img-wrap {
    width: 487px;
    height: 341px;

    img {
      height: 100%;
      width: 100%;
    }
  }
}
.order__right {
  order: 2;
  position: relative;
  .login-form-container {
    padding: 0 15px;
    margin-top: 48px;
    .login-form-wrapper {
      max-width: 378px;
      position: relative;
      .p-inputtext {
        padding: 15px 20px;
        display: inline-block;
        background-color: $bg-color-input;
        border-radius: 8px;
        box-sizing: border-box;
        font-size: $font-14;
      }

      .p-inputtext:focus,
      .p-inputtext:focus {
        border: 1px solid $input-active-border;
        background-color: $bg-color-white;
      }

      .p-inputtext:enabled:focus {
        box-shadow: 0 0 0 0.06rem $input-active-border;
        &.p-invalid {
          box-shadow: none;
        }
      }

      .errorMsg {
        font-size: $font-12;
        color: $error-red;
        margin-left: 8px;
      }

      .p-inputtext {
        border-color: $bg-color-input;
        &.p-invalid {
          border-color: $error-red !important;
        }
      }

      .p-input-icon-right > i {
        margin-top: -1rem;
      }

      .required:after {
        content: " *";
        color: $error-red;
      }

      .username {
        margin-bottom: 24px;
      }

      .otp-expire-count-down {
        font-family: $poppins;
        font-size: $font-14;
        color: $font-grey;
        margin-bottom: 8px;
      }

      .forgot-pwd-link {
        text-decoration-line: underline;
        color: $font-dark-blue;
        font-family: $poppins;
        font-size: $font-14;
      }

      .required-field-txt {
        font-family: $poppins-italic-500;
        color: $font-dark-blue;
        font-size: $font-12;
        .red-color {
          color: $red;
        }
      }

      .login-btn,
      .login-btn:focus,
      .login-btn:hover {
        margin-top: 40px;
        justify-content: center;
        padding: 15px 20px;
        gap: 10px;
        height: 57px;
        width: 100%;
        background: $dark-blue;
        border-radius: 8px;
        display: inline-block;
        border: none;
        box-shadow: none;
        z-index: 99 !important;
      }
    }

    .p-tabview {
      .p-tabview-panels {
        padding: 2rem 0 0 0;
        margin-left: 40px;
      }
      .p-tabview-nav {
        margin-left: 40px;
        border: none;
        li {
          .p-tabview-nav-link {
            width: 220px;
            height: 64px;
            border: none;
            font-family: $poppins-600;
            box-shadow: none;
            justify-content: center;
            border-radius: 0;
          }
          &.p-highlight > .p-tabview-nav-link,
          &.p-highlight > .p-tabview-nav-link:hover,
          &.p-highlight > .p-tabview-nav-link:focus {
            background: $bg-color-primary-1;
            color: $font-white;
          }
          .p-tabview-nav-link,
          .p-tabview-nav-link:focus,
          .p-tabview-nav-link:hover {
            background: $bg-color-primary-2;
            color: $font-dark-blue;
          }
        }
        li:first-child {
          margin-right: 4px;
        }
      }
    }

    .video-info-container {
      margin-top: 16px;
      width: 256px;
      margin-left: 40px;
      .video {
        position: relative;
        margin-right: 24px;
        .thumb-img {
          max-width: 100%;
          height: auto;
        }
      }
      .play-icon {
        width: 36px;
        height: 36px;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        margin: 0 auto;
      }
      .video-links {
        font-size: $font-14;
        .video-link-1,
        .video-link-2 {
          padding: 8px;
        }
        .how-to-login-link {
          font-family: $poppins;
          color: $font-dark-blue;
        }

        .view-demo-link {
          font-family: $poppins-600;
          color: $font-dark-blue;
          text-decoration-line: underline;
        }
      }
    }
  }
}
.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
.no__overflow {
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
}

:-ms-input-placeholder,
::-webkit-input-placeholder,
::placeholder {
  color: $input-placeholder-color;
}

.img {
  height: 100%;
  object-fit: cover;
  max-width: auto;
}

@media screen and (max-width: 1130px) {
  .order__left {
    background-position: 33% 30%;
  }
}

@media screen and (max-width: 375px) {
  .order__left {
    order: 2;
    padding: 20px;
    display: none;
  }

  .layout-grid {
    display: block;
  }

  .order__right {
    background: none;
    order: 1;
    position: relative;
    .login-form-container {
      .login-form-wrapper {
        position: relative;
        .p-inputtext {
          width: 100%;
          padding: 15px 20px;
          display: inline-block;
          background-color: $bg-color-input;
          border-radius: 8px;
          box-sizing: border-box;
          font-size: $font-14;
        }

        .login-btn,
        .login-btn:focus,
        .login-btn:hover {
          margin-top: 40px;
          justify-content: center;
          padding: 15px 20px;
          gap: 10px;
          width: 100%;
          height: 57px;
          background: $dark-blue;
          border-radius: 8px;
          display: inline-block;
          border: none;
        }
      }

      .p-tabview {
        .p-tabview-panels {
          margin-left: 0;
        }
        .p-tabview-nav {
          margin-left: 0;
          border: none;
          li {
            .p-tabview-nav-link {
              width: 140px;
              height: 56px;
              border: none;
              font-family: $poppins-600;
              box-shadow: none;
              justify-content: center;
              border-radius: 0;
              font-size: $font-12;
            }
          }
        }
      }
      .video-info-container {
        margin-top: 24px;
        width: 256px;
        margin-left: 20px;
      }
    }
  }
}

@media only screen and (max-width: 912px) {
  .login-form-container {
    max-width: fit-content;
    margin: 0 auto;
  }
}

@media screen and (max-width: 479px) {
  .login-form-container {
    max-width: 100%;
  }

  .order__left {
    order: 2;
    padding: 20px;
    display: none;
  }
  .order__right {
    background: none;
    order: 1;
    position: relative;
    .login-form-container {
      margin-top: 25%;
      .login-form-wrapper {
        position: relative;
        .p-inputtext {
          width: 100%;
          padding: 15px 20px;
          display: inline-block;
          background-color: $bg-color-input;
          border-radius: 8px;
          box-sizing: border-box;
          font-size: $font-14;
        }

        .login-btn,
        .login-btn:focus,
        .login-btn:hover {
          margin-top: 40px;
          justify-content: center;
          padding: 15px 20px;
          gap: 10px;
          width: 100%;
          height: 57px;
          background: $dark-blue;
          border-radius: 8px;
          display: inline-block;
          border: none;
        }
      }

      .p-tabview {
        .p-tabview-panels {
          margin-left: 0;
        }
        .p-tabview-nav {
          margin-left: 0;
          border: none;

          li {
            width: 50%;
            text-align: center;
            .p-tabview-nav-link {
              display: flex;
              align-content: center;
              width: 100%;
              height: 64px;
              border: none;
              font-family: $poppins-600;
              box-shadow: none;
              justify-content: center;
              border-radius: 0;
              font-size: 14px;
              padding: 0;
            }

            a {
              font-size: 12px !important;
            }
          }
        }
      }
      .video-info-container {
        margin-top: 24px;
        width: 256px;
        margin-left: 20px;
      }
    }
  }
}
@media only screen and (min-width: 382px) and (max-width: 912px) {
  .layout-grid {
    display: block;
  }
  .order__left {
    order: 2;
    padding: 20px;
    display: none;
  }
  .order__right {
    order: 1;
    position: relative;
  }
  .centered {
    align-items: flex-start;
  }
  .no__overflow {
    align-items: flex-start;
  }
}

@media screen and (max-width: 599px) {
  .order__right {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .login-form-container {
      padding: 0;
    }

    .p-tabview-panels {
      padding: 48px 15px 0 15px !important;
    }
  }

  .order__right .login-form-container .login-form-wrapper .username {
    margin-bottom: 36px;
  }
  .order__right .login-form-container .login-form-wrapper .p-inputtext {
    width: 100%;
  }
}

@media only screen and (max-height: 768px) and (min-width: 768px) {
  .order__right {
    display: flex;
    flex-direction: column;

    .login-form-container {
      margin-top: 0;
      max-width: 530px;

      .video-info-container {
        margin-left: 15px !important;
        .video {
          margin-right: 0 !important;
          height: 50px;
          width: 80px;
          margin-right: 20px !important;
          flex-grow: 0 !important;
          flex-basis: auto !important;
          .thumb-img {
            width: 100%;
            height: auto;
          }
        }
        .video-links {
          .video-link-1,
          .video-link-2 {
            padding: 0;
          }
          .how-to-login-link,
          .view-demo-link {
            font-size: 10px;
            padding: 0;
          }
        }
        .play-icon {
          left: 50%;
          height: 27px;
          width: 20px;
          right: auto;
          transform: translate(-50%, -50%) !important;

          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
    .p-tabview {
      .p-tabview-nav {
        font-size: 14px;
        margin-left: 15px !important;

        li {
          .p-tabview-nav-link {
            height: auto !important;
            padding-top: 14px !important;
            padding-bottom: 15px !important;
          }
        }
      }

      .p-tabview-panels {
        padding-top: 32px !important;
        margin-left: 15px !important;
      }
    }

    .login-form-wrapper {
      .p-inputtext {
        font-size: 12px !important;
        padding: 10px 13px !important;
      }

      .login-btn {
        margin-top: 22px !important;
        height: 40px !important;
        padding: 0 !important;
      }
    }
  }
}

@media only screen and (max-height: 835px) and (min-width: 768px) {
  .order__right {
    .login-form-container {
      margin-top: 0;
    }
  }
}
</style>
