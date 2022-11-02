
const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onSubmit);

function onSubmit (event) {
    event.preventDefault();

const {
    elements: { email, password }
  } = event.currentTarget;

    // const mail = event.currentTarget.elements.email.value;
    // const password = event.currentTarget.elements.password.value;
    if (email.value === "" || password.value === "") {
        alert(`Всі поля повинні бути заповнені`);
        return; 
    }
      console.log(`email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
    
    
}