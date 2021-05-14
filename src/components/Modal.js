/* eslint-disable camelcase */
export default class Modal {
  constructor(details, imageNumber) {
    this.details = details;
    const {
      birth_year, name,
      eye_color,
      films, gender,
      hair_color,
      height,
      homeworld, skin_color, species, starships, vehicles,
    } = this.details;
    this.component = `
    <div class="modal" tabindex="-1">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${name}</h5>
            <button type="button" class="btn-close closeModal" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <img src="./static/assets/img/people/${imageNumber}.jpg" class="img-fluid" alt="${this.name}">
            </div>
            <div class="row">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Birth Year: ${birth_year}</li>
                <li class="list-group-item">Eye Color: ${eye_color}</li>
                <li class="list-group-item">Hair Color: ${hair_color}</li>
                <li class="list-group-item">Skin Color: ${skin_color}</li>
                <li class="list-group-item">Height: ${height}</li>
                <li class="list-group-item">Gender: ${gender}</li>
                <li class="list-group-item">Homeworld: ${homeworld.name}</li>
                <li class="list-group-item">Species: ${Modal.processArrayOfDetails(species, 'name')}</li>
                <li class="list-group-item">Starships: ${Modal.processArrayOfDetails(starships, 'name')}</li>
                <li class="list-group-item">Vehicles: ${Modal.processArrayOfDetails(vehicles, 'name')}</li>
                <li class="list-group-item">Films: ${Modal.processArrayOfDetails(films, 'title')}</li>
              </ul>
            </div
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary closeModal" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  static processArrayOfDetails(array, propertyName) {
    if (array.length === 0) return 'n/a';
    return array.map((item) => item[propertyName]).join(', ');
  }
}
