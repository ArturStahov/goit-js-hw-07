const inputQualityElemRef = document.querySelector("#boxe-controls input[data-action='quality'")
const buttonControlRef = document.querySelector("#boxe-controls");
const listBoxesRef = document.querySelector("#boxes");

let qualityElemToCreate = 0;
const errorDeleteMessage = "в коллекции нету елементов для удаления";
const errorCreateMessage = "Введите необходимое количество!";



const createBoxes = (quality) => {
  const elemArr = [];
  const elemHeight = 30;
  const elemWidth = 30;
  const scaleStep=10;
  let scaleY = 0;
  let scaleX = 0;
  if (quality > 0) {
    for (let i = 0; i < quality; i += 1) {
      const newElem = document.createElement("Div");
      const randomColor = [0, 0, 0].map((elem) => {
        elem = getRandomIntInclusive(0, 255);
        return elem;
      });
      newElem.style.height = `${elemHeight + scaleY}px`;
      newElem.style.width = `${elemWidth + scaleX}px`;
      scaleY += scaleStep;
      scaleX += scaleStep;
      // можно было также брать последний елемент с массива elemArr и брать его значения height,width и прибавлять к им scalestep
      newElem.style.backgroundColor = `rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`;
      elemArr.push(newElem);
    }
  } else {
    console.log(errorCreateMessage);
  }
  scaleY = 0;
  scaleX = 0;
  return elemArr;
}
//функция рандомной генерации числа в диапазоне min max взял на MDN
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const handleControlBoxes = (event) => {
  if (event.target.dataset.action === "create") {
    addBoxes();
  }
  if (event.target.dataset.action === "dell") {
    delBoxes();
  }
  if (event.target.dataset.action === "clearAll") {
    clearList();
  }
}
const handleInputQualityElem = (event) => {
  qualityElemToCreate = 0;
  qualityElemToCreate = Number(event.target.value);
}

const addBoxes = () => {
    listBoxesRef.append(...createBoxes(qualityElemToCreate));
}
const delBoxes = () => {
  listBoxesRef.children.length > 0
    ? listBoxesRef.lastElementChild.remove()
    : console.log(errorDeleteMessage);
}
const clearList = () => {
  listBoxesRef.children.length > 0
    ? (listBoxesRef.innerHTML = "")
    : console.log(errorDeleteMessage);
}

buttonControlRef.addEventListener("click", handleControlBoxes);
inputQualityElemRef.addEventListener("change", handleInputQualityElem);

