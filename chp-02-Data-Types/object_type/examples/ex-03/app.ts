// object datatype
const user: {
  username: string;
  fullName: string;
  age: number;
  hasAadhaar: boolean;
  email: string;
} = {
  username: "NILADRISAHA",
  fullName: "Niladri Saha",
  age: 33,
  hasAadhaar: true,
  email: "niladri.saha31@example.com",
};

console.log("Name:", user.fullName);
console.log("Email:", user.email);
console.log();

// trying to insert a new property in the user object (we have to define all the properties that we require in the user object, otherwise a property missing error will be thrown)
// user.phone = "+918420520344"; // property doesn't exist error will be thrown

// to avoid the above problem do the following
const customer: {
  [key: string]: string | number | boolean;
} = {
  username: "TISTADUTTA",
  fullName: "Tista Dutta",
  gender: "female",
  address: "Serampore",
  pin: 714023,
  phone: "+919163720961",
  email: "tistadutta007@gmail.com",
  isLoggedIn: false,
};

console.log("Customer details:");
console.log("Customer name:", customer.fullName);
console.log("address", customer.address);
console.log("phone:", customer.phone);
console.log("email ID:", customer.email);
console.log(
  `*The customer is ${customer.isLoggedIn ? "logged in" : "not logged in"}!`,
);

// adding new properties to the customer object
customer.district = "Hooghly";
customer.state = "West Bengal";
customer.country = "India";

console.log();
console.log(customer);

// adding nested object
const client: {
  ssn: number;
  name: string;
  address: {
    buildingNumber: string;
    street: string;
    city: string;
    district: string;
    state: string;
    country: string;
    pin: number;
  };
  phone: string;
  email: string;
  projects: [
    {
      [key: string]: string | number | boolean | Array<string>;
    },
  ];
} = {
  ssn: 740147351509,
  name: "Niladri Saha",
  address: {
    buildingNumber: "28B/1",
    street: "B B Gangully Street",
    city: "Kolkata",
    district: "Kolkata",
    state: "West Bengal",
    country: "India",
    pin: 700016,
  },
  phone: "+918420520344",
  email: "niladri.saha31@example.com",
  projects: [
    {
      title: "Cornica, the hotel chain",
      description:
        "It is a full-fledged website of a hotel chain, that provided fooding, catering and lodging facilities",
      projectUndertakingDate: "17/05/2026",
      expectedDeliveryDate: "30/05/2026",
      priceCharged: 15000,
      isDelivered: false,
    },
  ],
};

console.log();
console.log("Client details:");
console.log("SSN:", client.ssn);
console.log("Name:", client.name);
console.log(`Address:
${client.address.buildingNumber} ${client.address.street}, ${client.address.city}, dist: ${client.address.district}, state: ${client.address.state}, country: ${client.address.country}, pin: ${client.address.pin}
  `);
console.log("Projects:");
client.projects.forEach((proj, index) => {
  console.log(`ID: ${index + 1}
Title: ${proj.title}
Description: ${proj.description}
Undertaken on (dd/mm/yyyy): ${proj.projectUndertakingDate}
Expected delivery date (dd/mm/yyyy): ${proj.expectedDeliveryDate}
Price charged (Rs): ${proj.priceCharged}
Delivery status: ${proj.isDelivered ? "delivered" : "not yet delivered"}
`);
});
