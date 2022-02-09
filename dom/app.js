

const container = document.querySelector(".container");

// create new div and store it into container
const content = document.createElement('div');

// adding a class to div called 'content'
content.classList.add('content');
content.textContent ="this is the glorious text-content";
// appending that div to the container class
container.appendChild(content);



// a <p> with red text that says “Hey I’m red!”
// creating an element <p>
const p = document.createElement("p");


// styles p with color red
p.style.color = "red";

// gives the element <p> with text
p.textContent="Hey I am red!";

// appending <p> to the body for it to show up
document.body.appendChild(p);


// an <h3> with blue text that says “I’m a blue h3!”
// creating an element <h3>
const h3 = document.createElement("h3");

// stylinh <h3> with color blue
h3.style.color ="blue";

// gives h3 text
h3.textContent = "I'm a blue h3!";

// appending h3 to the body 
document.body.append(h3);


