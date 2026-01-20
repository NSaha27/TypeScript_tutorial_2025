/*
  STRING AND BOOLEAN DATA TYPES
  -----------------------------
  - declaration,
  - type inference,
  - type conversion
*/
// STRING DATA TYPE
// type declaration
var username = "NILADRI SAHA";
var emailID = "niladri.saha31@example.com";
var password = "Niladri@12345";
console.log("User details:\nUsername: ".concat(username, "\nEmail ID: ").concat(emailID));
// declaration error
var itemCost = 1299.0;
// itemCost = "1599.00"; // throw a type error
// type inference
var courseName = "Meta Front-end Developer professional Certificate Course";
var conductedBy = "Coursera";
console.log("Course details:\nCourse name: ".concat(courseName, "\nConducted by: ").concat(conductedBy));
// type conversion
var userID = 101;
var userPhnNo = 8420520344;
var userPsw = 29052003;
var id = userID.toString();
var phone = String(userPhnNo);
var psw = "" + userPsw;
console.log(typeof id, id);
console.log(typeof phone, phone);
console.log(typeof psw, psw);
// BOOLEAN DATA TYPE
var isLoggedIn = false;
var isRegistered = false;
var stuID = "ns0792llhwb04";
var stuName = "Niladri Saha";
var stuDOB = "08/15/1992";
var stuAadhaar = "123456789012";
var stuPhn = 8420520344;
var stuEmail = "niladri.saha31@example.com";
var stuPsw = "Niladri@12345";
if (stuID.length > 0 &&
    stuName.length > 0 &&
    stuDOB.length > 0 &&
    stuAadhaar !== null &&
    String(stuAadhaar) &&
    stuPhn !== null &&
    String(stuPhn) &&
    stuEmail.length > 0 &&
    stuPsw.length > 0) {
    isRegistered = true;
    console.log("*** registration successful, please login now!");
}
var loginEmail = "niladri.saha31@example.com";
var loginPsw = "Niladri@1234";
try {
    if (!isRegistered) {
        throw new Error("*** the student is not registered yet!");
    }
    else {
        if (typeof loginEmail === "string" && typeof loginPsw === "string") {
            if (loginEmail === stuEmail && loginPsw === stuPsw) {
                isLoggedIn = true;
                console.log("*** login successful!");
            }
            else {
                throw new Error("*** login failed, please enter correct email ID or password!");
            }
        }
        else {
            throw new Error("*** invalid login email or password!");
        }
    }
}
catch (err) {
    if (typeof err === "object") {
        console.error(err.message);
    }
    else {
        console.error(err);
    }
}
