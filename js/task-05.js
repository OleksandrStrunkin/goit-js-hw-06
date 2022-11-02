const input = document.querySelector(`#name-input`);
let output = document.querySelector(`#name-output`);

input.addEventListener(`input`, onName)


function onName(text) {
    if (text.currentTarget.value === "") {
        output.textContent = "Anonymous";
        
    } else output.textContent = text.currentTarget.value;
    
}

