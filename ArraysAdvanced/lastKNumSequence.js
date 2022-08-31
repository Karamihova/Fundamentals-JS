function solve(n, k){

    let array = [];
    array[0] = 1;

    for (let i = 1; i < n; i++) {

        let diff = i - k;
        let sum = 0;

        if(diff >= 0){

            for (let j = i - 1; j >= diff; j--) {
                sum += array[j];
                
            }

        } else{
            array.forEach(myFunction);

            function myFunction(item){
                sum += item;
            }
        }

        array[i] = sum;

    }

    console.log(array.join(' '));
}

solve(8, 2);

