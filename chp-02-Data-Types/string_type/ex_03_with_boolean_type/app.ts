const usernameRegexp: RegExp = /^[A-Z0-9]{3,30}$/;
const passwordRegExp: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

function validateUsername(username: string): boolean {
  return usernameRegexp.test(username);
}
function validatePassword(password: string): boolean {
  return passwordRegExp.test(password);
}

const users: object[] = [
  {
    username: "TISTADUTTA",
    password: "Tista@12345",
  },
  {
    username: "AVIKBERA",
    password: "Avik@12345",
  },
  {
    username: "ARNABROY",
    password: "Arnab@12345",
  },
  {
    username: "NILADRISAHA",
    password: "Niladri@12345",
  },
];

function login(username: string, password: string): boolean {
  const isValidUsername: boolean = validateUsername(username);
  const isValidPassword: boolean = validatePassword(password);
  if (!isValidUsername) {
    console.log("***invalid username!");
    return false;
  }
  if (!isValidPassword) {
    console.log("***invalid password!");
    return false;
  }
  const user: object | undefined = users.find(
    (user: object) => user.username === username && user.password === password,
  );
  if (!user) {
    console.error("***invalid login credentials!");
    return false;
  }
  console.log("***login successful!");
  return true;
}

const username: string = "NILADRISAHA";
const password: string = "Niladri@12345";

login(username, password);
