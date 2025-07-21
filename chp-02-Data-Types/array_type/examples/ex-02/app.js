/*
  ******************************
    ARRAY IN TYPESCRIPT
  ******************************
*/
// implicit or automatic type inference
var stuIds = [101, 102, 103];
var studentAndTheirBirthYears = ["Abhisekh Chatterjee", 1999, "Mitin Saha", 1996, "Diptanu Hazra", 1993];
console.log("Student details:\n  ID: ".concat(stuIds[0], "\n  Name: ").concat(studentAndTheirBirthYears[0], "\n  Birth Year: ").concat(studentAndTheirBirthYears[1], "\n\n  ID: ").concat(stuIds[1], "\n  Name: ").concat(studentAndTheirBirthYears[2], "\n  Birth Year: ").concat(studentAndTheirBirthYears[3], "\n\n  ID: ").concat(stuIds[2], "\n  Name: ").concat(studentAndTheirBirthYears[4], "\n  Birth Year: ").concat(studentAndTheirBirthYears[5], "\n  \n  "));
// explicit or manual type inference
var employees = ["Arnab Roy", "Niladri Saha", "Tista Dutta", "Madhuja Bhowmick"];
console.log("Employees we have : ".concat(employees.join(", "), "\n"));
var productAndTheirPrices = ["Rice", 62, "Sugar", 42, "Bread", 10.5];
console.log("Product details:\n  Product: ".concat(productAndTheirPrices[0], "\n  Price(Rs.): ").concat(productAndTheirPrices[1], "\n  \n  Product: ").concat(productAndTheirPrices[2], "\n  Price(Rs.): ").concat(productAndTheirPrices[3], "\n  \n  Product: ").concat(productAndTheirPrices[4], "\n  Price(Rs.): ").concat(productAndTheirPrices[5]));
// array with nested array or objects
var accomodations = [
    {
        id: 1,
        name: "Gurung Guest House",
        type: "Guest House",
        desc: "A hill facing guest house in Darjeeling with all the required amenities for guests",
        location: "Tinchule, Darjeeling",
        images: ["gurung_guest_house_1.jpg", "gurung_guest_house_2.jpg"],
        costPerNight: 1400,
        isAvailable: true
    },
    {
        id: 2,
        name: "Hotel Raj Inn",
        type: "Hotel",
        desc: "This hotel is nearby the Bikaner fort, has fooding and room servicing facilities",
        location: "Bikaner, Rajasthan",
        images: ["hotel_raj_inn_1.jpg", "hotel_raj_inn_2.jpg"],
        costPerNight: 2500,
        isAvailable: false
    }
];
console.log("\nAccomodation details:");
accomodations.forEach(function (acc) {
    console.log(" ID: ".concat(acc.id, "\n    Name: ").concat(acc.name, "\n    Type: ").concat(acc.type, "\n    Description: ").concat(acc.desc, "\n    Location: ").concat(acc.location, "\n    Cost per night(in Rs.): ").concat(acc.costPerNight, "\n    Is currently available: ").concat(acc.isAvailable ? "yes" : "no", "\n    "));
});
