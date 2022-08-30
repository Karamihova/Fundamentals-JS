function solve(a, b, c){
    let sum = (a,b) => {return a + b};

    let subtract = function(x, c) {
        return x - c;
    };

    let result = subtract(sum(a, b), c);
    console.log(result);
}

solve(1, 2, 3);