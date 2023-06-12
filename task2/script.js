
let n = parseInt(prompt("Введіть число N:"));


if (isNaN(n)) {
  console.log("Введено некоректне значення для N");
  
}


let m = parseInt(prompt("Введіть число M:"));


if (isNaN(m)) {
  console.log("Введено некоректне значення для M");
  
}


let skipEven = confirm("Пропускати парні числа?");


let sum = 0;


for (let i = n; i <= m; i++) {
  if (skipEven && i % 2 === 0) {
    continue; 
  } else
  sum += i;
}


console.log("Сума чисел:", sum);
