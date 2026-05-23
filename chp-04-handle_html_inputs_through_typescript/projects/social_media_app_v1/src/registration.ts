import Users from "./users.ts";

const registrationForm = document.getElementById(
  "registration-form",
) as HTMLFormElement;
const usernameInput = document.getElementById("username") as HTMLInputElement;
const fullNameInput = document.getElementById("fullName") as HTMLInputElement;
const sexInput = document.getElementsByName("sex")[0] as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const confPasswordInput = document.getElementById(
  "confirmPassword",
) as HTMLInputElement;

registrationForm.addEventListener("submit", (ev: Event) => {
  ev.preventDefault();

  const username: string = usernameInput.value || "";
  const fullName: string = fullNameInput.value || "";
  const sex: string = sexInput.value || "";
  const phone: string = phoneInput.value || "";
  const email: string = emailInput.value || "";
  const password: string = passwordInput.value || "";
  const confPassword: string = confPasswordInput.value || "";

  if (
    username.length === 0 ||
    fullName.length === 0 ||
    sex.length === 0 ||
    phone.length === 0 ||
    email.length === 0 ||
    password.length === 0 ||
    confPassword.length === 0
  ) {
    console.error("***all fields are required!");
    return false;
  }
  if (password !== confPassword) {
    console.error("***password and confirm password must be same!");
  }

  const newUser = new Users(username, fullName, sex, phone, email, password);
  const result = newUser.saveUser();
  if (result) {
    console.log("***user registration was successful!");
  }
});
