var money = prompt("Ваш бюджет?");
let shopName = prompt("Название вашего магазина?");
 let mainList = {
 	money,
 	shopName,
 	shopGoods: [],
 	employers: {},
 	open
 }	

 let good1 = prompt("Какой тип товаров будем продавать?");
 let good2 = prompt("Какой тип товаров будем продавать?");
 let good3 = prompt("Какой тип товаров будем продавать?");

 mainList.shopGoods.push(good1);
 mainList.shopGoods.push(good2);
 mainList.shopGoods.push(good3);

 let moneyOneDay = money / 30;
 alert(moneyOneDay);
 console.log(mainList.shopGoods);