const input = document.querySelector(`#validation-input`);

input.addEventListener(`blur`, onBlur)

function onBlur(text) {
    input.classList.add(`invalid`)
    
    if (Number(input.dataset.length) === text.currentTarget.value.length) {
        input.classList.replace(`invalid`, `valid`)
    }
};


