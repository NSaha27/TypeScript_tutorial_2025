/*
  ******************************
    ARRAY IN TYPESCRIPT
  ******************************
*/

// implicit or automatic type inference
const stuIds = [101, 102, 103];
const studentAndTheirBirthYears = ["Abhisekh Chatterjee", 1999, "Mitin Saha", 1996, "Diptanu Hazra", 1993];

console.log(`Student details:
  ID: ${stuIds[0]}
  Name: ${studentAndTheirBirthYears[0]}
  Birth Year: ${studentAndTheirBirthYears[1]}

  ID: ${stuIds[1]}
  Name: ${studentAndTheirBirthYears[2]}
  Birth Year: ${studentAndTheirBirthYears[3]}

  ID: ${stuIds[2]}
  Name: ${studentAndTheirBirthYears[4]}
  Birth Year: ${studentAndTheirBirthYears[5]}
  
  `);

// explicit or manual type inference
const employees: string[] = ["Arnab Roy", "Niladri Saha", "Tista Dutta", "Madhuja Bhowmick"];
console.log(`Employees we have : ${employees.join(", ")}\n`);

const productAndTheirPrices: (string | number)[] = ["Rice", 62, "Sugar", 42, "Bread", 10.5];
console.log(`Product details:
  Product: ${productAndTheirPrices[0]}
  Price(Rs.): ${productAndTheirPrices[1]}
  
  Product: ${productAndTheirPrices[2]}
  Price(Rs.): ${productAndTheirPrices[3]}
  
  Product: ${productAndTheirPrices[4]}
  Price(Rs.): ${productAndTheirPrices[5]}`);

// array with nested array or objects
const accomodations: {
  id: number,
  name: string,
  type: string,
  desc: string,
  location: string,
  images: string[],
  costPerNight: number,
  isAvailable: boolean
}[] = [
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

console.log(`\nAccomodation details:`);
accomodations.forEach(acc => {
  console.log(` ID: ${acc.id}
    Name: ${acc.name}
    Type: ${acc.type}
    Description: ${acc.desc}
    Location: ${acc.location}
    Cost per night(in Rs.): ${acc.costPerNight}
    Is currently available: ${acc.isAvailable ? "yes" : "no"}
    `);
});
