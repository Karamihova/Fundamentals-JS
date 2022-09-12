function solve(array){

    class Employee{
        constructor(name, isMarried){
            this.name = name;
            this._isMarried = isMarried;
        }

        get personalNumber(){
            return this.name.length;
        }

        set isMarried(val) {
            this._isMarried = val;
        }
    }

    let employee = new Employee("Stefan", false);
    employee.isMarried = true;
    console.log(employee.isMarried);
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );