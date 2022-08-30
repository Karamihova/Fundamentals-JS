function solve(array){

    for (let i = 0; i < array.length; i++) {

        let num = array[i];
        let str = num.toString();
        let isPalindrome = true;
        let len = str.length;

        if(str.length % 2 !== 0){
            len = Math.trunc(len / 2);
        } 

        for (let j = 0; j < len; j++) {

            let a = str[j];
            let b = str[str.length - (j + 1)];
            if(a !== b){
                isPalindrome = false;
                break;
            }
            
        }

        console.log(isPalindrome);
        
    }
}

solve([123,323,421,121]);