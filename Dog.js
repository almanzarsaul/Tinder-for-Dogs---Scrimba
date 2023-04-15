// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;

    return `
        <img src="${avatar}" alt="${name}'s avatar." />
        <h2 class="dog-details">${name}, ${age}</h2>
        <p class="dog-description">${bio}</p>
    `;
  }
}

export default Dog;
