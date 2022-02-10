

const container = document.querySelector("#container");

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


// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
const newDiv = document.createElement("div");

// make border black and color pink
newDiv.setAttribute("style", "color: pink; border: thick solid black")


const h1 = document.createElement("h1");
h1.textContent ="Hello";

// apending h1 to newDiv
newDiv.appendChild(h1);


const p2  = document.createElement("p");
p2.textContent = "Me tOO";

// appending p2 to newDiv
newDiv.appendChild(p2);

// then appending newDiv to the body so it shows up.
document.body.appendChild(newDiv);


// btn

// creating button
const btn = document.createElement("button");

btn.textContent ="Click me";

// appending btn to body
document.body.appendChild(btn);

// adding an EventListener to the button so when clicked, it will alert the User
btn.addEventListener('click', () =>{
    alert("You have clicked the button :P");
})


// creating blue btn

const blueBtn = document.createElement("button");

blueBtn.textContent = "Blue button!";

// appending blue button to body
document.body.appendChild(blueBtn);

blueBtn.addEventListener('click', function(e){
    e.target.style.background = "blue";
});





