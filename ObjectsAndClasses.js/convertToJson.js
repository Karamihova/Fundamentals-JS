function solve(firstName, lastName, hairColor){

    const person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    };

    let jsonStr = JSON.stringify(person);
    console.log(jsonStr);
}

solve('Tsvetelina', 'Karamihova', 'Dark blonde');