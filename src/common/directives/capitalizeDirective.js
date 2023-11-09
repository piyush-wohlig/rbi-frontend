import { capitalize } from "@/common/helpers/commonFunctions";

export default {
  mounted(el) {
    el.textContent = capitalize(el.textContent);
  },
  updated(el) {
    el.textContent = capitalize(el.textContent);
  },
};
