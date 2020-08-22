const inputRef = document.querySelector("#validation-input");

const handleValidation = (event) => {
  if (Number(inputRef.dataset.length)===event.target.value.length) {
    inputRef.classList.remove("invalid");//если ввели >6 символов, а после удалили 1 до 6
    inputRef.classList.add("valid");
  } else
  if (event.target.value === "") {
    inputRef.removeAttribute("class");
  } else {
  inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("change", handleValidation);
