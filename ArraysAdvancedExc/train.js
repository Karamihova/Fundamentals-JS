function solve(input){

    let wagons = input
                    .shift()
                    .split(' ')
                    .map(Number);

    let maxCapacity = Number(input.shift());
    
    for (let i = 0; i < input.length; i++) {

        let [command, number] = input[i].split(' ');

        if(command === 'Add'){

            wagons.push(Number(number));
            
        } else{

            let people = Number(command);
            for (let j = 0; j < wagons.length; j++) {
                
                if(wagons[j] + people <= maxCapacity){
                    wagons[j] += people;
                    break;
                }
                
            }
        }
        
    }

    console.log(wagons.join(' '));
                    
}

solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);