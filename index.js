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