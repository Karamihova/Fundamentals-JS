function solve(bookPages, readPagesPerHour, daysToRead){

    let totalHoursToRead = bookPages / readPagesPerHour;
    let pagesPerDay = totalHoursToRead / daysToRead;

    console.log(pagesPerDay);
}

solve(432,
    15 ,
    4 
    );