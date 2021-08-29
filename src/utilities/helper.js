export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this, args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export const getDateFormatted = (date, localeType, options) => {
  return new Intl.DateTimeFormat(localeType, options).format(new Date(date))
}
export const addArToBody = (condition) => {
  if (condition) {
    document.body.classList.add("ar");
  } else {
    document.body.classList.remove("ar");
  }
}