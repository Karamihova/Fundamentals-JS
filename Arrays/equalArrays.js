function solve(arr1, arr2){

    let sum = 0;
    let areIdentical = true;
    let index = 0;
    for (let i = 0; i < arr1.length; i++) {

        let a = Number(arr1[i]);
        let b = Number(arr2[i]);

        if(a === b){
            sum += a;
        } else{
            areIdentical = false;
            index = i;
            break;
        }
    }

    if(areIdentical){
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else{
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }

}

solve(['1','2','3','4','5'], ['1','2','4','4','5']);