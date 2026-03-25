function myFunction  (Name, age, id) {
    this.name = Name;
    this.Age = age;
    this.Id = id;
}
myFunction.prototype.getFullname = function(){
    return this.name + ' ' + this.Id;
}
let std = new myFunction ('Nazib', 9007);
console.log(std.getFullname());
//Declear a class and inside a declear a constructor....
class Car {
     constructor (name, model) {
        this.name = name;
        this.model = model;
    }
}
let car1 = new Car ('Tayota', 'T23O98');
console.log(car1.name +' '+car1.model);
