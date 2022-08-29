function solve(product, quantity){

    let productPrice = 0;
    if(product === "coffee"){
        productPrice = 1.5;
    } else if (product === "water"){
        productPrice = 1;
    } else if (product === "coke"){
        productPrice = 1.4;
    } else if(product === "snacks"){
        productPrice = 2;
    }

    let totalSum = productPrice * quantity;
    console.log(`${totalSum.toFixed(2)}`);
}

solve("fee", 2);