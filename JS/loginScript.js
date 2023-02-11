// VARIABLES

var email = document.getElementById('email');
var loggedIn = false

// LOGINSCREEN (SIGNUP/LOGIN)

function LoginClickCheck() {
    if (email.value == "") {
        alert("Please enter email.");
    } else {
        window.location.replace('code.html')
    }
}