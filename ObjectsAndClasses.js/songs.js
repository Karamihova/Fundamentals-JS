function solve(array){

    let songsCount = Number(array.shift());
    let favType = array.pop();

    class Song{

        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];

    for (let i = 0; i < songsCount; i++) {
        
        let [type, name, time] = array[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
        
    }

    if(favType === 'all'){

        songs.forEach(
            (i) => console.log(i.name)
            );

    } else{

        let filteredSongs = songs.filter((i) => i.typeList === favType);
        filteredSongs.forEach((i) => console.log(i.name));
    }
}

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    );