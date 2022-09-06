function solve(arr1, arr2){

    let bomb = arr2.shift();
    let power = arr2.shift();

    let index = arr1.indexOf(bomb);

    arr1[index] = 0;

    for (let i = 1; i <= power; i++) {
        
        if(index - i >= 0){
            arr1[index - i] = 0;
        }

        if(index + i <= arr1.length - 1){
            arr1[index + i] = 0;
        }
        
    }

    let sum = 0;
    arr1.forEach(element => {
        sum += element;
    });

    console.log(sum);
    
}

solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    );