function solve(num){
    let sum = 0;

    while(true){

        if(num <= 0){
            break;
        }

        sum += num % 10;
        num = parseInt(num / 10);
    }

    console.log(sum);
}

solve(543);