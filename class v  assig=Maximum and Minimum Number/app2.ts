let numbers = [1000,500,3000,50,10000,5000];

function MaxMin(numbers: number[]) {
  if (numbers.length == 0) {
    console.log("function is empty");
  }
 // setting varibales   
  let count = numbers.length - 1;
  let Max: number = numbers[count];
  let Min: number = numbers[count];
 // setting loop   
  while (count > -1) {
     console.log("At Array Location ",count,"Number is\t\t\t",numbers[count],)
     // condition for Maximum Number

      if (numbers[count] > Max) {
      Max = numbers[count];
      
      }
     //  Condition for Minimum Number
      if (numbers[count] < Min) {
        Min = numbers[count];
        
      }
      count--
    }
    // setting out put
    console.log(`\n\nOn above array maximum number is\t=\t${Max}`);
    console.log(`On above array minmum number is\t\t=\t${Min}`);
  }

    //    Using created function MaxMin()

    console.log("\n--------------This program is for Maximum and Minimum Function--------------\n\n")
MaxMin(numbers);
