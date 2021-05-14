export default class Pagination {
  constructor(pagesToDisplay, maxNumberOfPages, currentPage) {
    this.pagesToDisplay = pagesToDisplay;
    this.maxNumberOfPages = maxNumberOfPages;
    this.currentPage = currentPage;
    this.lastPage = currentPage === maxNumberOfPages;
    this.firstPage = currentPage === 1;
    this.component = `
      <li class="page-item ${this.firstPage ? 'disabled' : ''}">
        <a data-page-number="${this.firstPage ? 1 : this.currentPage - 1}" class="page-link" aria-disabled=${this.firstPage}>Previous</a>
      </li>
      <li class="page-item ${this.pagesToDisplay[0] === this.currentPage ? 'active' : ''}">
        <a data-page-number="${this.pagesToDisplay[0]}" class="page-link">${this.pagesToDisplay[0]}</a>
      </li>
      <li class="page-item ${this.pagesToDisplay[1] === this.currentPage ? 'active' : ''}">
        <a data-page-number="${this.pagesToDisplay[1]}" class="page-link">${this.pagesToDisplay[1]}</a>
      </li>
      <li class="page-item ${this.pagesToDisplay[2] === this.currentPage ? 'active' : ''}">
        <a data-page-number="${this.pagesToDisplay[2]}" class="page-link">${this.pagesToDisplay[2]}</a>
      </li>
      <li class="page-item ${this.lastPage ? 'disabled' : ''}">
        <a data-page-number="${this.lastPage ? this.currentPage : this.currentPage + 1}" class="page-link" aria-disabled=${this.lastPage}>Next</a>
      </li>
      `;
  }
}
