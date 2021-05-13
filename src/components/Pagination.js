export default class Pagination {
  constructor(pagesToDisplay, maxNumberOfPages, currentPage) {
    this.pagesToDisplay = pagesToDisplay;
    this.maxNumberOfPages = maxNumberOfPages;
    this.currentPage = currentPage;
    this.lastPage = currentPage === maxNumberOfPages;
    this.firstPage = currentPage === 1;
    this.component = `
      <li class="page-item ${this.firstPage ? 'disabled' : ''}">
        <a class="page-link" aria-disabled=${this.firstPage}>Previous</a>
      </li>
      <li class="page-item ${pagesToDisplay[0] === this.currentPage ? 'active' : ''}"><a class="page-link">${pagesToDisplay[0]}</a></li>
      <li class="page-item ${pagesToDisplay[1] === this.currentPage ? 'active' : ''}"><a class="page-link">${pagesToDisplay[1]}</a></li>
      <li class="page-item ${pagesToDisplay[2] === this.currentPage ? 'active' : ''}"><a class="page-link">${pagesToDisplay[2]}</a></li>
      <li class="page-item ${this.lastPage ? 'disabled' : ''}">
        <a class="page-link" aria-disabled=${this.lastPage}>Next</a>
      </li>
      `;
  }
}
