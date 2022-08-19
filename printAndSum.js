function solve(n, m){

    let sum = 0;
    let str = "";

    for (let i = n; i <= m; i++) {
        
        str += `${i} `;
        sum += i;
        
    }

    console.log(str);
    console.log(`Sum: ${sum}`);
}

solve(5,10);