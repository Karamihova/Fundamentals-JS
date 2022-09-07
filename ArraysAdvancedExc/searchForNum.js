function solve(arr1, arr2){

    let numsCount = arr2.shift();
    let numsToBeRemovedCount = arr2.shift();
    let numToBeSearched = arr2.shift();

    let newArr = arr1.slice(0, numsCount);
    newArr.splice(0, numsToBeRemovedCount);

    let occurances = 0;
    for (let i = 0; i < newArr.length; i++) {

        if(newArr[i] === numToBeSearched){
            occurances++;
        }
        
    }

    console.log(`Number ${numToBeSearched} occurs ${occurances} times.`);
}

solve([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    );