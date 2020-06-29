// function
const logValue: (num: number) => void = (num: number) => {
  console.log(num);
};
logValue(4);

//when to use annotations

//1) function that returnds any
const json = '{"x":10,"y":20}';
const coo: { x: number; y: number } = JSON.parse(json);
console.log(coo);

let numbers: number[] = [-11, -34, -89, -67];
let digit: number | boolean;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    digit = numbers[i];
    break;
  } else {
    digit = false;
  }
}

console.log(digit);
