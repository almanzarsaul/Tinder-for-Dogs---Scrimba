import dogs from "./data.js";
import Dog from "./Dog.js";

let isActive = true;
let remainingDogs = dogs;

// could use in future for collection of liked/disliked dogs after completing swipes
let likedDogs = [];
let dislikedDogs = [];

let dog = new Dog(remainingDogs[0]);

render();

document
  .getElementById("dislike-btn")
  .addEventListener("click", () => handleInteraction("dislike"));

document
  .getElementById("like-btn")
  .addEventListener("click", () => handleInteraction("like"));

document
  .getElementById("home-icon")
  .addEventListener("click", () => location.reload());

function handleInteraction(type) {
  if (isActive) {
    isActive = false;
    if (type === "like") {
      dog.like();
      likedDogs.push(dog);
    } else if (type === "dislike") {
      dog.dislike();
      dislikedDogs.push(dog);
    }
    render();
    remainingDogs.shift();
    dog = new Dog(remainingDogs[0]);
    setTimeout(() => {
      render();
      isActive = true;
    }, 1500);
  }
}

function render() {
  if (remainingDogs.length > 0) {
    document.getElementById("dog-info").innerHTML = dog.getDogHtml();
  } else {
    document.getElementById("main").innerHTML = `
    <h1>You're all caught up.</h1>
    `;
    console.log(likedDogs);
    console.log(dislikedDogs);
  }
}
