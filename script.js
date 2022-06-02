function check_password() {
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirm_password").value;
    if (password != confirmpassword) {
        alert("Passwords do not match.");
    }
}