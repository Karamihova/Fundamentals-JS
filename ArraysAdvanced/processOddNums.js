function solve(array){

    let newArray = [];
    let index = 0;

    for (let i = 0; i < array.length; i++) {

        if(i % 2 !== 0){
            newArray[index] = array[i];
            index++;
        }
        
    }

    let doubledArr = newArray.map(myFunction);

    function myFunction(value){
        return value * 2;
    }

    doubledArr.reverse();
    console.log(doubledArr.join(' '));
}

solve([3, 0, 10, 4, 7, 3]);