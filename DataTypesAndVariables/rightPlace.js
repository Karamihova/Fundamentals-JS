function solve(str, char, result){
    let strRes = str.replace('_', char);
    let output = strRes === result ? "Matched" : "Not Matched";
    console.log(output);
}

solve('Str_ng', 'i', 'String');