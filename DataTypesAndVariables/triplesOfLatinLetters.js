function solve(n){

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {

                let let1 = String.fromCharCode(97 + i);
                let let2 = String.fromCharCode(97 + j);
                let let3 = String.fromCharCode(97 + k);

                console.log(`${let1}${let2}${let3}`);
            }

        }
        
    }
}

solve(3);