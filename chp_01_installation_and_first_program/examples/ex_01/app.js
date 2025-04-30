var username = "ARNABROY26";
var firstName = "Arnab";
var lastName = "Roy";
var age = 26;
var hasDriversLicense = true;
var address = {
    buildingNumber: "20B/1",
    street: "Rashmohan Road",
    town: "Kalyani",
    district: "Bardhaman",
    state: "West Bengal",
    country: "India",
};
var contact = 9830532144;
var email = "arnab.roy26@gmail.com";
console.log("Full User Details:\nUsername => ".concat(username, "\nName => ").concat(firstName, " ").concat(lastName, "\nAge => ").concat(age, " years\nHas a driver's license? => ").concat(hasDriversLicense, "\nAddress => \n  Flat/Building number: ").concat(address["buildingNumber"], "\n  Street: ").concat(address["street"], "\n  Town/City/Village: ").concat(address["town"], "\n  District: ").concat(address["district"], "\n  State: ").concat(address["state"], "\n  Country: ").concat(address["country"], "\nContact number => ").concat(contact, "\nEmail ID => ").concat(email));
