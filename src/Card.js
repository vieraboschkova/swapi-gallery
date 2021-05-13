export default class CharacterCard {
  constructor(name, url) {
    this.name = name;
    this.url = url;
    this.component = `
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="${0}" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
          <div class="card-body">
            <p class="card-text">Name: ${this.name}</p>
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          </div>
        </div>
      </div>
    `;
  }
}
