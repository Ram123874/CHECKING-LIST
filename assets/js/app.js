const loginForm = document.getElementById("loginForm");

const usernameControl = document.getElementById("username");
const passwordControl = document.getElementById("password");

loginForm.addEventListener("submit", function (event) {


event.preventDefault();

const username = usernameControl.value.trim();
const password = passwordControl.value;

if (username === "JAY SHREE RAM" && password === "HANUMAN") {

    Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Opening TD Dashboard...",
        timer: 1500,
        showConfirmButton: false
    }).then(function () {

        window.location.href = "./dashboard.html";

    });

} else {

    Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Try Again!",
        timer: 1500,
        confirmButtonText: "Try Again"
    });

}

});



