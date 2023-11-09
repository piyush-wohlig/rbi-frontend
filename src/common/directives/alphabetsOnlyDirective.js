export default {
    beforeMount(el) {
      el.addEventListener("input", function onInput(event) {
        const currentValue = event.target.value;
        const sanitizedValue = currentValue.replace(/[^a-zA-Z\s]/g, "");
  
        if (currentValue !== sanitizedValue) {
          event.target.value = sanitizedValue;
          const inputEvent = new Event("input", { bubbles: true });
          event.target.dispatchEvent(inputEvent);
        }
      });
    },
  };
  