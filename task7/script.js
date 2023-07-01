const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1.
function getMyTaxes(salary) {
   const taxes = this.tax * salary;
   return taxes;
}
const salary = 1789;
const ukraineTaxes = getMyTaxes.call(ukraine, salary);
console.log(`Прдатки в Україні: ${ukraineTaxes}`);

//2.
function getMiddleTaxes() {
   const middleTaxes = this.tax * this.middleSalary;
   return middleTaxes;
 }
 const ukraineMiddleTaxes = getMiddleTaxes.call(ukraine);
const latviaMiddleTaxes = getMiddleTaxes.call(latvia);
const litvaMiddleTaxes = getMiddleTaxes.call(litva);

console.log(`Середні податки: Україна - ${ukraineMiddleTaxes}, Латвія - ${latviaMiddleTaxes}, Литва - ${litvaMiddleTaxes}`);

//3.
function getTotalTaxes() {
   const totalTaxes = this.tax * this.middleSalary * this.vacancies;
   return totalTaxes;
}
const ukraineTotalTaxes = getTotalTaxes.call(ukraine);
const latviaTotalTaxes = getTotalTaxes.call(latvia);
const litvaTotalTaxes = getTotalTaxes.call(litva);
console.log(`Загальні податки: Україна - ${ukraineTotalTaxes}, Латвія - ${latviaTotalTaxes}, Литва - ${litvaTotalTaxes}`);

//4.
function getMySalary(country) {
const minSalary = 1500;
const maxSalary = 2000;

setInterval (() => {
   const salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
   const taxes = salary * country.tax;
   const profit = salary - taxes;

   console.log({salary, taxes, profit});
}, 10000);
}
console.log(`Кожні 10 секунд генеруються нові значення заробітної плати (ukraine):`);
getMySalary(ukraine);
