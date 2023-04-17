// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;

    return `
        <img class="dog-avatar" src="${avatar}" alt="${name}'s avatar." />
        <div class="dog-details">
          <h2 class="dog-name-age">${name}, ${age}</h2>
          <p class="dog-description">${bio}</p>
        </div>
    `;
  }
}

export default Dog;
