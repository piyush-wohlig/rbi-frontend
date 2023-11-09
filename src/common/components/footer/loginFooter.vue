<template>
  <div class="footer-wrapper">
    <div class="right-footer">
      <div class="footer-links">
        <a
          :href="footer.aboutUsLink"
          class="footer-link font-black"
          target="_blank"
          >{{ footerConfig.ABOUT_US }}</a
        >
        <a
          :href="footer.privacyLink"
          class="footer-link font-black"
          target="_blank"
          >{{ footerConfig.PRIVACY_POLICY }}</a
        >
        <a
          :href="footer.disclaimerLink"
          class="footer-link font-black"
          target="_blank"
          >{{ footerConfig.DISCLAIMER }}</a
        >
        <a
          :href="footer.tncLink"
          class="footer-link font-black"
          target="_blank"
          >{{ footerConfig.TERMS_AND_CONDITIONS }}</a
        >
      </div>
      <div class="mb-2 text-right footer-links-bottom">
        <img
          :src="require('@/assets/images/certificate.png')"
          alt="Certificate"
        />
      </div>
      <div class="footer-1">
        <div class="footer-txt">
          <p>{{ footer.companyName }} {{ footer.companyAddress1 }}</p>
          <p>
            {{ footer.companyAddress2 }}{{ footer.companyCity }}
            {{ footer.companyPin }}
          </p>
          <p>
            e-mail:
            <a
              class="footer-a-link my-0"
              href="mailto:{{footer.globalEmail2}}"
              >{{ footer.globalEmail2 }}</a
            >
          </p>
          <p>{{ footer.insurance_disclaimer_text }}</p>
        </div>
      </div>
      <div class="footer-2">
        <div class="footer-txt">
          <p>
            {{ footer.regulated_by_text }}
          </p>
          <p>
            &#169; {{ footer.copywrite }} | {{ footer.cin_label }}: CIN:
            {{ footer.cin }}
          </p>
          <p>
            {{ footer.license_no_label }}: {{ footer.licenseNumber }} |
            {{ footer.license_val_label }}: {{ footer.licenseValidityFrom }} to
            {{ footer.licenseValidityTo }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import footerConfig from "../../config/footerConfig.js";
import config from "../../config/GlobalConstants.js";
const footer = { ...config.companyDetails, ...config.variables };
</script>

<style lang="scss" scoped>
.footer-wrapper {
  margin-right: 56px;
  .app-store-info {
    .donwload-info {
      font-size: $font-12;
      font-family: $poppins-600;
    }
  }
  .footer-links {
    text-align: right;
    height: 16px;
    line-height: 16px;
    margin-bottom: 24px;
    .footer-link {
      text-decoration: none;
      font-size: $font-12;
      font-family: $poppins-500;
    }
    a:after {
      content: "|";
      margin: 0 10px;
    }
    a:last-child:after {
      content: "";
      margin: 0 8px;
    }
  }

  .footer-1 {
    margin-bottom: 24px;
  }
  .footer-1,
  .footer-2 {
    text-align: right;
    .footer-txt p {
      font-family: $poppins-500;
      font-size: $font-8;
      color: $font-black;
      line-height: 150%;
      margin: 0;
    }
  }
}
@media screen and (max-width: 375px) {
  .footer-wrapper {
    margin: 16px 0 0 0;
  }
}
@media screen and (max-width: 599px) {
  .footer-wrapper {
    margin: 32px 24px 15px 0;
    padding: 0 15px;
  }
}

@media screen and (max-width: 1160px) {
  .footer-wrapper {
    margin: 20px 0 0 0;
    padding: 0 15px;
  }
}

@media screen and (min-width: 1367px) and (max-width: 2560px) {
  .footer-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 8px 24px;
    .footer-links {
      text-align: right;
      height: 16px;
      line-height: 16px;
      margin-top: 16px !important;
      .footer-link {
        text-decoration: none;
        font-size: $font-12;
        font-family: $poppins-500;
      }
      a:after {
        content: "|";
        margin: 0 10px;
      }
      a:last-child:after {
        content: "";
        margin: 0 8px;
      }
    }
  }
}

@media only screen and (max-width: 599px) {
  .app-store-info,
  .footer-links {
    display: none !important;
  }
}

@media only screen and (max-height: 768px) and (min-width: 768px) {
  .donwload-info {
    font-size: 10px !important;
    margin-bottom: 10px;
  }
  .footer-wrapper {
    margin-top: auto !important;
    padding-bottom: 10px;
    position: static !important;
    display: flex;
    margin-right: 0 !important;
    justify-content: space-between;
    margin-top: -10px;

    .left-footer {
      display: flex;
      align-items: flex-end;
      padding-left: 20px;
      max-width: 300px;
      .app-store-info {
        text-align: left !important;
        font-size: 12px;
      }
    }
    .right-footer {
      max-width: 350px;
      padding-right: 20px;
    }

    .footer-1 {
      margin-bottom: 0;
    }
    .footer-links-bottom {
      margin-bottom: 0 !important;
    }
    .footer-links {
      margin-bottom: 0;
      .footer-link {
        font-size: 10px;
      }

      a::after {
        margin: 0 5px;
      }
    }
  }

  .store-image {
    display: flex;
    justify-content: flex-start;

    a {
      width: 80px;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

@media only screen and (max-height: 768px) and (max-width: 1040px) {
  .order__left {
    display: none;
  }
}
</style>
