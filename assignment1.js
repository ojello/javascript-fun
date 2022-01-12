// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console


const country = 'USA';
const continent = 'North America';
const population = 200000;

console.log(population)
console.log(continent)
console.log(country)

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console


const isIsland = false;
let language = "filipino";
console.log(isIsland)
console.log(population)
console.log(country)
// language is undefined
console.log(language)


// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese



const aCountry = 'Philippines';
const aContinent = 'Asia';
const aPopulation = 12000000;
const aLang = "Tagalog"

let half = aPopulation / 2;
let one = aPopulation + 1;
console.log(one);
let avgPop = 330000000;
// if (avgPop > aPopulation) {
//     return true;
// }
//     else {
//         return false;
//     }

console.log(avgPop > aPopulation)

let description = aCountry + " is in " + aContinent + " " + aPopulation + " " + " million people speak " + aLang

console.log(description)


// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax

let tempDesc = `${aCountry} is in ${aContinent} ${aPopulation} million people speak ${aLang}`
console.log(tempDesc)


// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original


if (aPopulation > avgPop) {
    console.log(`${aCountry} population is above average`)
} else {
    console.log(`${aCountry} population is below average`)
}

// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right

console.log('9' - '5');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2)


// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

// let numNeighbours = prompt("How many neighbour countries does your country have?: ");

let test = prompt("how are you?: ");
if (numNeighbours == 1) {
    console.log("Only 1 border");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}

let langOne = "italian";
switch (langOne) {
    case langOne == "chinese" | "mandarin":
        //code block
        given = console.log("Most number of native speakers!");
        break;
    case langOne == "english":
        //code block
        given = console.log("3rd place");
        break;
    case langOne == "hindi":
        //code block
        given = console.log("number 4");
        break;
    case langOne == "arabic":
        given = console.log("5th most spoken language");
        break;
    default:
        //code block
        given = console.log("Great language too :D");
}


// ternary operator example
function getFee(isSenior) {
    return (isSenior ? '5.00' : '25.00');
}

console.log(getFee(true));
// expected output: 5.00

console.log(getFee(false));
// expected output: 25.00

console.log(getFee(null));
// expected output: 26.00
