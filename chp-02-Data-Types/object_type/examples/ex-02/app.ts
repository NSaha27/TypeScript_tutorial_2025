/*
  *************************************
    OBJECTS IN TYPESCRIPT
  *************************************
*/

let user = {
  username: "NILADRISAHA",
  name: "Niladri Saha",
  age: 33,
  qlf: "B.Com(Hons.)",
  address: {
    buildingNumber: "25L/5",
    road: "T N Sarani",
    townOrVillage: "Shibpur",
    cityOrDistrict: "Howrah",
    state: "West Bengal",
    country: "India",
  },
  phone: "+918420520348",
  email: "niladri.saha73@gmail.com",
};

// trying to update the user object. We have to redefine the object with the same properties to update it

// user = {
//   username: "ARNABROY",
//   name: "Arnab Roy",
//   age: 27,
//   qlf: "BCA",
// };

// so we need to redefine it with the same properties

user = {
  username: "ARNABROY",
  name: "Arnab Roy",
  age: 27,
  qlf: "BCA",
  address: {
    buildingNumber: "",
    road: "",
    townOrVillage: "",
    cityOrDistrict: "",
    state: "",
    country: "India",
  },
  phone: "",
  email: "",
};

// specifying the properties through object inference

const accomodations: {
  owner: {
    username: string;
    name: string;
    whatsappNumber: string;
    email: string;
  };
  buildingName: string;
  buildingType: string;
  buildingContactNumber: string;
  rentFor2Nights: number;
  buildingAddress: {
    buildingNumber: string;
    road: string;
    townOrVillage: string;
    cityOrDistrict: string;
    state: string;
    country: string;
  };
} = {
  owner: {
    username: "JOHNDOE",
    name: "John Doe",
    whatsappNumber: "+847847824539",
    email: "john.doe28@gmail.com",
  },
};
