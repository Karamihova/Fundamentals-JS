function solve(array){
    let topIntegers = [];

    for (let i = 0; i < array.length; i++) {
        let currNum = array[i];
        let isBigger = true;

        if(i + 1 !== array.length){

            for (let j = i+1; j < array.length; j++) {
                if(currNum < array[j]){
                    isBigger = false;
                    break;
                }
                
            }
        } 

        if(isBigger){

            if(!topIntegers.includes(currNum)){

                topIntegers.push(currNum);

            }
            
        }
        
    }

    console.log(topIntegers.join(' '));
}

solve([1, 4, 3, 2]);