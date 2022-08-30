function solve(percent){

    let n = percent / 10;
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr[i] = "%";
        
    }

    if(arr.length < 10){
        let index = arr.length;
        for (let i = index; i < 10; i++) {
            arr[i] = ".";
            
        }

        console.log(`${percent}% [${arr.join('')}]`);
        console.log(`Still loading...`);

    } else if(arr.length === 10){
        console.log(`${percent}% Complete!`);
        console.log(`[${arr.join('')}]`);
    }


}

solve(20);