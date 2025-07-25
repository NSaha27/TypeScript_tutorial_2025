/*
  *****************************
  ENUM IN TYPESCRIPT
  *****************************
*/

enum roles {
  ADMIN, 
  READ_ONLY, 
  WRITE_ONLY, 
  READ_WRITE
}

const users = [
  {
    username: "NILADRISAHA",
    name: "Niladri Saha",
    ip_address: "127.0.0.1",
    phone: "+918420520132",
    email: "niladri.saha26@gmail.com",
    password: "Niladri@12345",
    role: roles.ADMIN
  },
  {
    username: "ARNABROY",
    name: "Arnab Roy",
    ip_address: "127.0.0.2",
    phone: "+919830530214",
    email: "arnab.roy26@gmail.com",
    password: "Arnab@12345",
    role: roles.WRITE_ONLY
  },
  {
    username: "TISTADUTTA",
    name: "Tista Dutta",
    ip_address: "127.0.0.3",
    phone: "+919163562961",
    email: "tista.dutta17@gmail.com",
    password: "Tista@12345",
    role: roles.READ_ONLY
  },
  {
    username: "MITINSAHA",
    name: "Mitin Saha",
    ip_address: "127.0.0.4",
    phone: "+917947601500",
    email: "mitin.saha25@gmail.com",
    password: "Mitin@12345",
    role: roles.READ_WRITE
  }
];

function login(username: string, password: string){
  const userFound = users.filter(user => user.username === username && user.password === password);
  if(userFound.length > 0){
    let message = "Hello Mr./Ms. " + userFound[0].name + ", you've been alloted with the role of ";
    switch(userFound[0].role){
      case 0:
        message += "admin to control all the databases!";
        break;
      case 1:
        message += "reading the databases of our company only!";
        break;
      case 2:
        message += "writting the databases of our company only!";
        break;
      case 3:
        message += "reading as well as writting the databases of our company!";
        break;
      default:
        message += "doing nothing with the databases of our company!";
    }
    return message;
  }else{
    return "*** invalid log in credentials!";
  }
}

// test by calling the login function for different users

// trying to log in Tista (but with wrong password) and Arnab (with correct password)
console.log(login("TISTADUTTA", "Tista@123"));
console.log();
console.log(login("ARNABROY", "Arnab@12345"));

// trying the same for Mitin (but with wrong username) and Niladri
console.log();
console.log(login("MITINSAH", "Mitin@12345"));
console.log();
console.log(login("NILADRISAHA", "Niladri@12345"));



