function solve(array){

    let n = Math.trunc(array.length / 2);
    
    for (let i = 0; i < n; i++) {

        let first = array[i];
        array[i] = array[array.length - (i + 1)];
        array[array.length - (i + 1)] = first;
        
    }

    console.log(array.join(" "));
}

solve(['33', '123', '0', 'dd']);