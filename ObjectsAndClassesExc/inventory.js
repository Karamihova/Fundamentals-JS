function solve(array){

    class Hero{
        constructor(name, level, items){
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    let heroes = [];
    for (let i = 0; i < array.length; i++) {

        let [name, level, items] = array[i].split(' / ')
        let itemsArr = items.split(', ');

        let hero = new Hero(name, Number(level), itemsArr);
        heroes.push(hero);
        
    }

    heroes.sort(function(a, b) {return a.level - b.level});

    for(let x in heroes){
        console.log(`Hero: ${heroes[x].name}`);
        console.log(`level => ${heroes[x].level}`);
        console.log(`items => ${heroes[x].items.join(', ')}`);
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );