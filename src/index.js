/* eslint-disable camelcase */
import getCharacters from './apiCall';
import 'regenerator-runtime/runtime';
import CharacterCard from './components/CharacterCard';
import Pagination from './components/Pagination';
import Modal from './components/Modal';

const modalRoot = document.querySelector('#modal');
const gallery = document.getElementById('galleryRoot');
const paginationRoot = document.querySelector('.pagination');

let nextUrl;
let previousUrl;
let currentPageDisplayed;
let pageNumbersToDisplay;
let resultsCount;
let maxNumberOfPages;
let modalDisplayed = false;

const getPagesNumbersToDisplay = (currentPageNumber) => {
  if (currentPageNumber === 1) return [1, 2, 3];
  if (currentPageNumber === maxNumberOfPages) {
    return [
      maxNumberOfPages - 2,
      maxNumberOfPages - 1,
      maxNumberOfPages,
    ];
  }
  return [currentPageNumber - 1, currentPageNumber, currentPageNumber + 1];
};

const getCharactersNumber = (url) => {
  const dataArray = url.split('/');
  return dataArray[dataArray.length - 2];
};

const showModal = (event) => {
  const urlToFetch = event.target.getAttribute('data-url');
  const imageNumber = getCharactersNumber(urlToFetch);
  console.log(urlToFetch, imageNumber);
  const modalToShow = new Modal(urlToFetch);
  modalRoot.innerHTML = modalToShow.component;
};

const processPaginationDisplay = (pagesArray, maxNumber, currentPageNum) => {
  // console.log(paginationRoot);
  if (!paginationRoot.hasChildNodes()) {
    const pagination = new Pagination(pagesArray, maxNumber, currentPageNum);
    // console.log(pagination);
    paginationRoot.innerHTML = pagination.component;
  }
  // TODO: else change pages setup
};

const processPageSetup = (next, previous, count, pageNumber) => {
  if (!resultsCount) resultsCount = count;
  if (!maxNumberOfPages) maxNumberOfPages = Math.ceil(count / 10);
  currentPageDisplayed = pageNumber;
  nextUrl = next;
  previousUrl = previous;
  pageNumbersToDisplay = getPagesNumbersToDisplay(pageNumber);
  processPaginationDisplay(pageNumbersToDisplay, maxNumberOfPages, currentPageDisplayed);
  // console.log(nextUrl,
  // previousUrl, currentPageDisplayed, pageNumbersToDisplay, maxNumberOfPages);
};

const processCardsDisplay = (results) => {
  const cards = results.map(({
    name, url,
  }) => {
    const card = new CharacterCard(name, url);
    return card.component;
  });
  gallery.innerHTML = cards.join('');
  const buttonsToOpenModal = document.querySelectorAll('.openModal');
  buttonsToOpenModal.forEach((button) => {
    button.addEventListener('click', showModal);
  });
};

const processData = async (pageNumber = 1) => {
  const data = await getCharacters(pageNumber);
  const {
    results, next, previous, count,
  } = data;

  processPageSetup(next, previous, count, pageNumber);
  processCardsDisplay(results);
};

// Init
const initiateGallery = () => {
  processData();
};

initiateGallery();
