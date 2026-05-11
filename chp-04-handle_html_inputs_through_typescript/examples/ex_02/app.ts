interface FormEventTarget extends EventTarget {
  username: HTMLInputElement;
  firstname: HTMLInputElement;
  lastname: HTMLInputElement;
  aadhaar: HTMLInputElement;
  phone: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  confirmpassword: HTMLInputElement;
}

function handleFormSubmit(event: Event) {
  event.preventDefault();

  const {
    username,
    firstname,
    lastname,
    aadhaar,
    phone,
    email,
    password,
    confirmpassword,
  } = event.target as FormEventTarget;
  console.log(
    username.value,
    firstname.value,
    lastname.value,
    aadhaar.value,
    phone.value,
    email.value,
    password.value,
    confirmpassword.value,
  );
}
