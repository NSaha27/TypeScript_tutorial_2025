function handleFormSubmit(event) {
    event.preventDefault();
    const { username, firstname, lastname, aadhaar, phone, email, password, confirmpassword, } = event.target;
    console.log(username.value, firstname.value, lastname.value, aadhaar.value, phone.value, email.value, password.value, confirmpassword.value);
}
