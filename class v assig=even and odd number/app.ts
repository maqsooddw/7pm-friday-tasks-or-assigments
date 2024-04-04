// even and odd number function
console.log("------------------This program is for Creating Even Odd Function----------------------")
let num1:number=0
function EvenOdd(num1:number)
{
  console.log(`\nYour entered number is = ${num1}`)
  while (num1 > 1) 
  {
    num1 = num1 - 2;
    // console.log(num1)
  }
  if (num1 == 0) {
    console.log(
      `And Its a Even Number\n`
    );
  } else {
    console.log(
      `And Its a Odd Number\n`
    );
  }
  // now useing new funciong Even Odd we are priting below array
}
  let NArray=[100,200,300,111,222,333];
  let a=NArray.length-1
  while(a==0 || a>0) 
    {

EvenOdd(NArray[a])
a--   
}

