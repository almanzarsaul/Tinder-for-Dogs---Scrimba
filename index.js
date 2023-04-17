import dogs from "./data.js";
import Dog from "./Dog.js";

let remainingDogs = dogs;
let likedDogs = [];
let dislikedDogs = [];

let dog = new Dog(remainingDogs[0]);

render();

document.getElementById("dislike-btn").addEventListener("click", (e) => {
  dog.dislike();
  dislikedDogs.push(dog);
  render();
  remainingDogs.shift();
  dog = new Dog(remainingDogs[0]);
  setTimeout(render, 1500);
});

document.getElementById("like-btn").addEventListener("click", (e) => {
  dog.like();
  likedDogs.push(dog);
  render();
  remainingDogs.shift();
  dog = new Dog(remainingDogs[0]);
  setTimeout(render, 1500);
});

document.getElementById("home-icon").addEventListener("click", (e) => {
  location.reload();
});

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
