function solve(num, n){

    if(n > 15){
        n = 15;
    }
    
    num = num.toFixed(n);
    num = parseFloat(num);
    console.log(`${num}`);

}

solve(3.1415926535897932384626433832795,2);