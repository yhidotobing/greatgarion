function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

function sumTwoSmallesNumbers(numbers) {
  const smallNumber = numbers.sort((a, b) => a - b).slice(0, 2);
  const sum = smallNumber.reduce((a, b) => a + b);
  return sum;
}

// console.log(sumTwoSmallesNumbers([1, 2, 1, 3, 100]));

// function summation(num) {
//   let nilai = 0;
//   for (let i = 0; i <= num; i++) {}
//   return nilai;
// }

// console.log(summation(7));

// function summation(num) {
//   var nilai = 0;
//   for (let i = 1; i <= num; i++) {
//     nilai += i;
//   }
//   return nilai;
// }
// console.log(summation(8));

// function solution(str) {
//   var kata = "";
//   for(let i = str - 1)
// }

// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

// function solution(str) {
//   let string = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     string += str[i];
//   }
//   return string;
// }

// console.log(solution("Tidur"));

// bangun
// nugnab
// function reverseString(str) {
//   var kata = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     kata += str[i];
//   }
//   return kata;
// }
// console.log(reverseString("Apabro"));

// function positiveSum(arr) {
//   let nilai = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       nilai += arr[i];
//     }
//   }
//   return nilai;
// }

// console.log(positiveSum([3, 4, 5, 6, -3]));

// function opposite(number) {
//   number = -number;
//   return number;
// }
// console.log(opposite(4));

// function removeChar(str) {
//   let kata = "";
//   for (let i = 1; i < str.length - 1; i++) {
//     kata += str[i];
//   }
//   return kata;
// }

// console.log(removeChar("place"));

// function summation(num) {
//   let jumlah = 0;
//   for (let i = 1; i <= num; i++) {
//     jumlah += i;
//   }
//   return jumlah;
// }
// console.log(summation(4));

// function noSpace(x) {
//   let kata = "";
//   for (i = 0; i < x.length; i++) {
//     if (x[i] !== " ") {
//       kata += x[i];
//     }
//   }
//   return kata;
// }
// console.log(noSpace("a  b c d"));

// function SmallestIntegerFinder(args) {
//   let smallNumber = args[0];
//   for (let i = 0; i < args.length; i++) {
//     if (args[i] < smallNumber) {
//       smallNumber = args[i];
//     }
//   }
//   return smallNumber;
// }

// console.log(SmallestIntegerFinder([5, 2, 1, -100, 6, 4, 2]));

// function numberToString(num) {
//   let string = "";
//   string += num;
//   return string;
// }
// console.log(numberToString(8));

// function countSheeps(arrayOfSheep) {
//   let count = 0;
//   for (let i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i]) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(
//   countSheeps([
//     true,
//     true,
//     true,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     true,
//     false,
//     true,
//     false,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     false,
//     true,
//     true,
//   ])
// );

// function century(year) {
//   let abad = 0;
//   for (let i = 0; i < year; i++) {
//     if (i % 100 == 0) {
//       abad++;
//     }
//   }
//   return abad;
// }

// function century(year) {
//   return year < 100
//     ? 1
//     : year % 100 == 0
//     ? year / 100
//     : parseInt(year / 100) + 1;
// }

// console.log(century(1901));

function litres(time) {
  let litre = parseInt(time / 2);
  return litre;
}
console.log(litres(12.4));
