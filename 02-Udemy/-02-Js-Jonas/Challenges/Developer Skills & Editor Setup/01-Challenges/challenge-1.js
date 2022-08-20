const temperaturesOne = [17, 21, 23];
const temperaturesTwo = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log('...' + str);
};
printForecast(temperaturesOne);
printForecast(temperaturesTwo);

// "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
