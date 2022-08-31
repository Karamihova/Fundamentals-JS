function solve(array){

    array.sort(function(a, b) {return a - b});
    let smallest = array.slice(0, 2);
    console.log(smallest.join(' '));
}

solve([30, 15, 50, 5]);