////////////////////////////////Lecture: let and const


//ES5
/*
var name5 = 'John Mendes';
var age5 = 31;
name5 = 'John Stark';
console.log(name5);

// //ES6
const name6 = 'John Mendes';
let age6 = 31;
name6 = 'John Start';
console.log(name6);
*/

/*Var variables are function scoped whereas const/let variables
are block scoped
*/

/*
//ES5
function driversLicense5(passedTest) {
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1987;
    }
    console.log(firstName + ', born in ' + yearOfBirth);
}

driversLicense5(true);


//ES6
function driversLicense6(passedTest) {
    // console.log(firstName); Can't use let variables before they are declared/defined
    let firstName;
    const yearOfBirth = 1987;

    if (passedTest) {
         firstName = 'John';
    }
    console.log(firstName + ', born in ' + yearOfBirth);
    
}

driversLicense6(true);

//let and const are BLOCK { } scoped, important!

let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

//i doesn't change in the for loop because its BLOCK scoped

var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i); //var i is not block scoped, so the var i is reassigned
//then runs through the loop, incremented to 5 at the end, then printed to console
*/




////////////////////////////////Lecture: Blocks and IIFEs

//ES6
/*
{
    const a = 1;
    let b = 2;
    var c = 3;
}

// console.log(a + b);
console.log(c);

//ES5
(function() {
    var c = 3;
})();

// console.log(c);
*/


////////////////////////////////Lecture: Strings

/*
let firstName = 'John';
let lastName = 'Mendes';
const yearOfBirth = 1987;

function calcAge(year) {
    return 2018 - year;
};

//ES5

console.log('This is ' + firstName + ' ' + lastName + 
' and he was born in ' + yearOfBirth + '. Today, he is ' + 
calcAge(yearOfBirth) + ' years old.');

//ES6

//template Literals

console.log(`This is ${firstName} ${lastName} and he 
was born in ${yearOfBirth}. Today, he is 
${calcAge(yearOfBirth)} years old.`);

//You can use functions in template literals

const n = `${firstName} ${lastName}`;

//new String methods

console.log(n.startsWith('J'));
console.log(n.endsWith('s'));
console.log(n.includes('oh'));

console.log(`${firstName} `.repeat(5));


*/


////////////////////////////////Lecture: Arrow functions

/*
const years = [1990, 1987, 1965, 1938];


//ES5

var ages5 = years.map(function(el) {
    return 2018 - el;
});

console.log(ages5);

//ES6

//no arguments, use () =>

//one argument, one line of code returned
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

//more than 1 argument needs (), one line of code returned
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}`);
console.log(ages6);

//more than 1 argument needs (), plus { } for multiple lines and a return statement
// const years = [1990, 1987, 1965, 1938];

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear(); //returns 2018
    const age = now - el;
    return `Age element ${index + 1}: ${age}`;
});

console.log(ages6);
*/



////////////////////////////////Lecture: Arrow functions: Lexical 'This' keyword

//Arrow functions do no have the 'this' keyword

//ES5

// var box5 = {
//     color: 'green',
//     position: 1, 
//     clickMe: function() {
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// }

// box5.clickMe();

//methods 'this' will point to the object, 'this' in a regular function points to global object - window

//ES6

// const box6 = {
//     color: 'green',
//     position: 1, 
//     clickMe: function() {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }

// box6.clickMe();

//When you want to preserve the value of the 'this' keyword, use Arrow functions!!!

// const box66 = {
//     color: 'green',
//     position: 1, 
//     clickMe: () => {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }

// box66.clickMe();

//This example above returns undefined values because the arrow function in the main method now shares the 'this' keyword with the outer surroundings,
//in this case the global scope/window object
//Be careful with the arrow functions so you don't lose track of what the 'this' keyword points to



//ES5
// function Person(name) {
//     this.name = name;
// };

// Person.prototype.myFriends5 = function(friends) {

//     var arr = friends.map(function(el){
//         return this.name + ' is friends with ' + el;
//     }.bind(this));
//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];

// new Person('John').myFriends5(friends);

//ES6
/*
function Person(name) {
    this.name = name;
};

Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);


    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends6(friends);
*/


////////////////////////////////Lecture: Destructuring

//ES5

//var john = ['John', 31];

//var name = john[0];
//var age = john[1];

//ES6
/*
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Mendes'
}

const {firstName, lastName} = obj;

console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;

console.log(a);
console.log(b);

*/

// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year; 
//     return [age, 65 - age];
// }

// const [age, retirement] = calcAgeRetirement(1987);

// console.log(age);
// console.log(retirement);


////////////////////////////////Lecture: Arrays 
/*
const boxes = document.querySelectorAll('.box');


//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

*/

//ES6
/*
 const boxesArr6 = Array.from(boxes);

Array.from(boxes).forEach( cur => cur.style.backgroundColor = 'dodgerblue');

//ES5

for (i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';

}




//ES6 

for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}


//ES5

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});

console.log(full);

console.log(full.indexOf(true));

console.log(ages[full.indexOf(true)]);

//ES6

console.log(ages.findIndex( cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

*/

////////////////////////////////Lecture: The Spread Operator
/*
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5

var ages = [18, 30, 12, 21];

var sum2 = addFourAges.apply(null, ages);

console.log(sum2);

//ES6

// The spread operator takes the values from the array and sets then as the arguments for the function call

const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMendes = ['Jake', 'Pat', 'Bob'];

const bigFamily = [...familySmith, 'larry', ...familyMendes];

console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

////////////////////////////////Lecture: Rest Parameters
/*
//ES5

function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2018 - cur) >= 18);
    });
}

// isFullAge5(1990, 1987, 1999, 2015, 2014);

//ES6

function isFullAge6(...years) {
    years.forEach(cur => console.log((2018 - cur) >= 18));
}

isFullAge6(1990, 1987, 1999, 2015, 2014);

*/

//ES5
/*
function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    //console.log(argsArr);
    argsArr.forEach(function(cur) {
        console.log((2018 - cur) >= limit);
    });
}

 isFullAge5(21, 1990, 1987, 1999, 2015, 2014);

//ES6

function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2018 - cur) >= limit));
}

isFullAge6(50, 1990, 1987, 1999, 2015, 2014);
*/

////////////////////////////////Lecture: Default Parameters

//ES5

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality === undefined ? nationality = 'American' : nationality = nationality;

//     this.firstName = firstName;
//     this.yearOfBirth = yearOfBirth;
//     this.lastName = lastName;
//     this.nationality = nationality;
// }

//ES6

// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
//     this.firstName = firstName;
//     this.yearOfBirth = yearOfBirth;
//     this.lastName = lastName;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990, 'Mendes');
// var emily = new SmithPerson('Emily', 1993, 'Diaz', 'spanish');



////////////////////////////////Lecture: Maps
/*
const question = new Map();

question.set('question', 'What is the official name of the latest major Javascript version?');

question.set(1, 'ES5');

question.set(2, 'ES6');

question.set(3, 'ES2015');

question.set(4, 'ES2017');

question.set('correct', 3);

question.set(true, 'Correct answer :)');

question.set(false, 'Wrong, please try again!');


console.log(question.get('question'));
console.log(question.size);

// if (question.has(4)) {
//     // question.delete(4);  
//     console.log('Answer 4 is here');
// }

// question.clear();



// question.forEach((value, key) => {
//     console.log(`This is ${key} set to ${value}`)
// });

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}
const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));
*/

////////////////////////////////Lecture: Classes

//ES5
/*
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1987, 'PM');

//ES6 

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there');
    }
}

const john6 = new Person6('John', 1987, 'DPM');

Person6.greeting();
*/

////////////////////////////////Lecture: Classes and subclasses


//ES5
/*
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}



Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}



Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1987, 'Swimmer', 3, 10);

johnAthlete5.calculateAge();

johnAthlete5.wonMedal();

//ES6

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor (name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job)
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1987, 'Swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/



////////////////////////////// ES6 Challenge: My Solution
/*

Ideas:
-super class of town
-Create a park sub class - name/year/#ofTrees/parkArea
-Create a street sub class - name/year/length/sizeClass (default is normal)
-Map of all parks and map of all streets?
-create 3 parks and 4 streets with new keyword
-give classes specific functions
*/

class Town {
    
    constructor(name, yearBuilt) {
        this.name = name;
        this.yearBuilt = yearBuilt;
        this.parks = []
        this.streets = [];
    }
    
    calculateAvgAge() {
        //park obj {stuff}
        let allParks = this.parks;
        let avgAge = 0;
        allParks.forEach( (el) => {
            avgAge += el.calculateAge();
        });
        avgAge = (avgAge / allParks.length);
        console.log (`Our ${allParks.length} parks have an average age of ${avgAge} years.`);
    }

    treeDensity() {
        let allParks = this.parks;
        allParks.forEach( (el) => {
            console.log(`${el.name} has a tree density of ${el.calculateDensity()} trees per square km.`);
        });
    }

    mostTrees() {
        let allParks = this.parks;
        let parkWithMostTrees;
        let treeArr = [];
        allParks.forEach( (el) => {
            if (el.numberOfTrees > 1000) {
                treeArr.push(el.numberOfTrees);
            }
        });

        parkWithMostTrees = Math.max(...treeArr);

        allParks.forEach( (el) => {
            if (el.numberOfTrees === parkWithMostTrees) {
                parkWithMostTrees = el;
            }
        });
            console.log(`${parkWithMostTrees.name} has more than 1000 trees.`);
    }

    calculateStreetLength() {
        let allStreets = this.streets;
        let totalLength = 0;
        let avgLength = 0;
        allStreets.forEach( (el) => {
            totalLength += el.length;
        });
        avgLength = (totalLength / allStreets.length);
        console.log(`Our ${allStreets.length} streets have a total length of ${totalLength} km, with an average length of ${avgLength} km.`);
    }

    getStreetInfo() {
        let allStreets = this.streets;
        allStreets.forEach( (el) => {
            console.log(`${el.name}, built in ${el.yearBuilt}, is a ${el.size} street.`);
        });
    }
}



class Park extends Town {
    constructor(name, yearBuilt, numberOfTrees = 0, parkArea ) {
        super(name, yearBuilt);
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;
    }

    
    calculateDensity() {
        let density = (this.numberOfTrees / this.parkArea);
        return density;
    }

    calculateAge() {
        let age = (2018 - this.yearBuilt);
        return age;
    }

}


class Street extends Town {
    constructor(name, yearBuilt, length, size = 'normal') {
        super(name, yearBuilt);
        this.length = length;
        this.size = size;
    }
}


var town1 = new Town('West Hartford', 1854);
var park1 = new Park('Elizabeth Park', 1992, 1200, 2444);
var park2 = new Park('WeHa Reservoir', 2009, 7600, 23004);
var park3 = new Park('Wolcott Park', 2005, 4500, 1777);
var street1 = new Street('Quaker Lane South', 1990, 113);
var street2 = new Street('Farmington Avenue', 1987, 600, 'huge');
var street3 = new Street('Trout Brooke Drive', 2000, 544, 'big');
var street4 = new Street('Park Rd', 1975, 10);

let printParksReport = (town) => {
    //call functions
    console.log('----PARKS REPORT----');
    town.calculateAvgAge();
    town.treeDensity();
    town.mostTrees();
}

let printStreetsReport = (town) => {
    console.log('----STREETS REPORT----');
    town.calculateStreetLength();
    town.getStreetInfo();
}

//Push parks and streets into the town
town1.parks.push(park1, park2, park3);
town1.streets.push(street1, street2, street3, street4);
//Call the functions to make stuff happen
printParksReport(town1);
printStreetsReport(town1);



///////////////////////////////JONAS SOLUTION


class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, and is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park, 1894', 2.9, 3541), 
new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen', 2008, 2.7, 2), 
new Street('4th Street', 2015, 0.8), new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {
    
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];
    //[3, 5, 6]
}


function reportParks(p) {

        console.log('----PARKS REPORT----');
        //Density

            p.forEach(el => el.treeDensity());


        //Average Age
        const ages = p.map(el => new Date().getFullYear() - el.buildYear);
        const [totalAge, avgAge] = calc(ages);
        //[totalAge, avgAge] = [sum, sum / arr.length]; DESTRUCTURING
        console.log(`Our ${p.length} have an average of ${avgAge} years.`);



        //Which Park has more than 1000 trees

        const i = p.map(el => el.numTrees).findIndex( el => el >= 1000);
        console.log(`${p[i].name} has more than 1000 trees`);
}

function reportStreets(s) {
    console.log('----STREETS REPORT----');

    //Total and average length of towns streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    // [totalLength, avgLength] = [sum, sum / arr.length]; DESTRUCTURING
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km`);
    //Classify sizes

    s.forEach(el => classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);