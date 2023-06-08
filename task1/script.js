const laptops = 15.678;
const phones  = 123.965;
const headphones = 90.2345;

let maxPrice = Math.max(laptops, phones, headphones);
console.log('maxPrice:', maxPrice);
let minPrice = Math.min(laptops, phones, headphones);
console.log('minPrice:', minPrice);

const sumPrice = (laptops + phones + headphones);
console.log('sumPrice:', sumPrice);

let allFloor = Math.floor(laptops)+Math.floor(phones)+Math.floor(headphones);
console.log('allFloor:', allFloor);

let roundedTo100 = Math.round(sumPrice/100)*100;
console.log('roundedTo100:', roundedTo100);

let isEven = Math.floor(sumPrice)%2 === 0;
console.log('isEven:', Math.floor(sumPrice)%2 === 0)

let sum = 500 - sumPrice;
console.log('Сума решти:', sum);

let avgValue = sumPrice/3;
console.log("Average value:", + avgValue.toFixed(2));





const discount = (Math.random().toFixed(2))*100; 
const totalCost = (sumPrice - (sumPrice * discount / 100)).toFixed(2); 

const profit = ((sumPrice / 2) - (discount * sumPrice)/100).toFixed(2); 




const result = `
Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${sumPrice}
Сума округлених цін товарів: ${allFloor}
Сума товарів округлена до сотень: ${roundedTo100}
Сума всіх товарів (округлена) є парним числом: ${isEven}
Сума решти при оплаті на 500 грн: ${sum}
Середнє значення цін: ${avgValue.toFixed(2)}
Знижка: ${discount}%
Сума до оплати з урахуванням знижки: ${totalCost}
Чистий прибуток: ${profit}
`;
console.log(result);
