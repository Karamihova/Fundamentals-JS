function solve(input){

    let arr = [];
    let index = 0;

    input.sort(function(a, b) {return a - b});

    while(true){

        if(input.length <= 0){
            console.log(arr.join(' '));
            break;
        }

        arr[index] = input.pop();
        index++;

        if(input.length > 0){
           arr[index] =  input.shift();
           index++;
        }
    }
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);