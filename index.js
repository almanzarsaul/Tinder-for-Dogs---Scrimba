import dogs from "./data.js";
import Dog from "./Dog.js";

let remainingDogs = dogs;

function render() {
  if (remainingDogs.length > 0) {
    document.getElementById("dog-info").innerHTML = dog.getDogHtml();
  } else {
    document.getElementById("main").innerHTML = `
    <h1>You're all caught up.</h1>
    `;
  }
}

let dog = new Dog(remainingDogs[0]);

render();

document.getElementById("dislike-btn").addEventListener("click", () => {
  remainingDogs.shift();
  dog = new Dog(remainingDogs[0]);
  render();
});
