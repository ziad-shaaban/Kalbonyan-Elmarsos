// challenge 01
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas}) 🏆`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins}) 🏆`;
  } else {
    return `no one win 😢`;
  }
}

console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)));
