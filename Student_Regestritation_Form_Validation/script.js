function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let city = document.getElementById("city").value;

    let gender = document.getElementsByName("gender");

    let genderSelected = false;

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderSelected = true;
            break;
        }
    }

    if (name == "" || email == "" || mobile == "" || password == "" || confirmPassword == "") {
        alert("Please fill all the fields.");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Invalid Email Address");
        return false;
    }

    let mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {
        alert("Mobile Number should contain exactly 10 digits");
        return false;
    }

    if (password.length < 8) {
        alert("Password should be at least 8 characters");
        return false;
    }

    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    if (!genderSelected) {
        alert("Please select Gender");
        return false;
    }

    if (city == "") {
        alert("Please select a City");
        return false;
    }

    alert("Registration Successful!");

    return true;
}