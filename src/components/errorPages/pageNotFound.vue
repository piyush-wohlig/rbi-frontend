<template>
  <div>
    <CommonHeader :showNotification="true" />
  </div>
  <div class="content-wrapper">
    <div class="img-wrapper">
      <img :src="pageNotFoundImage" alt="404" />
    </div>
    <div class="content text-center">
      <div class="page-title">Page Not Found</div>
      <p class="page-desc">Sorry, we can’t find the page you’re looking for.</p>
      <a class="cta-btn" href="/">Back to home</a>
    </div>
  </div>
  <div>
    <commonFooter />
  </div>
</template>
<script setup>
import { ref } from "vue";
import CommonHeader from "@/common/components/header/commonHeader.vue";
import commonFooter from "@/common/components/footer/commonFooter.vue";
const pageNotFoundImage = ref(require("@/assets/images/404.png"));
</script>
<style lang="scss" scoped>
.content-wrapper {
  max-width: 1600px;
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .img-wrapper {
    max-width: 500px;
    img {
      width: 100%;
      height: auto;
    }
  }

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;

    .page-title {
      font-size: 40px;
      font-weight: 700;
      color: $dark-blue;
      margin-bottom: 10px;
    }

    .page-desc {
      font-size: 24px;
      font-size: 600;
      color: $dark-blue;
      margin-bottom: 28px;
      margin-top: 0;
    }

    .cta-btn {
      display: block;
      background-color: $dark-blue;
      color: white;
      font-size: 16px;
      font-weight: 600;
      border-radius: 5px;
      padding: 12px 30px;
      text-decoration: none;
    }
  }
}

@media only screen and (max-width: 599px) {
  .content-wrapper {
    .content {
      .page-title {
        font-size: 22px;
      }
      .page-desc {
        font-size: 16px;
      }
      .cta-btn {
        padding: 10px 20px;
        font-size: 14px;
      }
    }
  }
}
</style>
