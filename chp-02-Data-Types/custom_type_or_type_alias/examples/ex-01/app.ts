/**
 * *******************************
 * CUSTOM TYPE OR TYPE ALIAS  [Using this concept we can create custom datatypes]
 * *******************************
 */

type stringOrNumber = string | number;
type stringOrBoolean = string | boolean;
type Client = {
  ID: stringOrNumber,
  name: string,
  ssn: stringOrNumber,
  sex: string,
  houseNumber: stringOrNumber,
  road: string,
  townOrVillage: string,
  district: string,
  state: string,
  country: string,
  zip: stringOrNumber,
  isResident: stringOrBoolean,
  phone: stringOrNumber,
  email: string
};
enum Sex {
  "M" = "Male",
  "F" = "Female",
  "O" = "Other"
};

function getClientDetails(client: Client){
  return `Client ID: ${client.ID}
  Name: ${client.name}
  SSN: ${client.ssn}
  Sex: ${client.sex}
  Address: ${client.houseNumber} ${client.road}, ${client.townOrVillage}, ${client.district}, ${client.state}, ${client.country}, ${client.zip}
  Is resident?: ${client.isResident}
  Phone: ${client.phone}
  Email ID: ${client.email}`;
}

// printing different client infoes

console.log(getClientDetails({
  ID: 1,
  name: "Arnab Roy",
  ssn: 843051296228,
  sex: Sex.M,
  houseNumber: "28B/1",
  road: "Rasmani Road",
  townOrVillage: "Kalyani",
  district: "Bardhaman",
  state: "West Bengal",
  country: "India",
  zip: 718403,
  isResident: true,
  phone: "+919830532144",
  email: "arnab.roy26@gmail.com"
}));

console.log();

console.log(getClientDetails({
  ID: 2,
  name: "Tista Dutta",
  ssn: 732104597168,
  sex: Sex.F,
  houseNumber: "2/D/5",
  road: "D. Gangully Avenue",
  townOrVillage: "Serampore",
  district: "Hooghly",
  state: "West Bengal",
  country: "India",
  zip: 712523,
  isResident: true,
  phone: "+919163531961",
  email: "tista.dutta077@gmail.com"
}));