function solve(n){

    let str = n.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < str.length; i++) {
        
        let num = Number(str[i]);
        if(num % 2 === 0){
            evenSum += num;
        } else{
            oddSum += num;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);