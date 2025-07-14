let username: string = "NILADRISAHA";
let fullName: string = "Niladri Saha";
let age: number = 32;
let isAdult: boolean = age >= 18;
let contactEmail = "niladrisaha32@gmail.com";
let clients: Array<object> = [{cliName: "Manish Aggarwal", cliContactNo: "+918747923144"}, {cliName: "Anjali Arora", cliContactNo: "+919163431087"}];

// checking whether the conversion is done or not, if there is an error
let hobbies: Array<string> = ["Playing Flute", "Gardening"];

console.log(`Username: ${username}
Full Name: ${fullName}
Age: ${age}
Is adult?: ${isAdult}
Email ID: ${contactEmail}
Clients: ${clients.join(",\n")}
Hobbies: ${hobbies.join(", ")}`);