function solve(input){

    let guestsList = [];

    for (let i = 0; i < input.length; i++) {
        
        let currLine = input[i].split(' ');
        let name = currLine[0];

        if(currLine.length === 3){

            if(!guestsList.includes(name)){
                guestsList.push(name);
            } else{
                console.log(`${name} is already in the list!`)
            }

        } else {

            if(guestsList.includes(name)){
                let index = guestsList.indexOf(name);
                guestsList.splice(index, 1);

            } else{
                console.log(`${name} is not in the list!`);
            }

        }
        
    }

    guestsList.forEach(myFunction);

    function myFunction(value){
        console.log(value);
    }
}

solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

);