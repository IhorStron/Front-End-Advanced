

//1.
function getRandomArray(length, min, max) {
   const randomArray = [];
 
   for (let i = 0; i < length; i++) {
     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
     randomArray.push(randomNumber);
   }
 
   return randomArray;
 }
 
 const result1 = getRandomArray(15, 1, 100);
 console.log(`1.getRandomArray: ` +  result1);


//3.
function getAverage(...numbers) {
   let sum = 0;
   let count = 0;
 
   for (const num of numbers) {
     if (Number.isInteger(num)) {
       sum += num;
       count++;
     }
   }
 
   if (count === 0) {
     return 0;
   }
 
   const average = sum / count;
   return average;
 }
 
 const result3 = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
 console.log(`3.getAverage: ` + result3);


 //4.
 function getMedian(...numbers) {
   if (numbers.length === 0) {
     return null;
   }
 
   const sortedNumbers = numbers.sort((a, b) => a - b);
   const medianIndex = Math.floor(sortedNumbers.length / 2);
 
   if (sortedNumbers.length % 2 !== 0) {
     return sortedNumbers[medianIndex];
   } else {
     const medianValue1 = sortedNumbers[medianIndex];
     const medianValue2 = sortedNumbers[medianIndex - 1];
     return (medianValue1 + medianValue2) / 2;
   }
 }
console.log(`4.getMedian: ` + getMedian(1, 2, 3, 4));


 //5.
 function filterEvenNumbers(...numbers) {
   return numbers.filter(number => number % 2 !== 0);
 }
console.log(`5.filterEvenNumbers: `+ filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9)); 


//6.
function countPositiveNumbers(...numbers) {
   return numbers.filter(number => number > 0).length;
 }
 console.log(`6.countPositiveNumbers: `+ countPositiveNumbers(1, -2, 3, -4, 5, -6, 7, -8, 9)); 

 
 //7.
 function getDividedByFive(...numbers) {
   return numbers.filter(number => number % 5 === 0);
 }
console.log(`7.getDividedByFive: ` + getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); 
 
 




 