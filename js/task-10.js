function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCre = document.querySelector(`button[data-create]`);
const btnDes = document.querySelector(`button[data-destroy]`);
const box = document.querySelector(`#boxes`);

const btnEls = document.querySelector(`input`);

console.log(btnEls.value)
btnCre.addEventListener(`click`, createBoxes)
btnDes.addEventListener(`click`, destroyBoxes)
// box.insertAdjacentHTML("beforeend", "<div>Popular technologies</div");

function createBoxes(num) {
  num = btnEls.value
  let width = 30
  let height = 30
  for (let i = 0; i < num; i++) {
    width += 10;
    height += 10;
    box.insertAdjacentHTML("beforeend", `<div style="background-color: ${getRandomHexColor()}; width: ${width}px; height: ${height}px;"></div>`);
  }
}

function destroyBoxes() {
  
  box.innerHTML = "";
  btnEls.value = "";
}