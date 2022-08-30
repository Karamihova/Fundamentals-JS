function findSmallestNum(a, b, c){

    let array = [a, b, c];
    let smallest = Math.min.apply(null, array);
    console.log(smallest);
}

findSmallestNum(2, 8, 4);