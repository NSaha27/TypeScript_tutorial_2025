const members = [];
function handleRegistration(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username");
    const fullNameInput = document.getElementById("full_name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm_password");
    const username = usernameInput.value;
    const fullName = fullNameInput.value;
    const phone = phoneInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if (username.length === 0) {
        console.error("*username is required!");
        // window.location.href = "./registration.html";
        return false;
    }
    if (fullName.length === 0) {
        console.error("*full name is required!");
        // window.location.href = "./registration.html";
        return false;
    }
    if (phone.length === 0) {
        console.error("*phone number is required!");
        // window.location.href = "./registration.html";
        return false;
    }
    if (password.length === 0) {
        console.error("*password is required!");
        // window.location.href = "./registration.html";
        return false;
    }
    if (confirmPassword.length === 0) {
        console.error("*confirm password is required!");
        // window.location.href = "./registration.html";
        return false;
    }
    if (password !== confirmPassword) {
        console.error("*password and confirm password must be same!");
        // window.location.href = "./registration.html";
        return false;
    }
    // if everything is ok
    try {
        members.push({ username, fullName, phone, email, password });
        console.log("*registration successful!");
        window.location.href =
            "D:\\TypeScript_tutorial\\TypeScript_tutorial_2025\\chp-04-handle_html_inputs_through_typescript\\examples\\ex_03\\dist\\login.html";
    }
    catch (err) {
        console.error(err.message);
        // window.location.href = "./registration.html";
        return false;
    }
}
function handleLogin(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const username = usernameInput.value;
    const password = passwordInput.value;
    if (username.length === 0) {
        console.error("*username is required!");
        // window.location.href = "./login.html";
        return false;
    }
    if (password.length === 0) {
        console.error("*password is required!");
        // window.location.href = "./login.html";
        return false;
    }
    // if inputs are ok
    const member = members.find((mem) => mem.username === username && mem.password === password);
    if (!member) {
        console.error("*no such member exists!");
        // window.location.href = "./login.html";
        return false;
    }
    console.log(`*login successful, welcome back!`);
    window.location.href =
        "D:\\TypeScript_tutorial\\TypeScript_tutorial_2025\\chp-04-handle_html_inputs_through_typescript\\examples\\ex_03\\index.html";
}
export {};
