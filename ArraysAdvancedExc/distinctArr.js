function solve(array){

    for (let i = 0; i < array.length; i++) {
        
        let el = array[i];
        for (let j = i + 1; j < array.length; j++) {
            
            let nextEl = array[j];
            if(el === nextEl){
                array.splice(j, 1);
            }
            
        }
        
    }

    console.log(array.join(' '));
}

solve([5, 7, 7, 5]);