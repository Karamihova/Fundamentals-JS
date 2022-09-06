function solve(input){

    let fromSmallest = input;
    let fromBiggest = input;

    let sortedFromSmallest = fromSmallest.sort(function(a, b) {return a - b});
    let sortedFromBiggest = fromBiggest.sort(function(a, b) {return b - a});

    let sortedArr = [];

    for (let i = 0; i < input.length; i++) {
        
        let n = '';

        if(i % 2 === 0){
             n = sortedFromBiggest.shift();
            
        } else{
            n = sortedFromSmallest.shift();
        }

        sortedArr.push(n);
        
    }

    console.log(sortedArr.join(' '));
}

solve([1, 8, 3, 7, 10])