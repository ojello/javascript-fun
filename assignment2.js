// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console
// let country;
// let population;
// let capitalCity = "Helsinki";
function describeCountry(country, population, capitalCity){
    console.log(`${country} has ${population} people and its capital city is ${capitalCity}`)
}
const finland = describeCountry("Finland",6000000, "Helsinki")
const brazil = describeCountry("Brazil", 1000000, "Sao Paolo")

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

// Function Declaration 
function percentageOfWorld1(country,population){
    let percentage = population/7900 * 100;
    console.log(`${country} has ${population} million people so it's about ${percentage} % of the world population`);
};

const angora = percentageOfWorld1("Angora", 1441)
const china = percentageOfWorld1("China", 450)


// Function Expression - React version ** Preferred Method ***
const percentageOfWorld2 = function(country, population){
    let percentage = population/7900 * 100;
    let cPop = `${country} has ${population} million people so it's about ${percentage}% of the world population`
    return cPop;
};


const taiwan = percentageOfWorld2("taiwan", 400);
console.log(taiwan);

const japan = percentageOfWorld2("japan", 200);
console.log(japan);


// Arrow Functions -- preferred **
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3

// Arrow Function
 let percentageOfWorld3 = (country, population) => {
     let percentage = population/7900 * 100;
     let pop = `${country} has ${population} million people so it's about ${percentage}% of the world population`
     return pop;

 };
 const america = percentageOfWorld3("America", 200) 

 console.log(america)

  // 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
 // 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice
function percentageOfWorld5(population) 
{
    return (population/7900) * 100;
}

const describePopulation = function(country, population) {
    const percentage = percentageOfWorld5(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
};

describePopulation("asia", 1200);


// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4  countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not(true or false)
// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values



let populations = [4400, 1200, 134,  24];

populations === 4;

let percentages = [percentageOfWorld5(populations[0]),percentageOfWorld5(populations[1]), percentageOfWorld5(populations[2]), percentageOfWorld5(populations[3])];

console.log(percentages)

