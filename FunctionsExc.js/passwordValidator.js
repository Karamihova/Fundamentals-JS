function solve(password){

    let isValid = true;

    if(password.length < 6 || password.length > 10){
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }

    function onlyLettersAndDigits(str){
        return /^[A-Za-z0-9]*$/.test(str);
    }

    if(!onlyLettersAndDigits(password)){
        isValid = false;
        console.log("Password must consist only of letters and digits");
    }


    let numberPattern = /\d+/g;
    let digits = password.match(numberPattern);
    let len = "";

    if(digits !== null){

        for (let i = 0; i < digits.length; i++) {
            len += digits[i];
            
        }
    }
    

    if(digits === null || len.length < 2){
        isValid = false;
        console.log(`Password must have at least 2 digits`);
    }

    if(isValid){
        console.log('Password is valid');
    }

}

solve('Pa$s$s');