function solve(input){
    
    let array = input
                .shift()
                .split(' ')
                .map(Number);

    
                
    //destructuring
    for (let i = 0; i < input.length; i++) {
        
        let [command, firstNum, secondNum] = input[i].split(' ');

        switch (command) {
            case "Add":
                array.push(Number(firstNum));
                break;
            case "Remove":
                array = array.filter(el => el !== Number(firstNum));
                break;
            case "RemoveAt":
                array.splice(Number(firstNum), 1);
                break;
            case "Insert":
                array.splice(Number(secondNum), 0, Number(firstNum));
                break;
            default:
                break;
        }

        
    }

    console.log(array.join(' '));
}

solve(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
);