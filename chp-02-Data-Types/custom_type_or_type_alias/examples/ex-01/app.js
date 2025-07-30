/**
 * *******************************
 * CUSTOM TYPE OR TYPE ALIAS  [Using this concept we can create custom datatypes]
 * *******************************
 */
var Sex;
(function (Sex) {
    Sex["M"] = "Male";
    Sex["F"] = "Female";
    Sex["O"] = "Other";
})(Sex || (Sex = {}));
;
function getClientDetails(client) {
    return "Client ID: ".concat(client.ID, "\n  Name: ").concat(client.name, "\n  SSN: ").concat(client.ssn, "\n  Sex: ").concat(client.sex, "\n  Address: ").concat(client.houseNumber, " ").concat(client.road, ", ").concat(client.townOrVillage, ", ").concat(client.district, ", ").concat(client.state, ", ").concat(client.country, ", ").concat(client.zip, "\n  Is resident?: ").concat(client.isResident, "\n  Phone: ").concat(client.phone, "\n  Email ID: ").concat(client.email);
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
