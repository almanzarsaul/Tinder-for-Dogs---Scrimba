// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  like() {
    this.hasBeenLiked = true;
  }

  dislike() {
    this.hasBeenSwiped = true;
  }

  getDogBadgeHtml() {
    if (this.hasBeenLiked) {
      return '<img class="dog-badge" src="images/badge-like.png" />';
    } else if (this.hasBeenSwiped) {
      return '<img class="dog-badge" src="images/badge-nope.png" />';
    }
  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenLiked, hasBeenSwiped } = this;

    return `
        ${hasBeenLiked || hasBeenSwiped ? this.getDogBadgeHtml() : ""}
        <img class="dog-avatar" src="${avatar}" alt="${name}'s avatar." />
        <div class="dog-details">
          <h2 class="dog-name-age">${name}, ${age}</h2>
          <p class="dog-description">${bio}</p>
        </div>
    `;
  }
}

export default Dog;
