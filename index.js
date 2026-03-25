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

//JavaScript Prototypal Inheritance-->
//Prototypal Inheritance মানে "একটি অবজেক্ট আরেকটি অবজেক্ট থেকে প্রপার্টি/মেথড নেওয়া"। যেমন সন্তান বাবা-মায়ের থেকে গুণাবলী নেয়।
let Teacher = {
    name: 'Karim',
    Age: 45,
    Id: 8989,  
    teacherPanal (){
        console.log(`Teacher ${this.name}, his age is ${this.Age} and his id is ${this.Id}`);
    }
};

let callTeacher = Object.create(Teacher);
callTeacher.name = 'Rahim';
console.log(callTeacher.name);
console.log(callTeacher.Age);
console.log(callTeacher.Id);
callTeacher.teacherPanal();
