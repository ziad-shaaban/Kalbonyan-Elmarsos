// challenge 04
//22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = (bill) => {
  for (let i = 0; i < bill.length; i++) {
    bill[i] >= 50 && bill[i] <= 300
      ? tips.push(bill[i] * 0.15)
      : tips.push(bill[i] * 0.2);
    totals.push(bill[i] + tips[i]);
  }
};
calcTip(bills);

const calcAverage = (arr) => {
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    average += arr[i];
  }
  return average / arr.length;
};

// for (let i = 0; i < totals.length; i++) {
//   console.log(
//     `The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${totals[i]}`
//   );
// }

console.log(bills);
console.log(tips);
console.log(totals);
console.log(calcAverage(totals));
console.log(calcAverage(tips));
