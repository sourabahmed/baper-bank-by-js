document.getElementById('login-button').addEventListener('click', function(){
    const inputEmail = document.getElementById('input-email');
    const inputEmailValue = inputEmail.value;
    const inputPassword = document.getElementById('input-password');
    const inputPasswordValue = inputPassword.value;
    if(inputEmailValue == 'baper@bank.com' && inputPasswordValue == 'baperbank'){
        window.location.href='bank.html'
    }
    else{
        alert('password or email does not match');
    }
})