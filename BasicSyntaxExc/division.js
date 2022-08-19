function solve(num){

    let div = [10, 6, 3, 2];
    let m = div.length;

    for (let i = 0; i <= m; i++) {
        
        if(i === m){
            console.log("Not divisible");
            break;
        }

        let n = div.shift();

        if(num % n === 0){
            console.log(`The number is divisible by ${n}`);
            break;
        }  
        
    }

}

solve(1643);