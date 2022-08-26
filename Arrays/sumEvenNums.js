function solve(array){

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       let currNum = Number(array[i]);
       if(currNum % 2 === 0){
        sum += currNum;
       }
        
    }

    console.log(sum);
}

solve(['1','2','3','4','5','6']);