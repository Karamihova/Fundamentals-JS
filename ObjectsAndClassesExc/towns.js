function solve(array){

    class Town{
        constructor(town, latitude, longtitude){
            this.town = town;
            this.latitude = latitude;
            this.longtitude = longtitude;
        }
    }

    const towns = [];
    for (let i = 0; i < array.length; i++) {
        
        let [town, latitude, longtitude] = array[i].split(' | ');
        let newTown = new Town(town, Number(latitude), Number(longtitude));
        towns.push(newTown);
    }

    for (let i = 0; i < towns.length; i++) {
        
        console.log(`{ town: '${towns[i].town}', latitude: '${towns[i].latitude.toFixed(2)}', longitude: '${towns[i].longtitude.toFixed(2)}' }`);
        
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);