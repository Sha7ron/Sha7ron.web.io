const name = document.getElementById('name');
const clgid = document.getElementById('clgid');
const pswd = document.getElementById('pswd');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) =>{
    const InputControl = element.parentElement;
    const errorDisplay = InputControl.querySelector('.error');

    errorDisplay.innerText = message;
    InputControl.classList.add('error');
    InputControl.classList.remove('success');
}

const setSuccess = element =>{
    const InputControl = element.parentElement;
    const errorDisplay = InputControl.querySelector('.error');

    errorDisplay.innerText = message;
    InputControl.classList.add('error');
    InputControl.classList.remove('success');
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const clgidValue = clgid.value.trim();
    const pswdValue = pswd.value.trim();

    if (nameValue === ''){
        setError(username, 'Username is required');
    }else{

    }
};