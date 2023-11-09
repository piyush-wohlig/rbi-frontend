import moment from "moment";

export const formatDateDirective = (el, binding) => {
  // 'arg' accepts valid moment.js formats
  let { value, arg } = binding;
  if (!moment(value).isValid()) {
    el.textContent = value;
    return;
  }

  const date = moment(value);

  if (arg) {
    arg = arg.replace(/_/g, "/"); // since forward slace is invalid directive arg using underscore as a replacement for eg. v-date-format:DD_MM_YYYY
    el.textContent = date.format(arg);
  } else {
    el.textContent = value; // Return the original value if the format is not recognized
  }
};

export default formatDateDirective;
