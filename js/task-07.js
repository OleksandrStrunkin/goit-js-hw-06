const input = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);

input.addEventListener(`click`, fontSize);

function fontSize() {
    text.style.fontSize = `${input.value}px`;
}