function solve(n, array){

    let str = "";
    for (let i = n - 1; i >= 0; i--) {
        str += `${array[i]} `;
        
    }

    console.log(str);
}

solve(3, [10, 20, 30, 40, 50]);