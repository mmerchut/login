const inputLogin = document.querySelector(".login");
const inputPassword = document.querySelector(".password");
const btnSignIn = document.querySelector(".signin");
const btnSignUp = document.querySelector(".signup");



let login = 'X';
let password = 'X';

const createAccount = function() {
    login = inputLogin.value;
    password = inputPassword.value;
    inputLogin.value = '';
    inputPassword.value = '';
    btnSignUp.style.display = "none"
    alert('You created account')
    
}

const checkPasswordAndLogin = function() {
    if(inputLogin.value == login && inputPassword.value == password) {
        console.log(inputLogin.value)
        console.log(inputPassword.value)
        alert('Logged In');
    return;
    }
    else {
        alert('You must create account');
    }
    
}

btnSignUp.addEventListener('click', createAccount)
btnSignIn.addEventListener('click', checkPasswordAndLogin)