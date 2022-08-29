function solve(a, b, c){

    isPositive = false;

    if(a < 0){

        if(b < 0 && c > 0){
            isPositive = true;
        } else if(b > 0 && c < 0){
            isPositive = true;
        }

    } else{

        if(b > 0 && c > 0){
            isPositive = true;
        }

        if(b < 0 && c < 0){
            isPositive = true;
        }
    }

    if(isPositive){
        console.log("Positive");
    } else{
        console.log("Negative");
    }
}

solve(-5,
    1,
    1
   );