function solve(num){


    let numString = num.toString();
    let sum = 0;

    for (let i = 0; i < numString.length; i++) {
        
        sum += Number(numString[i]);
        
    }

    let sumString = sum.toString();
    let isAmazing = sumString.includes('9');
    
    console.log(isAmazing ? `${num} Amazing? True` :
                            `${num} Amazing? False`);
}

solve(999);