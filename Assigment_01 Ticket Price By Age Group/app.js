var pessengerName = [
    "Rashid",
    "Mrs Rashid",
    "Younger Girl of Rashid",
    "Small kid of Rashid",
    "Zafar",
    "Khalid",
];
var pessengerAge = [45, 35, 15, 2, 50, 60];
var luggageWait = [100, 100, 20, 20, 89, 45];
var ticketPrice = 1000;
var a = 0;
var increement = 0;
var totPrice = 0;
var luggagePrice = 0;
// console.log(pessengerName[0],pessengerAge[0])
// if (pessengerAge[0]<5){console.log(`Ticket Price Rs. 500`)}
// else (console.log(`Ticket Price is Rs. 2000`));
console.log("\n\n•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••");
console.log("••••••••••••••••••••••••••••••••••••••••T A S O O R I  E X P R E S S•••••••••••••••••••••••••••••••••••");
console.log("•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••");
console.log("\n\nPessanger Name\t:\t".concat(pessengerName[a], "\nPassanger Age\t:\t").concat(pessengerAge[a], "\nLuggage Wait\t:\t").concat(luggageWait[a]));
if (pessengerAge[a] < 5) {
    increement = 500;
    console.log("\nYour age is less then equals to 5 your ticket price is\t\t:\tRs.".concat(ticketPrice + increement));
    if (luggageWait[a] > 70) {
        luggagePrice = 2000;
        console.log("You have luggage wait over 70kg Your Luggege price is\t\t:\tRs.".concat(luggagePrice));
    }
    else {
        ("invalid input");
    }
    totPrice = ticketPrice + increement + luggagePrice;
    console.log("\t\t\t\t\t\t\t\t_________________");
    console.log("Total ticket price\t\t\t\t\t\t:\tRs.".concat(totPrice));
}
else if (pessengerAge[a] <= 15) {
    increement = 1000;
    console.log("\nYour age is less then equals to 15 your ticket price is\t\t:\tRs.".concat(ticketPrice + increement));
    if (luggageWait[a] > 70) {
        luggagePrice = 2000;
        console.log("You have luggage wait over 70kg Your Luggege price is\t\t:\tRs.".concat(luggagePrice));
    }
    else {
        ("invalid input");
    }
    totPrice = ticketPrice + increement + luggagePrice;
    console.log("\t\t\t\t\t\t\t\t_________________");
    console.log("Total ticket price\t\t\t\t\t\t:\tRs.".concat(totPrice));
}
else if (pessengerAge[a] <= 50) {
    increement = 2000;
    console.log("\nYour age is less then equals to 50 your ticket price is\t\t:\tRs.".concat(ticketPrice + increement));
    if (luggageWait[a] > 70) {
        luggagePrice = 2000;
        console.log("You have luggage wait over 70kg Your Luggege price is\t\t:\tRs.".concat(luggagePrice));
    }
    else {
        ("invalid input");
    }
    totPrice = ticketPrice + increement + luggagePrice;
    console.log("\t\t\t\t\t\t\t\t_________________");
    console.log("Total ticket price\t\t\t\t\t\t:\tRs.".concat(totPrice));
}
else if (pessengerAge[a] <= 60) {
    increement = 1500;
    console.log("\nYour age is less then equals to 60 your ticket price is\t\t:\tRs.".concat(ticketPrice + increement));
    if (luggageWait[a] > 70) {
        luggagePrice = 2000;
        console.log("You have luggage wait over 70kg Your Luggege price is\t\t:\tRs.".concat(luggagePrice));
    }
    else {
        ("invalid input");
    }
    totPrice = ticketPrice + increement + luggagePrice;
    console.log("\t\t\t\t\t\t\t\t_________________");
    console.log("Total ticket price\t\t\t\t\t\t:\tRs.".concat(totPrice));
}
else
    console.log("please input correct data");
