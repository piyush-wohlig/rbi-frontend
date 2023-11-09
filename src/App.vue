<template>
  <Toast
    :pt="{
      root: { class: 'toast-msg-container' },
    }"
  />
  <ConfirmDialog></ConfirmDialog>
  <div id="mainContainer">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Toast from "primevue/toast";
const route = useRoute();
const containerStyle = ref({});

const calculateContainerStyle = () => {
  const newWidth = window.innerWidth;

  if (route.path === "/login" || route.path === "/terms-agreement") {
    containerStyle.value = {
      minHeight: "60vh",
    };
  } else {
    if (newWidth > 1200) {
      // for desktop
      containerStyle.value = {
        minHeight: "60vh",
        paddingLeft: "19rem",
        paddingRight: "10rem",
      };
    } else if (newWidth > 760) {
      // for ipad
      containerStyle.value = {
        minHeight: "60vh",
        paddingLeft: "13rem",
        paddingRight: "1rem",
      };
    } else {
      // for mobile
      containerStyle.value = {
        minHeight: "60vh",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      };
    }
  }
};

watchEffect(() => {
  calculateContainerStyle();
});

onMounted(() => {
  window.addEventListener("resize", calculateContainerStyle);
});

onUnmounted(() => {
  window.removeEventListener("resize", calculateContainerStyle);
});
</script>

<style lang="scss">
html {
  min-height: 100%;
}
body {
  margin: 0;
  height: 100vh;
}
#mainContainer {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#container {
  min-height: 60vh;
  padding-left: 19rem;
  padding-right: 10rem;
}
#app {
  font-family: $poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.toast-msg-container {
  z-index: 999999 !important;
}

::-webkit-scrollbar {
  width: 8px;
  height: 4px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 255, 255, 0.3);
}
</style>
