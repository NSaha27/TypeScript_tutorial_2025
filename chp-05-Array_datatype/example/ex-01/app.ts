// Array datatype - A sequence of same type of data

const players: string[] = [
  "Shubman Gill",
  "Rohit Sharma",
  "Virat Kohli",
  "Shreyas Iyer",
  "KL Rahul",
  "Hardik Pandya",
  "Ravindra Jadeja",
  "Axar Patel",
  "Jasprit Bumrah",
  "Mohammad Siraj",
  "Arshadeep Singh",
];

console.log(players);

// trying to add any type of data other than string will through error
// players.push(12);

// adding data of same type
players.push("Washington Sundar", "Mohammad Shami", "Shivam Dube");

console.log(players);

// Array datatype but declared in another way
const marks: Array<number> = [92, 89, 85, 93, 96, 82, 91];

const marksAvg = Math.round(
  marks.reduce((acc: number, curMark: number) => {
    return (acc += curMark);
  }, 0) / marks.length,
);
console.log(marksAvg);

// use of ReadonlyArray
const constituencies: ReadonlyArray<string> = [
  "Howrah North",
  "Howrah South",
  "Howrah Middle",
  "Kolkata",
  "North 24 Parganas",
  "South 24 Parganas",
  "East Midnapore",
  "West Midnapore",
  "Hooghly",
  "Bally",
  "Serampore",
];

// try to add data to a ReadonlyArray will through error
// constituencies.push("Malda Town"); // error
// constituencies.push("Siliguri"); // error

console.log(constituencies);

// more examples
const foodMenu: string[] = [
  "Ching's Mixed Hakka Noodles",
  "D. Bapi Biriyani",
  "Golabari Chicken Kosha",
];
console.log(foodMenu);
foodMenu.push(
  "Abar Khabo Fish Thali",
  "Raju Dar Paratha",
  "Dada Boudi Biriyani",
);
console.log(foodMenu);

const newsChannels: ReadonlyArray<string> = [
  "ABP Ananda",
  "Z News",
  "News18 Bangla",
  "Z 24 Ghanta",
  "R. Bangla",
];
console.log(newsChannels);

/*
newsChannels.push("Aaj Tak", "ABP News"); // will through error as the variable is readonly
console.log(newsChannels);

// the splice() method will also not work
newsChannels.splice(1, 1);
console.log(newsChannels);
*/
