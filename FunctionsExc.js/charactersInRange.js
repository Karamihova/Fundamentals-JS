function solve(char1, char2){

    let start = char1.charCodeAt(0);
    let end = char2.charCodeAt(0);

    if(start > end){
        let n = start;
        start = end;
        end = n;
    }

    let arr = [];
    let index = 0;

    for (let i = start + 1; i < end; i++) {
        
        arr[index] = String.fromCharCode(i);
        index++;        
    }

    console.log(arr.join(' '));
}

solve('d',
'a'
);