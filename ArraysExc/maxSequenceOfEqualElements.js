function solve(array){

    let longestSequence = [];
    let leftMostIndex = 0;

    for (let i = 0; i < array.length; i++) {

        let currEl = array[i];
        let currSequence = [currEl];

        for (let j = i + 1; j < array.length; j++) {
            
            let nextEl = array[j];

            if(currEl === nextEl){
                currSequence.push(nextEl);
            } else{
                break;
            }
            
        }

        if(currSequence.length > longestSequence.length){

            longestSequence = [];

            for (let j = 0; j < currSequence.length; j++) {
                longestSequence.push(currSequence[j]);
                
            }
        // } else if (currSequence.length === longestSequence.length){
        //     if(i < leftMostIndex){
        //         leftMostIndex = i;
        //     }

         }
        
    }

    console.log(longestSequence.join(' '));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);