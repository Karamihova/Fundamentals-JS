function solve(array){

    let listSorted = array.sort();
    listSorted.forEach(myFunction);

    function myFunction(value, index, array){
            index++;
        	return console.log(`${index}.${value}`);
    }
}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);