// even and odd number function
console.log("------------------This program is for Creating Even Odd Function----------------------");
var num1 = 0;
function EvenOdd(num1) {
    console.log("\nYour entered number is = ".concat(num1));
    while (num1 > 1) {
        num1 = num1 - 2;
        // console.log(num1)
    }
    if (num1 == 0) {
        console.log("And Its a Even Number\n");
    }
    else {
        console.log("And Its a Odd Number\n");
    }
    // now useing new funciong Even Odd we are priting below array
}
var NArray = [10, 20, 30, 11, 22, 33];
var a = NArray.length - 1;
while (a == 0 || a > 0) {
    EvenOdd(NArray[a]);
    a--;
}
