function solve(array){

    while(true){

        if(array.length === 1){
            break;
        }

        let condensed = Array(array.length - 1);

        for (let i = 0; i < array.length - 1; i++) {

            condensed[i] = array[i] + array[i + 1];
            
        }

        array = condensed;
    }

    console.log(array[0]);
}

solve([2,10,3]);