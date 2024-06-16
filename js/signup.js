let BtnsignUp = document.querySelector('.signup');
let nameInput = document.querySelector('#inputName');
let emailInput = document.querySelector('#inputEmail');
let passwordInput = document.querySelector('#inputPassword');
let para = document.querySelector('.warn');
let array = [];
if (localStorage.getItem('user') != null)
    array = JSON.parse(localStorage.getItem('user'));
function signUp() {
    if (nameInput.value == "" || emailInput.value == '' || passwordInput.value == '') {

        alert('All inputs is required', 'red');
    }
    else {
        let userData = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        }
        if (checkEmail()) {
            alert('email already exist', 'red')
        }
        else {
            array.push(userData);
            alert('sccuss', 'green');
            localStorage.setItem('user', JSON.stringify(array));
            clearform();
            window.location.href="index.html";
        }


    }

}
function clearform() {
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}
function alert(text, color) {
    para.innerHTML = text;
    para.style.color = color;
}
function checkEmail() {
    for (let i = 0; i < array.length; i++) {
        if (array[i].email == emailInput.value)
            return true;
    }
}
document.addEventListener('keydown',function(e){
    if(e.code=='Enter')
        signUp();
   
})
BtnsignUp.addEventListener('click', signUp)
