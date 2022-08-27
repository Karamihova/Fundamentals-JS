function solve(array, n){
    let pair = [];

    for (let i = 0; i < array.length; i++) {
        
        let currEl = array[i];
        for (let j = i + 1; j < array.length; j++) {

            let nextEl = array[j];
            let sum = currEl + nextEl;

            if(sum === n){
                pair.push(currEl, nextEl);
                console.log(pair.join(' '));
                pair = [];
            }
            
        }
        
    }
}

solve([1, 7, 6, 2, 19, 23],
    8
    );