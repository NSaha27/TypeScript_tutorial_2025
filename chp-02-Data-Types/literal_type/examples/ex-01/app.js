/**
 * ***************************
 * LITERAL DATATYPE  [This specifies which type of value we will be using as a variable or as a function parameter]
 * ***************************
 */
// In case of a variable, we always need to declare it as a constant
var myName = "Niladri Saha";
// we cannot use let to declare a literal variable
var myEmailId = "niladri.saha26@example.com"; // this will only create a string variable
// in the case of function parameters
function getAccessPermission(role) {
    var getRole = role;
    var permission = "";
    switch (getRole) {
        case "admin":
            permission = "you are an admin, and you have all the permissions!";
            break;
        case "read-only":
            permission = "you have the permission to only read the contents!";
            break;
        case "write-only":
            permission = "you have the permission to only write content(s)!";
            break;
        case "read-write":
            permission = "you have the permission to both read and write content(s)!";
        default:
            permission = "you don't have the permission to do something with the content(s)!";
    }
    return permission;
}
// let's test the literal by calling the above function with different parameters
console.log(getAccessPermission("write-only"));
console.log(getAccessPermission("admin"));
// console.log(getAccessPermission("user"));  // this will throw error, as user is not specified in the literal list
