function solve(array){

    class Movie{

        constructor(name){
            this.name = name;
        }

        set direct(x){
            this.director = x;
        }

        set onDate(x){
            this.date = x;
        }
    }

    const movies = [];
    for (let i = 0; i < array.length; i++) {

       let command = array[i].split(' ');
        if(command.includes('addMovie')){

            let movieName = command.slice(1, command.length).join(' ');
            let movie = new Movie(movieName);
            movies.push(movie);

        } else if(command.includes('directedBy')){

            let movieName = command.slice(0, command.indexOf('directedBy')).join(' ');
            if(movies.some((i) => i.name === movieName)){
                let currMovie = movies.find((i) => i.name === movieName);
                let director = command.slice(command.indexOf('directedBy') + 1, command.length).join(' ');
                currMovie.director = director;
            }

        } else if(command.includes('onDate')){

            let movieName = command.slice(0, command.indexOf('onDate')).join(' ');
            if(movies.some((i) => i.name === movieName)){
                let currMovie = movies.find((i) => i.name === movieName);
                let date = command.slice(command.indexOf('onDate') + 1, command.length).join(' ');
                currMovie.date = date;
            }

        }
    }

    //let filteredMovies = movies.filter((i) => i.date !== write-only && i.director !== write-only);
    for(let movie in movies){
        if(Object.keys(movies[movie]).length === 3){
            console.log(JSON.stringify(movies[movie]));
        }
    }
    

}

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    );