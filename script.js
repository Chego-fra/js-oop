// -------------------------------------------------------------------first method
const students = {
	firstName : "Francis  ",
	lastName : "Chego",
}
console.log(students.firstName + students.lastName);


// -----------------------------first method with greeting
const employees = {
	firtName :  "Francis ",
	age : "20",

	greet:function(){
		return("hello my name is " + this.firtName + "and my age is " + this.age)
	}
}

	console.log(employees.greet());


 // -------------------------------------------------------------------second method
 function Person(name, age){
    this.name = name;
    this.age = age;
}

let person1 = new Person("Francis ", 20);
console.log(person1.name + person1.age);


// -------------------------------------------------------------------third  method  use class
class People{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
}
let newPerson = new  People("Francis ", 20);
console.log(newPerson.name + newPerson.age);
