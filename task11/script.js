
function getRandomChineseChar() {
   const sign = Date.now().toString().slice(-5);
   return String.fromCharCode(Number(sign) + 19968); // Додали 19968, щоб отримати китайські ієрогліфи
 }
 
 function getRandomChinese(length) {
   return new Promise((resolve) => {
     let result = "";
     let count = 0;
 
     function addChar() {
       result += getRandomChineseChar();
       count++;
 
       if (count === length) {
         resolve(result);
       } else {
         setTimeout(addChar, 50);
       }
     }
 
     addChar();
   });
 }
 
 getRandomChinese(4).then((chineseString) => {
   console.log(chineseString); 
 });
 