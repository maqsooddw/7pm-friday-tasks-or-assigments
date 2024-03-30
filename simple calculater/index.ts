import inquirer from "inquirer";

let total = 0
// first prompt
const answer = await inquirer.prompt([
  { message: "Enter first  number", type: "number", name: "firstNumber" },
  { message: "Enter Second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// console.log(answer);


//  conditional statement
// addtional first prompt
if (answer.operator === "Addition") {
total=answer.firstNumber + answer.secondNumber
  console.log(`\nTotal=${total}\n`);
   const cont = await inquirer.prompt([
    {
       message: "\nDo you want to continue", 
       type: "list", 
       name: "operator",
      choices:["Yes","No"] },]);if (cont.operator==="Yes")
      {
        // after yes addtional 2nd prompt
        const answer = await inquirer.prompt([
          { message: "Enter third  number", type: "number", name: "thirdNumber" },
      
          {
            message: "Select one of the operators to perform operation",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
          },
        ]);
        
        // nested if else 2nd condition 
        if (answer.operator === "Addition") {
          total=total + answer.thirdNumber
            console.log(`\nTotal=${total}\n`);}

            else if  (answer.operator === "Suberaction") {
              total=total - answer.thirdNumber
                console.log(`\nTotal=${total}\n`);}

                else if  (answer.operator === "Multiplication") {
                  total=total * answer.thirdNumber
                    console.log(`\nTotal=${total}\n`);}

                    else if  (answer.operator === "Division") {
                      total=total / answer.thirdNumber
                        console.log(`\nTotal=${total}\n`);}
            
      }
      
}
else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
}
console.log("Thank for using simple calculater")