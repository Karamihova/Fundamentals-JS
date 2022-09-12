function solve(array){

    class Cat{

        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    const cats = [];

    for (let i = 0; i < array.length; i++) {
        
        let catArray = array[i].split(' ');
        let catName = catArray.shift();
        let catAge = Number(catArray.shift());

       cats.push(new Cat(catName, catAge));
        
    }

    for(let cat in cats){
        cats[cat].meow();
    }

}

solve(['Mellow 2', 'Tom 5']);