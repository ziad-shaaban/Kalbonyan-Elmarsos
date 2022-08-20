// challenge 02
// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI {${markBMI}} is higher than john's BMI {${johnBMI}}`);
} else {
  console.log(`john's BMI {${johnBMI}} is higher than Mark's BMI {${markBMI}}`);
}
