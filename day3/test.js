let values = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

let num1 = [];
let num2 = [];
let num3 = [];
let num4 = [];
let num5 = [];

values.forEach((value) => {
  num1.push(value.charAt(0));
  num2.push(value.charAt(1));
  num3.push(value.charAt(2));
  num4.push(value.charAt(3));
  num5.push(value.charAt(4));
});

function mode(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}

function antiMode(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === b).length - arr.filter((v) => v === a).length
    )
    .pop();
}

let modeNum1 = mode(num1);
let modeNum2 = mode(num2);
let modeNum3 = mode(num3);
let modeNum4 = mode(num4);
let modeNum5 = mode(num5);

let antiModeNum1 = antiMode(num1);
let antiModeNum2 = antiMode(num2);
let antiModeNum3 = antiMode(num3);
let antiModeNum4 = antiMode(num4);
let antiModeNum5 = antiMode(num5);

let oxygenOne = [];
let oxygenTwo = [];
let oxygenThree = [];
let oxygenFour = [];
let oxygenFive = [];

function getOxygenLengths() {
  let oxygenOneBit0 = 0;
  let oxygenOneBit1 = 0;
  let oxygenTwoBit0 = 0;
  let oxygenTwoBit1 = 0;
  let oxygenThreeBit0 = 0;
  let oxygenThreeBit1 = 0;
  let oxygenFourBit0 = 0;
  let oxygenFourBit1 = 0;
  let oxygenFiveBit0 = 0;
  let oxygenFiveBit1 = 0;

  values.forEach((value) => {
    if (value.charAt(0) === modeNum1) {
      oxygenOneBit0++;
    }
    if (value.charAt(0) === antiModeNum1) {
      oxygenOneBit1++;
    }
  });

  if (oxygenOneBit0 === oxygenOneBit1) {
    values.forEach((value) => {
      if (value.charAt(0) === "1") {
        oxygenOne.push(value);
      }
    });
  } else {
    values.forEach((value) => {
      if (value.charAt(0) === modeNum1) {
        oxygenOne.push(value);
      }
    });
  }
  console.log(oxygenOne);
}
getOxygenLengths();

/* 
console.log(oxygenOne);
console.log(oxygenTwo);
console.log(oxygenThree);
console.log(oxygenFour);
console.log(oxygenFive); */

/* let oxygenRating = oxygenTen.toString();
console.log(oxygenRating); */

/* let scrubOne = [];
let scrubTwo = [];
let scrubThree = [];
let scrubFour = [];
let scrubFive = [];


function getScrubberRating() {
  values.forEach((value) => {
    if (value.charAt(0) === antiModeNum1) {
      scrubOne.push(value);
    }
  });
  scrubOne.forEach((value) => {
    if (value.charAt(1) === antiModeNum2) {
      scrubTwo.push(value);
    }
  });
  scrubTwo.forEach((value) => {
    if (value.charAt(2) === antiModeNum3) {
      scrubThree.push(value);
    }
  });
  scrubThree.forEach((value) => {
    if (value.charAt(3) === antiModeNum4) {
      scrubFour.push(value);
    }
  });
  scrubFour.forEach((value) => {
    if (value.charAt(4) === antiModeNum5) {
      scrubFive.push(value);
    }
  });
}

getScrubberRating();
console.log(scrubOne);
console.log(scrubTwo);
console.log(scrubThree); */

/* let scrubRating = scrubTen.toString();
console.log(scrubRating); */
