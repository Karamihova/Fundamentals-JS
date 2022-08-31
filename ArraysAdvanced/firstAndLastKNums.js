function solve(array){

    let k = array[0];
    let newArray = array.slice(1);

    let first = newArray.slice(0, k);
    let index = newArray.length - k;
    let last = newArray.splice(index, k);

    console.log(first.join(' '));
    console.log(last.join(' '));
}


solve([2,
    6, 7, 8, 9]
   );

