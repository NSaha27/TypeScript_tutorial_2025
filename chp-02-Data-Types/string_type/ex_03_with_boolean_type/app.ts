const usernameRegexp: RegExp = /^[A-Z0-9]{3,30}$/;
const passwordRegExp: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

function validateUsername(username: string): boolean {
  return usernameRegexp.test(username);
}
function validatePassword(password: string): boolean {
  return passwordRegExp.test(password);
}

interface User {
  username: string;
  password: string;
}

const users: User[] = [
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
  const user: User | undefined = users.find(
    (user: User) => user.username === username && user.password === password,
  );
  if (!user) {
    console.error("***invalid login credentials!");
    return false;
  }
  console.log(`***login successful, welcome back ${username}!`);
  return true;
}

let username: string | undefined = undefined;
let password: string | undefined = undefined;

// trying to log in with invalid data
username = "SUSHILPAUL";
password = "Sushil@12345";
login(username, password);

// trying to log in with valid data
username = "NILADRISAHA";
password = "Niladri@12345";
login(username, password);
