"use strict";
const usernameRegexp = /^[A-Z0-9]{3,30}$/;
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
function validateUsername(username) {
    return usernameRegexp.test(username);
}
function validatePassword(password) {
    return passwordRegExp.test(password);
}
const users = [
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
function login(username, password) {
    const isValidUsername = validateUsername(username);
    const isValidPassword = validatePassword(password);
    if (!isValidUsername) {
        console.log("***invalid username!");
        return false;
    }
    if (!isValidPassword) {
        console.log("***invalid password!");
        return false;
    }
    const user = users.find((user) => user.username === username && user.password === password);
    if (!user) {
        console.error("***invalid login credentials!");
        return false;
    }
    console.log(`***login successful, welcome back ${username}!`);
    return true;
}
let username = undefined;
let password = undefined;
// trying to log in with invalid data
username = "SUSHILPAUL";
password = "Sushil@12345";
login(username, password);
// trying to log in with valid data
username = "NILADRISAHA";
password = "Niladri@12345";
login(username, password);
