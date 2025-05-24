// null and undefined type

let users: null | Array<object> = null;

let userName: undefined | string = undefined;
let userPhone: undefined | string = undefined;
let userEmail: undefined | string = undefined;
let userPassword: undefined | string = undefined;

// user 1
userName = "NILADRISAHA31";
userPhone = "+918420520484";
userEmail = "niladri.saha31@gmail.com";
userPassword = "NiladriSaha@12345";
users = [{ userName, userPhone, userEmail, userPassword }];
// console.log(users);

// user 2
userName = "ARNABROY26";
userPhone = "+919830620344";
userEmail = "arnab.roy26@gmail.com";
userPassword = "@rnabRoy@12345";
users.push({ userName, userPhone, userEmail, userPassword });
console.log(users);
