import Users from "./users.ts";

const loginForm = document.getElementById("login-form") as HTMLFormElement;
const usernameInput = document.getElementById("username") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;

loginForm.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const username: string = usernameInput.value || "";
  const password: string = passwordInput.value || "";

  if (username.length === 0 || password.length === 0) {
    console.error("***all fields are required!");
    return false;
  }

  const result: boolean | { username: string; password: string } =
    Users.findUser(username);

  if (typeof result === "object") {
    if (result.password !== password) {
      console.error("***invalid username or password!");
      return false;
    }
    console.log("***login successful, welcome back", result.username);
    return true;
  }
});
