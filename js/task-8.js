const inputQualityRef = document.querySelector("#controls input");
const collectionsElementsRef = document.querySelector("#collectionsElements");
const buttonAddElemRef = document.querySelector("#controls button[data-action='render']");
const buttonDelElemRef = document.querySelector("#controls button[data-action='destroy']");
const buttonCleanRef = document.querySelector("#controls button[data-action='clear']");

const errorMessage = "Введите количество!";

let qualityElemInt;

const createElement = (quality) => {
  const elemArr = [];
  if (quality > 0){
    for (let i = 0; i < quality; i += 1) {
      const newElem = document.createElement("li");
      newElem.textContent = "New Element";
      elemArr.push(newElem);
    }
  } else {
    console.log(errorMessage);
  }
  return elemArr;
};

const handleInputQuality = (event) => {
     qualityElemInt=0;
     qualityElemInt = Number(event.target.value);
};

const handleAddElem = () => {
  collectionsElementsRef.append(...createElement(qualityElemInt));
};

const handleDelElem = () => {
  collectionsElementsRef.children.length > 0
    ? collectionsElementsRef.firstElementChild.remove()
    : console.log("в коллекции нету елементов для удаления");
};

const handleClearList = () => {
    collectionsElementsRef.children.length > 0
    ? collectionsElementsRef.innerHTML = ""
    : console.log("в коллекции нету елементов для удаления");
 
};

inputQualityRef.addEventListener("change", handleInputQuality);
buttonAddElemRef.addEventListener("click", handleAddElem);
buttonDelElemRef.addEventListener("click", handleDelElem);
buttonCleanRef.addEventListener("click", handleClearList);
