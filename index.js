const hidden = document.getElementsByClassName("hidden")[0];
const button = document.getElementsByClassName("explore")[0];

button.onclick = function () {
  hidden.classList.remove("hidden");
};
console.log(hidden, button);
