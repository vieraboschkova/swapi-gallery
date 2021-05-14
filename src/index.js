/* eslint-disable radix */
/* eslint-disable camelcase */
import { getCharacters, getCharacterDetails } from './apiCall';
import 'regenerator-runtime/runtime';
import CharacterCard from './components/CharacterCard';
import Pagination from './components/Pagination';
import Modal from './components/Modal';
import Loader from './components/Loader';

const modalRoot = document.getElementById('modalRoot');
const loaderRoot = document.getElementById('loaderRoot');
const gallery = document.getElementById('galleryRoot');
const paginationRoot = document.querySelector('.pagination');

let nextUrl;
let previousUrl;
let currentPageDisplayed;
let pageNumbersToDisplay;
let resultsCount;
let maxNumberOfPages;
let isLoading = true;

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

const closeModal = () => {
  modalRoot.innerHTML = '';
};

const processAsyncDetailsInArray = async (arrayOfUrls) => {
  const detailsArray = Promise.all(
    arrayOfUrls.map(async (url) => {
      const detail = await getCharacterDetails(url);
      return detail;
    }),
  );
  return detailsArray;
};

const processCharactersDetails = async (url) => {
  const detailsFetched = await getCharacterDetails(url);
  // const propertiesArray = ['films', 'species', 'starships', 'vehicles'];
  // TODO: Refactor
  // propertiesArray.forEach(async (propertyName) => {
  //   const newProperty = await processAsyncDetailsInArray(detailsFetched[propertyName]);
  //   detailsFetched[propertyName] = newProperty;
  // });
  // console.log(detailsFetched);
  const homeworldDetails = await getCharacterDetails(detailsFetched.homeworld);
  const filmDetails = await processAsyncDetailsInArray(detailsFetched.films);
  const speciesDetails = await processAsyncDetailsInArray(detailsFetched.species);
  const starshipsDetails = await processAsyncDetailsInArray(detailsFetched.starships);
  const vehiclesDetails = await processAsyncDetailsInArray(detailsFetched.vehicles);
  detailsFetched.homeworld = homeworldDetails;
  detailsFetched.films = filmDetails;
  detailsFetched.species = speciesDetails;
  detailsFetched.starships = starshipsDetails;
  detailsFetched.vehicles = vehiclesDetails;
  return detailsFetched;
};

const showModal = async (event) => {
  loaderRoot.classList.add('isLoading');
  const urlToFetch = event.target.getAttribute('data-url');
  const imageNumber = event.target.getAttribute('data-character-number');
  const details = await processCharactersDetails(urlToFetch);
  const modalToShow = new Modal(details, imageNumber);
  loaderRoot.classList.remove('isLoading');
  modalRoot.innerHTML = modalToShow.component;
  const modal = document.querySelector('.modal');
  modal.classList.add('showModal');
  const closeButtons = document.querySelectorAll('.closeModal');
  closeButtons.forEach((button) => {
    button.addEventListener('click', closeModal);
  });
};

const showNewFetchedData = (event) => {
  const pageNumberToFetch = event.target.getAttribute('data-page-number');
  processData(pageNumberToFetch);
};

const processPaginationDisplay = (pagesArray, maxNumber, currentPageNum) => {
  const pagination = new Pagination(pagesArray, maxNumber, currentPageNum);
  paginationRoot.innerHTML = pagination.component;
  const paginationButtons = document.querySelectorAll('[data-page-number');
  paginationButtons.forEach((button) => {
    button.addEventListener('click', showNewFetchedData);
  });
};

const processPageSetup = (next, previous, count, pageNumber) => {
  if (!resultsCount) resultsCount = count;
  if (!maxNumberOfPages) maxNumberOfPages = Math.ceil(count / 10);
  currentPageDisplayed = Number.parseInt(pageNumber);
  nextUrl = next;
  previousUrl = previous;
  pageNumbersToDisplay = getPagesNumbersToDisplay(currentPageDisplayed);
  processPaginationDisplay(pageNumbersToDisplay, maxNumberOfPages, currentPageDisplayed);
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
  loaderRoot.classList.add('isLoading');
  const data = await getCharacters(pageNumber);
  const {
    results, next, previous, count,
  } = data;

  processPageSetup(next, previous, count, pageNumber);
  processCardsDisplay(results);
  loaderRoot.classList.remove('isLoading');
};

// Init
const initiateGallery = () => {
  const loader = new Loader();
  loaderRoot.innerHTML = loader.component;
  processData(1);
};

initiateGallery();
