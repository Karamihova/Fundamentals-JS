function solve(input){

    let cardSequence = input.shift().split(' ');
    let moves = 0;
    let hasWon = false;

    for (let i = 0; i < input.length; i++) {
        
        if(cardSequence.length <= 0){
            console.log(`You have won in ${moves} turns!`);
            hasWon = true;
            break;
        }

        let currInput = input[i];
        if(currInput === "end"){
            break;
        }

        moves++;
        let indexes = currInput.split(' ').map(Number);
        let index1 = indexes.shift();
        let index2 = indexes.shift();

        if(isOutOfBonds(index1) || isOutOfBonds(index2)){

            console.log('Invalid input! Adding additional elements to the board');
            let el = `-${moves}a`;
            //add to the middle twice with splice
            let middleIndex = cardSequence.length / 2;
            cardSequence.splice(middleIndex, 0, el, el);

        } else{

            if(cardSequence[index1] === cardSequence[index2]){

                let el = cardSequence[index1];
                console.log(`Congrats! You have found matching elements - ${el}!`);

                if(index1 < index2){
                    let value = index2;
                    index2 = index1;
                    index1 = value;
                }

                cardSequence.splice(index1, 1);
                cardSequence.splice(index2, 1);
            } else{
                console.log("Try again!");
            }
        }

        function isOutOfBonds (index){

            if(index < 0 || index > input.length - 1){
                return true;
            }

            return false;
        }

    }

    if(!hasWon){
        console.log('Sorry you lose :(');
        console.log(cardSequence.join(' '));
    }
}

solve(  [
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    
    );