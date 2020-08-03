let chargeCus = prompt("The bag of chips costs $9.95, are you going to buy them (yes/no)?");

chargeCus = chargeCus.toLowerCase();

let priceOfChips = 9.95;
let salesTax = .065;

if(chargeCus === "yes")
{
    totalCost = priceOfChips + (priceOfChips * salesTax);
    alert(totalCost);
}