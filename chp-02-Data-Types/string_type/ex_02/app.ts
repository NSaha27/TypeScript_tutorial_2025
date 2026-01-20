/*
  STRING AND BOOLEAN DATA TYPES
  -----------------------------
  - declaration,
  - type inference,
  - type conversion
*/

// STRING DATA TYPE

// type declaration
const username: string = "NILADRI SAHA";
const emailID: string = "niladri.saha31@example.com";
const password: string = "Niladri@12345";

console.log(`User details:
Username: ${username}
Email ID: ${emailID}`);

// declaration error
let itemCost: number = 1299.0;
// itemCost = "1599.00"; // throw a type error

// type inference
const courseName = "Meta Front-end Developer professional Certificate Course";
const conductedBy = "Coursera";

console.log(`Course details:
Course name: ${courseName}
Conducted by: ${conductedBy}`);

// type conversion
let userID = 101;
let userPhnNo = 8420520344;
let userPsw = 29052003;

const id = userID.toString();
const phone = String(userPhnNo);
const psw = "" + userPsw;

console.log(typeof id, id);
console.log(typeof phone, phone);
console.log(typeof psw, psw);

// BOOLEAN DATA TYPE

let isLoggedIn: boolean = false;
let isRegistered: boolean = false;

const stuID: string = "ns0792llhwb04";
const stuName: string = "Niladri Saha";
const stuDOB: string = "08/15/1992";
const stuAadhaar: number | string | null = "123456789012";
const stuPhn: number | string | null = 8420520344;
const stuEmail: string = "niladri.saha31@example.com";
const stuPsw: string = "Niladri@12345";

if (
  stuID.length > 0 &&
  stuName.length > 0 &&
  stuDOB.length > 0 &&
  stuAadhaar !== null &&
  String(stuAadhaar) &&
  stuPhn !== null &&
  String(stuPhn) &&
  stuEmail.length > 0 &&
  stuPsw.length > 0
) {
  isRegistered = true;
  console.log("*** registration successful, please login now!");
}

const loginEmail: string | null = "niladri.saha31@example.com";
const loginPsw: string | null = "Niladri@1234";

try {
  if (!isRegistered) {
    throw new Error("*** the student is not registered yet!");
  } else {
    if (typeof loginEmail === "string" && typeof loginPsw === "string") {
      if (loginEmail === stuEmail && loginPsw === stuPsw) {
        isLoggedIn = true;
        console.log("*** login successful!");
      } else {
        throw new Error(
          "*** login failed, please enter correct email ID or password!",
        );
      }
    } else {
      throw new Error("*** invalid login email or password!");
    }
  }
} catch (err: any) {
  if (typeof err === "object") {
    console.error(err.message);
  } else {
    console.error(err);
  }
}
