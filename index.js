const button = document.querySelector('.submit-btn');
const nameText = document.querySelector('#name-text');
const emailText = document.querySelector('#email-text');
const passwordText = document.querySelector('#password-text');


button.addEventListener('click', () => {
    let hasError = false;
    nameText.classList.remove('error');
    emailText.classList.remove('error');
    passwordText.classList.remove('error');

    let nameTextValue = nameText.value.trim()
    if (nameTextValue.length < 3) {
        setTimeout(() => {
            nameText.classList.add('error');
        },1000)
        hasError = true;
    }

    let emailTextValue = emailText.value.trim()
    if (!isValidEmail(emailTextValue)) {
        setTimeout(() => {
            emailText.classList.add('error');
        },1000)
        hasError = true;
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    }

    let passwordTextValue = passwordText.value.trim()
    if (passwordTextValue.length < 6) {
        setTimeout(()=>{
            passwordText.classList.add('error');
        },1000)
        hasError = true;
    }


    setTimeout(() => {
        if (hasError) {
            alert("You filled smth wrong")
        } else {
            alert("Successfully")
        }
    }, 1000)
})

