function solve(firstNum, secondNum, thirdNum){

    let sum = firstNum + secondNum + thirdNum;
    let type = sum % 1 === 0 ? "Integer" : "Float";

    console.log(`${sum} - ${type}`);
}

solve(100, 200, 303);