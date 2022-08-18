function solve(dayTime, age){

    let ticketPrice = 0;
    let isAgeValid = true;

    if(age >= 0 && age <= 18){

        if(dayTime === "Weekday"){
            ticketPrice = 12;
        } else if(dayTime === "Weekend"){
            ticketPrice = 15;
        } else if(dayTime === "Holiday"){
            ticketPrice = 5;
        }

    } else if(age > 18 && age <= 64){

        if(dayTime === "Weekday"){
            ticketPrice = 18;
        } else if(dayTime === "Weekend"){
            ticketPrice = 20;
        } else if(dayTime === "Holiday"){
            ticketPrice = 12;
        }

    } else if (age > 64 && age <= 122){

        if(dayTime === "Weekday"){
            ticketPrice = 12;
        } else if(dayTime === "Weekend"){
            ticketPrice = 15;
        } else if(dayTime === "Holiday"){
            ticketPrice = 10;
        }

    } else {
        console.log("Error!")
        isAgeValid = false;
    }

    if(isAgeValid){
        console.log(`${ticketPrice}$`);
    }
}