const getCharactersNumber = (url) => {
  const dataArray = url.split('/');
  return dataArray[dataArray.length - 2];
};
export default class CharacterCard {
  constructor(name, url) {
    this.name = name;
    this.url = url;
    this.imageNumber = getCharactersNumber(url);
    this.component = `
      <div class="col">
        <div class="card shadow-sm">
          <img src="./static/assets/img/people/${this.imageNumber}.jpg" class="img-fluid" alt="${this.name}">
          <div class="card-body">
            <p class="card-text">Name: ${this.name}</p>
            <button type="button"
              data-url="${this.url}" data-character-number="${this.imageNumber}" class="btn btn-sm btn-outline-secondary openModal">View</button>
          </div>
        </div>
      </div>
    `;
  }
}
