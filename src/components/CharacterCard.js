export default class CharacterCard {
  constructor(name, url) {
    this.name = name;
    this.url = url;
    this.component = `
      <div class="col">
        <div class="card shadow-sm">
        <img src="./static/assets/img/people/${1}.jpg" class="img-thumbnail" alt="${this.name}">
          <div class="card-body">
            <p class="card-text">Name: ${this.name}</p>
            <button type="button"
              data-url="${this.url}" class="btn btn-sm btn-outline-secondary openModal">View</button>
          </div>
        </div>
      </div>
    `;
  }
}
