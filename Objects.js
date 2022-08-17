var object2 = { 
    users: ["Alex", "James", "Mohammed"], 
    professions: { 
        alex: "software engineer", 
        james: "lawyer", 
        mohammed: "technical writer" 
    } 
}; 
console.log(object2.users); //['Alex', 'James', 'Mohammed'] 
console.log(object2.professions); //{alex: 'software engineer', james: 'lawyer', mohammed: 'technical writer'}
\


// javascript code demonstrating a simple object
var school = {
	name: 'Vivekananda School',
	location : 'Delhi',
	established : '1971',
	displayInfo : function(){
		console.log(`${school.name} was established
			in ${school.established} at ${school.location}`);
	}
}
school.displayInfo();


//scope.js
var a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
var b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible


var person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(person.firstName);
console.log(person.lastName);
