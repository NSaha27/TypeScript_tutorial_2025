let username: string = "ARNABROY26";
let firstName: string = "Arnab";
let lastName: string = "Roy";
let age: number = 26;
let hasDriversLicense: boolean = true;
let address: object = {
  buildingNumber: "20B/1",
  street: "Rashmohan Road",
  town: "Kalyani",
  district: "Bardhaman",
  state: "West Bengal",
  country: "India",
};
let contact: number = 9830532144;
let email: string = "arnab.roy26@gmail.com";

console.log(`Full User Details:
Username => ${username}
Name => ${firstName} ${lastName}
Age => ${age} years
Has a driver's license? => ${hasDriversLicense}
Address => 
  Flat/Building number: ${address["buildingNumber"]}
  Street: ${address["street"]}
  Town/City/Village: ${address["town"]}
  District: ${address["district"]}
  State: ${address["state"]}
  Country: ${address["country"]}
Contact number => ${contact}
Email ID => ${email}`);
