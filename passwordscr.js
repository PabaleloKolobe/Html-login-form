function _id(name){
    return document.getElementById(name);
}

function _class(name){
    return document.getElementsByClassName(name);
}

_class("password-toggle")[0].addEventListener("click", function(){
    _class("password-toggle")[0].classList.toggle("active");
    if(_id("password").getAttribute("type")== "password"){
        _id("password").setAttribute("type","text");
    }else {
        _id("password").setAttribute("type","password");
    }

});

_id("password").addEventListener("focus" ,function(){
    _class("password-policies")[0].classList.add("active");

});

_id("password").addEventListener("blur" ,function(){
    _class("password-policies")[0].classList.remove("active");

});

_id("password").addEventListener("keyup" ,function(){
    let passwords = _id("password").value;
    if (/[A-Z]/.test(passwords)){
        _class("policy-uppercase")[0].classList.add("active");
    }else {
        _class("policy-uppercase")[0].classList.remove("active");
    }

    if (/[0-9]/.test(passwords)){
        _class("policy-number")[0].classList.add("active");
    }else {
        _class("policy-number")[0].classList.remove("active");
    }

    if (/[^A-Za-z0-9]/.test(passwords)){
        _class("policy-special")[0].classList.add("active");
    }else {
        _class("policy-special")[0].classList.remove("active");
    }

    if (passwords.length > 7){
        _class("policy-length")[0].classList.add("active");
    }else {
        _class("policy-length")[0].classList.remove("active");
    }

});


function _class(name){
    return document.getElementsByClassName(name);
}

_class("password-toggles")[0].addEventListener("click", function(){
    _class("password-toggles")[0].classList.toggle("active");
    if(_id("confirmpassword").getAttribute("type")== "confirmpassword"){
        _id("confirmpassword").setAttribute("type","text");
    }else {
        _id("confirmpassword").setAttribute("type","confirmpassword");
    }

});


_id("confirmpassword").addEventListener("keyup" ,function(){
    let passwords = _id("confirmpassword").value;
    if (/[A-Z]/.test(passwords)){
        _class("password-dontmatch")[0].classList.add("active");
    }else {
        _class("password-dontmatch")[0].classList.remove("active");
    }
});

/*const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const captchaInput = document.getElementById('captcha-form');

form .addEventListener('submit', e =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const emailValue = username.value.trim();
    const passwordValue = password.value.trim();
    const captchaInputValue = password.value.trim();

    

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email,'Not a valid email');
    }else{
        setSuccessFor(email);
    }


    if (passwordValue === ''){
        setErrorFor(password, 'Password cannot be empty');
    }else {
        setSuccessFor(password);
    }

    function setErrorFor(input, message){
        const form-input = input.parentElement;
        const small = form-input.querySelector('small');
        form-input.className = 'form-control-error';
        small.innterText = message;
    }

    function setSuccessFor(input){
        const form-input = input.parentElement;
        form-input.className = 'form-control success'
    }

    

   
}*/