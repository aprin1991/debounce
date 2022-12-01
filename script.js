const button = document.querySelector(".button");

const initialApp = () => {
  button.addEventListener("click", debounce(clickButton, 2000));
};
document.addEventListener("DOMContentLoaded", initialApp);
const clickButton = () => {
  console.log("clicked");
};

const debounce = (fn, delay) => {
  let id;
  console.log("id at implemented", id);
  return (...args) => {
    if (id) clearTimeout(id);

    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
