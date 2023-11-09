export default {
    beforeMount(el) {
      el.addEventListener("input", function onInput(event) {
        const currentValue = event.target.value;
        const sanitizedValue = currentValue.replace(/[^0-9]/g, "");
  
        if (currentValue !== sanitizedValue) {
          event.target.value = sanitizedValue;
          const inputEvent = new Event("input", { bubbles: true });
          event.target.dispatchEvent(inputEvent);
        }
      });
    },
  };
  