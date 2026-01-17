/*
  COURSE DETAILS
*/

const crsID: number = 1;
const crsName: string = "TypeScript Hindi Tutorial";
const crsAuthor: string = "Anil Siddhu";
const crsSource: string = "YouTube";
const crsAccountName: string = "Code Step By Step";
const crsIsPaidSubscription: boolean = false;
const crsDuration: number | string = "mixed";

console.log(`Course Details:
ID: ${crsID}
Name: ${crsName}
Author: ${crsAuthor}
Source: ${crsSource}
Source Account: ${crsAccountName}
Subscription Type: ${crsIsPaidSubscription ? "paid" : "free"}
Duration (hr/mixed): ${crsDuration}
`);
