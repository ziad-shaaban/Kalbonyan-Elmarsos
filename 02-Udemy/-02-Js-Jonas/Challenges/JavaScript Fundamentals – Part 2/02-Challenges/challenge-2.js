// challenge 02
const bills = [125, 555, 44];
let tip = [];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300
    ? tip.push(bill * 0.15)
    : tip.push(bill * 0.2);
};

calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);

let total = [tip[0] + bills[0], tip[1] + bills[1], tip[2] + bills[2]];

console.log(
  `The bill was ${bills[0]}, the tip was ${tip[0]}, and the total value ${total[0]}`
);
console.log(
  `The bill was ${bills[1]}, the tip was ${tip[1]}, and the total value ${total[1]}`
);
console.log(
  `The bill was ${bills[2]}, the tip was ${tip[2]}, and the total value ${total[2]}`
);
