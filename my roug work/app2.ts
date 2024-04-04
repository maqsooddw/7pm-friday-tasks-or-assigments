// this program is for validating strong password
// creating variables
let UserName:string = "Muhammad Ali";
let password:string = "Ab@cd123@4";

// creating function

function StrongPw(UserName:String,password:string){

let upper=password[0].toUpperCase()
let Validate=8
let pcount=0
let scount=0
let Validate2=0
let specialCharacter=["!","@","#","$","%","^","&","(",")"]
// print greetings
console.log(`\n*************This Program is for Validation strong password*************\n`)
console.log(`\nUser Name \t=\t${UserName}`)
console.log(`\nPassword \t=\t${password}`)
// setting condition if password lenth is less the 8
if (password.length < 8 ) { Validate--
  console.log("\nError # 1 Password Lenth is less eight character");
    }
    // settting condtion that 1st character must me a alphabet
    else if (
        password[0]=="1" || password[0]=="2" || password[0]=="3" || password[0]=="4" || password[0]=="5" || password[0]=="6" ||
    password[0]=="7" || password[0]=="8" || password[0]=="9" || password[0]=="0"){
        Validate--
    console.log("\nError#2 Password 1st letter must be an alphabet")
    }
// setting conding that 1st character must me in upper case
    else if (password[0] != upper) {
        Validate--
    console.log(
    "\nError#3 Password 1st letter must be an alphabet and should be in Upper case"
  );
    }
    
    else {
        // setting condition that user must use 2 spection charatcter in password
        let plength = password.length
        // console.log(`at start of else plength${plength}`)
        let difflenth = plength-specialCharacter.length
        // console.log(difflenth)
        if(difflenth>0){
            plength = plength + difflenth 
            // console.log (`plenth addtion ${plength}`)
        }
        
        while(plength>0){
            
            if (password[pcount]==specialCharacter[scount]){
            //    console.log(`at line 37 on if condtion pcount value us ${pcount} and scount value is ${scount} also password ${password[pcount]}==special char ${specialCharacter[scount]}`)
            Validate2++
            plength--
            scount++
            
            }
            else if(password[pcount]!=specialCharacter[scount]){
                // console.log(`at line 44 on else if condtion pcount value is ${pcount} and scount value is ${scount} also password ${password[pcount]} === specialchar ${specialCharacter[scount]}`)
                scount++
            }
            if(specialCharacter.length==scount || password.length==plength){
                // console.log(`\nat line 50 if condtion scount value at ${scount} and pcount value is ${pcount} password = ${password[pcount]} === specialchar ${specialCharacter[scount]} `)
            plength--
                // console.log(`at line 52 plenth pasword lenth is   ${plength}\n`)
            scount=0
            pcount++
            // console.log(`at line pcount value is ${pcount}`)
        } 
        }
        // setting condition that if user entered 2 spection character print password is ready to use
        if (Validate2<2){
            console.log(
            `\nError#4 please at least use two special charater in your password mention below\n${specialCharacter}`)}
            else{
        console.log("\n\nYour entered password is strong and ready to use")}
    }
}

StrongPw("Kashif","Abcd$12#34")