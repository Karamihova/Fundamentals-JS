function solve(a, b){

    let num1 = factorial(a);
    let num2 = factorial(b);

    let output = num1 / num2;
    console.log(`${output.toFixed(2)}`);

    function factorial(n){

        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
            
        }

        return result;
    }
}

solve(6, 2);