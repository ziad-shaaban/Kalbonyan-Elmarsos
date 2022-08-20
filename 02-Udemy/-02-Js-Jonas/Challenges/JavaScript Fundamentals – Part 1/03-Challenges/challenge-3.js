// challenge 03
// ------------------- challenge ---------------
// const averageDolhpinsScore = (96 + 108 + 89) / 3;
// const averagekoalasScore = (88 + 91 + 110) / 3;

// if (averageDolhpinsScore > averagekoalasScore) {
//   console.log("Dolhpins win a trophy! 🏆");
// } else if (averagekoalasScore > averageDolhpinsScore) {
//   console.log("koalas win a trophy! 🏆");
// } else {
//   console.log("Both Teams' average scores are equal");
// }

//------------- BONUS 01 -------------------
// const averageDolhpinsScore = (97 + 112 + 101) / 3;
// const averagekoalasScore = (109 + 95 + 123) / 3;

// if (averageDolhpinsScore > averagekoalasScore && averageDolhpinsScore >= 100) {
//   console.log("Dolhpins win a trophy! 🏆");
// } else if (
//   averagekoalasScore > averageDolhpinsScore &&
//   averagekoalasScore >= 100
// ) {
//   console.log("koalas win a trophy! 🏆");
// } else {
//   console.log("Both Teams' average scores are equal");
// }

// ------------------- Bouns 2 ---------------
const averageDolhpinsScore = (97 + 112 + 101) / 3;
const averagekoalasScore = (109 + 95 + 106) / 3;

if (averageDolhpinsScore > averagekoalasScore && averageDolhpinsScore >= 100) {
  console.log("Dolhpins win a trophy! 🏆");
} else if (
  averagekoalasScore > averageDolhpinsScore &&
  averagekoalasScore >= 100
) {
  console.log("koalas win a trophy! 🏆");
} else if (
  averageDolhpinsScore === averagekoalasScore &&
  averageDolhpinsScore >= 100 &&
  averagekoalasScore >= 100
) {
  console.log("Both Teams' average scores are equal and both win a trophy 🏆");
} else {
  console.log("No One Wins the Trophy 😢");
}
