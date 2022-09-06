function solve(array){

    const twoCriteriaSort = (a, b) =>
                a.length - b.length || a.localeCompare(b);

    array.sort(twoCriteriaSort);
    console.log(array.join('\n'));
}

solve(['alpha', 'beta', 'gamma']);