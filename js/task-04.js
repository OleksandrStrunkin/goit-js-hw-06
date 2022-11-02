const counter = document.querySelector(`#value`);
const btnDec = document.querySelector(`[data-action="decrement"]`);
const btnInc = document.querySelector(`[data-action="increment"]`);
let counterValue = Number(counter.textContent)


btnDec.addEventListener(`click`, onDec)
btnInc.addEventListener(`click`, onInc)

function onDec() {
    counterValue -= 1;
    counter.textContent = counterValue;
    
}
function onInc() {
    counterValue += 1;
    counter.textContent = counterValue;
    
}