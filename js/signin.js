let submitBtn = document.getElementById("submitBtn");

submitBtn.disabled = true;
function valid() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError")
    let passwordError = document.getElementById("passwordError")
    if (email.indexOf("@") == -1 || email.length <= 0) {
        emailError.innerHTML = "please Enter a Valid Email"
        submitBtn.disabled = true;
    }else if (email.indexOf("@") > -1 && email.length > 0) {
        emailError.innerHTML = ""
    }
    if(password.length < 8 || password.length > 25) {
        passwordError.innerHTML = "Please enter a strong password greater than 8 characters.";
        submitBtn.disabled = true;
    } else if(password.length > 8 || password.length < 25) {
        passwordError.innerHTML = "";
    }

    if (email.indexOf("@") > -1 && email.length > 0 && password.length >= 8 && password.length < 25){
        submitBtn.disabled = false;

    }
}
