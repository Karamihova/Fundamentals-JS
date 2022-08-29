function solve(grade){

    let gradeText;

    if(grade < 3.00){
        gradeText = "Fail (2)";
    } else if(grade >= 3.00 && grade < 3.5){
        gradeText = "Poor";
    } else if(grade >= 3.5 && grade < 4.5){
        gradeText = "Good";
    } else if(grade >= 4.5 && grade < 5.5){
        gradeText = "Very good";
    } else if(grade >= 5.5){
        gradeText = "Excellent";
    }

    if(grade < 3.00){
        console.log(gradeText);
    } else{
        console.log(`${gradeText} (${grade.toFixed(2)})`);
    }
}

solve(2.99);