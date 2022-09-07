function solve(input){

    let sumWithoutTaxes = 0;
    let sumTaxes = 0;
    let index = 0;
    let isSpecial = false;

    while(true){

        let currInput = input[index];
        if(currInput === 'special' || currInput === 'regular'){

            if(currInput === 'special'){
                isSpecial = true;
            }

            break;
        }

        let compPrice = Number(currInput);
        if(compPrice > 0){
            sumWithoutTaxes += compPrice;
            sumTaxes += (compPrice * 20 / 100);
        } else{
            console.log('Invalid price!');
        }

        index++;
    }

    let totalSum = sumWithoutTaxes + sumTaxes;

    if(totalSum <= 0){
        console.log('Invalid order!');
    } else{

        if(isSpecial){
            totalSum -= (totalSum * 10 / 100);
        }
        
        console.log('Congratulations you\'ve just bought a new computer!');
        console.log(`Price without taxes: ${sumWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${sumTaxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalSum.toFixed(2)}$`);
    }
    
}

solve(([
    'regular'
    ])
    );