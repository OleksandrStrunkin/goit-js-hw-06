
const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onSubmit);

function onSubmit (event) {
    event.preventDefault();

// const {
//     elements: { email, password }
//   } = event.currentTarget;
  let formdata = {};
    const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (mail !== "" && password !== "") {
    formdata = { mail, password };
    } else alert(`Всі поля повинні бути заповнені`);
      
      console.log(formdata);
    event.currentTarget.reset();
    
    
}