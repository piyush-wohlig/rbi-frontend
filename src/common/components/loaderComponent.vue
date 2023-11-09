<template>
  <div class="loader-wrapper" v-show="visible">
    <div class="lds-dual-ring"></div>
  </div>
</template>
<script setup>
import { defineProps, watch, ref } from "vue";
import globalConfig from "@/common/config/GlobalConstants.js";
import { useToast } from "primevue/usetoast";
const { TOAST } = globalConfig;
const toast = useToast();
const props = defineProps(["isLoaderVisible"]);
const visible = ref(false);
let timeoutId = null;
watch(
  () => props.isLoaderVisible,
  (newPropValue) => {
    visible.value = newPropValue;
    if (newPropValue == true) {
      timeoutId = setTimeout(() => {
        toast.removeAllGroups();
        toast.add({
          severity: TOAST.SEVERITY.INFO,
          detail: "Something Went Wrong! Please Try Again Later",
          life: TOAST.DURATION,
        });
        visible.value = false;
      }, 60000);
    } else {
      clearTimeout(timeoutId);
    }
  }
);
</script>
<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 80px;
  height: 80px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #213468;
  border-color: #213468 transparent #213468 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
