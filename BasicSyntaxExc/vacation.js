function solve(peopleCount, peopleType, day){

    let discount = 0;
    let ticketPrice = 0;
    if(peopleType === "Students"){

        if(day === "Friday"){
            ticketPrice = 8.45;
        } else if(day === "Saturday"){
            ticketPrice = 9.8;
        } else if(day === "Sunday"){
            ticketPrice = 10.46;
        }

        if(peopleCount >= 30){
            discount = 15;
        }

    } else if(peopleType === "Business"){

        if(day === "Friday"){
            ticketPrice = 10.9;
        } else if(day === "Saturday"){
            ticketPrice = 15.6;
        } else if(day === "Sunday"){
            ticketPrice = 16;
        }

        if(peopleCount >= 100){
            peopleCount -= 10;
        }

    } else if(peopleType === "Regular"){

        if(day === "Friday"){
            ticketPrice = 15;
        } else if(day === "Saturday"){
            ticketPrice = 20;
        } else if(day === "Sunday"){
            ticketPrice = 22.5;
        }

        if(peopleCount >= 10 && peopleCount <= 20){
            discount = 5;
        }

    }

    let totalSum = peopleCount * ticketPrice;
    totalSum -= totalSum * discount / 100;

    console.log(`Total price: ${totalSum.toFixed(2)}`);

}

solve(30,
    "Students",
    "Sunday");