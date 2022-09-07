function solve(arr1, arr2){

    let bomb = arr2.shift();
    let power = arr2.shift();

    for (let j = 0; j < arr1.length; j++) {
        
        if(arr1[j] === bomb){
            let indexOfBomb = j;
            arr1[indexOfBomb] = 0;

            let leftStartIndex = indexOfBomb - power;
            for (let i = 0; i < power; i++) {
                
                if(leftStartIndex >= 0){
                    arr1[leftStartIndex] = 0;
                }

                leftStartIndex++;
            }

            let rightStartIndex = indexOfBomb + power;
            for (let i = 0; i < power; i++) {
                
                if(rightStartIndex <= arr1.length - 1){
                    arr1[rightStartIndex] = 0;
                }
                
                rightStartIndex--;

            }
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