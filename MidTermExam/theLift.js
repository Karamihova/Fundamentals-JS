function solve(input){

    let peopleCount = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);


    for (let i = 0; i < wagons.length; i++) {

        if(peopleCount === 0){
            break;
        }
        
        let wagonPeople = wagons[i];
        let capacity = 0;

        if(wagonPeople < 4){

            capacity = 4 - wagonPeople;
        }

        if(peopleCount - capacity < 0){

            wagons[i] = wagonPeople + peopleCount;
            peopleCount = 0;

        } else{
            peopleCount -= capacity;
            wagons[i] = wagonPeople + capacity;
        }
        
    }


    let fullCapacity = wagons.length * 4;
    let currCapacity = 0;
    wagons.forEach(element => {
        currCapacity += element;
    });

    if(fullCapacity > currCapacity){
        console.log('The lift has empty spots!');
    }

    if(peopleCount > 0){
        console.log(`There isn't enough space! ${peopleCount} people in a queue!`);
    }

    console.log(wagons.join(' '));
}

solve([
    "15",
    "0 0 0 0 0"
   ]
   );