// even and odd number function
let num1 = [10, 20, 30, 40, 11, 1010, 1011, 1120];
let a = num1.length - 1;
while (a == 0 || a > 0) {
    console.log(`In this array at location ${a} your number is ${num1[a]}`)
  let b = a;
  while (num1[a] > 1 || num1[a] > 1) {
    num1[a] = num1[a] - 2;
    // console.log(num1[a])
  }
  if (num1[a] == 0) {
    console.log(
      `And its a Even Number`
    );
  } else {
    console.log(
      `And its a Odd Number`
    );
  }
  a--;
}
