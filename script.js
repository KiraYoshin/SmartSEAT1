let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let confirmPasswordField = document.getElementById("confirmPasswordField");
let title = document.getElementById("title");
let submitBtn = document.getElementById("submitBtn");

let forgotLink = document.getElementById("forgotLink");
let loginBox = document.getElementById("loginBox");
let forgotBox = document.getElementById("forgotBox");
let forgotSubmitBtn = document.getElementById("forgotSubmitBtn");

let isSignUpMode = true;

// SWITCH TO SIGN IN
signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    confirmPasswordField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    submitBtn.innerText = "Sign In";
    isSignUpMode = false;
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
   
};

// SWITCH TO SIGN UP
signupBtn.onclick = function () {
    nameField.style.maxHeight = "50px";
    confirmPasswordField.style.maxHeight = "50px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    submitBtn.innerText = "Sign Up";
    isSignUpMode = true;
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
};

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // SIGN UP MODE
    if (isSignUpMode) {
        let name = document.getElementById("name").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (!name || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        let existing = localStorage.getItem(email);
        if (existing) {
            alert("An account with this name already exists.");
            return;
        }

        let newUser = { name, email, password };
        localStorage.setItem(email, JSON.stringify(newUser));
        localStorage.setItem("user", JSON.stringify(newUser));
        alert("Sign up successful! Please login now.");
        return;
    }

    // SIGN IN MODE
    let user = localStorage.getItem(email);
    if (!user) {
        alert("User not found! Please sign up first.");
        return;
    }

    let parsed = JSON.parse(user);

    if (parsed.password === password) {
        localStorage.setItem("user", JSON.stringify(parsed));
        window.location.href = "../smartseat-uiii-main/theseatplan.html";
    } else {
        alert("Incorrect password");
    }
});

signinBtn.click();

forgotLink.onclick = function (e) {
    e.preventDefault();
    loginBox.style.display = "none";
    forgotBox.style.display = "block";
};

forgotSubmitBtn.onclick = function (e) {
    e.preventDefault();
    alert("Check Your Email.");
}

