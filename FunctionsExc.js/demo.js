function solve(){
    let password = "Ts1veti134";
    let  numberPattern = /\d+/g;
    let digits = password.match(numberPattern);
    console.log(digits.length);
}

solve();