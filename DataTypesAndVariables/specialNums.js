function solve(num){

    for (let i = 1; i <= num; i++) {
        let currNum = i;
        let isSpecial = "";
        let sum = 0;

        while(true){

            if(currNum <= 0){
                break;
            }

            sum += currNum % 10;
            currNum = parseInt(currNum / 10);
        }

        if(sum === 5 || sum === 7 || sum === 11){
            isSpecial = "True";
        } else{
            isSpecial = "False";
        }

        console.log(`${i} -> ${isSpecial}`);
        
    }
}

solve(20);