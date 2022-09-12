function solve(arr1, arr2){

    class Product{
        constructor(name, quantity){
            this.name = name;
            this.quantity = quantity;
        }
    }

    const stockProducts = [];
    for (let i = 0; i < arr1.length; i += 2) {
        
        let name = arr1[i];
        let quantity = Number(arr1[i + 1]);

        let stockProduct = new Product(name, quantity);
        stockProducts.push(stockProduct);
        
    }

    for (let i = 0; i < arr2.length; i += 2) {
        
        let name = arr2[i];
        let quantity = Number(arr2[i + 1]);

        if(stockProducts.some((i) => i.name === name)){
            let productInStock = stockProducts.find((i) => i.name === name);
            productInStock.quantity += quantity;
        } else{
            let newProduct = new Product(name, quantity);
            stockProducts.push(newProduct);
        }
        
    }

    stockProducts.forEach((i) => console.log(`${i.name} -> ${i.quantity}`));
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );