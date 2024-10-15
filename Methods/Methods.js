const person = {
    name: "wawang",
    age: 20,
    gender: "Male"
   }
   //Process and Output
   console.log("Hi uy!");
   console.log("Name: " + person.name);
   console.log("Age: "  +person.age);
   console.log("Gender: " + person.gender);  
   console.log("~~~~~~~~~~~~~~~~~~~~~~~~");
   //Class named Person
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    //Solution 1: Display via console.log
    displayInfo() { //Process and Output
       console.log("Name: " + this.name);
       console.log("Age: "  + this.age);
       console.log("Gender: " + this.gender);
    }
    //Solution 2: Display via HTML
    displayViaHTML() {
        const personElement = document.getElementById('person1');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Gender:</strong> ${this.gender}
        `;
    }
}
// Create an instance of Person
const person1 = new Person("Oscar Jay Ellevera", 19, "Male");
//Calls the method
person1.displayInfo();