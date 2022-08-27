function solve(array){

    let originalArrSum = 0;
    let modifiedArrSum = 0;

    for (let i = 0; i < array.length; i++) {

        let num = array[i];
        originalArrSum += num;

        if(num % 2 === 0){
            num += i;
        } else{
            num -= i;
        }

        modifiedArrSum += num;
        array[i] = num;
        
    }

    console.log(array);
    console.log(originalArrSum);
    console.log(modifiedArrSum);

}

solve([5, 15, 23, 56, 35]);