function solve(array){

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < array.length; i++) {

        let num = array[i];
        if(num % 2 === 0){
            evenSum += num;
        } else {
            oddSum += num;
        }
        
    }

    let diff = evenSum - oddSum;
    console.log(diff);
}

solve([3,5,7,9]);