function solve(input){
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    input -= 1;
    
    if(days[input] === undefined){
        console.log(`Invalid day!`)
    } else{
        console.log(days[input]);
    }
   
}

solve(10);