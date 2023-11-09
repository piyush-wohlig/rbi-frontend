import { customCurrencyFormat } from "@/common/helpers/commonFunctions";

const format = (el, binding) => {
  const amountValue = binding.value;
  const decimal = binding.arg;
  if (isNaN(amountValue)) {
    el.textContent = "";
    return;
  }
  el.textContent = customCurrencyFormat(amountValue, decimal);
};
export default {
  mounted(el, binding) {
    format(el, binding);
  },
  updated(el, binding) {
    format(el, binding);
  },
};
