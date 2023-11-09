<template>
  <div class="login-form-container">
    <div class="login-form-wrapper">
      <LoginWithOtpComponent :authConst="authConst" @enableLoader="isLoading" />
    </div>
    <!-- <div class="flex justify-content-between video-info-container">
      <div class="flex-1 video">
        <img
          class="thumb-img"
          :src="require('@/assets/images/login-pg-video-img.png')"
        />
        <div class="play-icon">
          <img :src="require('@/assets/images/play-icon.png')" />
        </div>
      </div>
    </div> -->
  </div>
  <Loader :isLoaderVisible="isLoaderVisible" />
</template>

<script setup>
import { ref } from "vue";
import Loader from "@/common/components/loaderComponent.vue";
import LoginWithOtpComponent from "./loginWithOtpComponent.vue";
import authConst from "../authConfig";
const isLoaderVisible = ref();


const isLoading = (value) => {
  isLoaderVisible.value = value;
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 599px) {
  .video-info-container {
    display: none !important;
  }
}
</style>
