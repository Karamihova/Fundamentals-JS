function solve(character){

    let asciiNum = character.charCodeAt(0);
    let charCase = "";

    if(asciiNum >= 65 && asciiNum <= 90){
        charCase = "upper-case";
    } else if (asciiNum >= 97 && asciiNum <= 122){
        charCase = "lower-case";
    }

    let a = String.fromCharCode(122);


    console.log(a);

}

solve('a');