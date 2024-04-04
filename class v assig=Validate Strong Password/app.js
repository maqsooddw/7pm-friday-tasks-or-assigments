// this program is for validating strong password
// creating variables
var UserName = "Muhammad Ali";
var password = "Ab@cd@4";
// creating function
function StrongPw(UserName, password) {
    var upper = password[0].toUpperCase();
    var Validate = 8;
    var pcount = 0;
    var scount = 0;
    var Validate2 = 0;
    var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "(", ")"];
    var char = 0;
    // print greetings
    console.log("\n*************This Program is for Validation strong password*************\n");
    console.log("\nUser Name \t=\t".concat(UserName));
    console.log("\nPassword \t=\t".concat(password));
    // setting condition if password lenth is less the 8
    if (password.length < 8) {
        Validate--;
        console.log("\nError # 1 Password Lenth is less eight character");
    }
    // settting condtion that 1st character must me a alphabet
    else if (password[0] == "1" ||
        password[0] == "2" ||
        password[0] == "3" ||
        password[0] == "4" ||
        password[0] == "5" ||
        password[0] == "6" ||
        password[0] == "7" ||
        password[0] == "8" ||
        password[0] == "9" ||
        password[0] == "0") {
        Validate--;
        console.log("\nError#2 Password 1st letter must be an alphabet");
    }
    // setting conding that 1st character must me in upper case
    else if (password[0] != upper) {
        Validate--;
        console.log("\nError#3 Password 1st letter must be an alphabet and should be in Upper case");
    }
    else {
        // created a sub funchtion for searchin character
        function SearchCharacter(specialCharacter) {
            // setting condition that user must use 2 spection charatcter in password
            var plength = password.length;
            // console.log(`at start of else plength${plength}`)
            var difflenth = password.length - specialCharacter.length;
            // console.log(difflenth)
            if (difflenth > 0) {
                plength = plength + difflenth;
                // console.log (`plenth addtion ${plength}`)
            }
            while (plength > -1) {
                if (password[pcount] == specialCharacter[scount]) {
                    // console.log(plength,"= plenth")
                    // console.log(`at line 37 on if condtion pcount value us ${pcount} and scount value is ${scount} also password ${password[pcount]}==special char ${specialCharacter[scount]}`)
                    Validate2++;
                    plength--;
                    scount++;
                }
                else if (password[pcount] != specialCharacter[scount]) {
                    // console.log(plength,"= plenth")
                    // console.log(`at line 44 on else if condtion pcount value is ${pcount} and scount value is ${scount} also password ${password[pcount]} === specialchar ${specialCharacter[scount]}`)
                    scount++;
                }
                if (specialCharacter.length == scount || password.length == plength) {
                    // console.log(`\nat line 50 if condtion scount value at ${scount} and pcount value is ${pcount} password = ${password[pcount]} === specialchar ${specialCharacter[scount]} `)
                    plength--;
                    // console.log(`at line 52 plenth pasword lenth is   ${plength}\n`)
                    scount = 0;
                    pcount++;
                    // console.log(`at line pcount value is ${pcount}`)
                }
            }
            // setting condition that if user entered 2 spection character print password is ready to use
            if (Validate2 < 2) {
                if (specialCharacter[0] == "!") {
                    console.log("\nError#4 please at least use two special charater in your password mention below\n\t".concat(specialCharacter));
                }
                if (specialCharacter[0] == "0") {
                    console.log("\nError#5 please at least use two numeric charater in your password mention below\n\t".concat(specialCharacter));
                }
            }
            else {
                char++;
            }
        }
        // searching special character
        SearchCharacter(specialCharacter);
        // replacing specialcharacter array with numberic 
        specialCharacter.splice(0, 9, "0", "1", "2", "3", "4", "5", "6", "7", "8");
        specialCharacter.push("9");
        // console.log(specialCharacter)
        // console.log(pcount,"=pcount ",scount," =scount")
        // console.log(Validate2)
        // setting variable special characher count , password count and validation count to zero for searching numberic value 
        scount = 0;
        pcount = 0;
        Validate2 = 0;
        // console.log(pcount,"=pcount ",scount," =scount")
        // seaching numeric value , the password must contain at least 2 numeric value
        SearchCharacter(specialCharacter);
        // console.log(Validate2)
        // console.log(char)
        // printing after validation that your password is ready to use
        if (char >= 2) {
            console.log("\n\nYour entered password is strong and ready to use");
            console.log("\n******************This program is made by Maqsood Ahmed******************");
        }
    }
}
// giving value to fuction 
StrongPw("Kashif", "Ab8d$1a$");
