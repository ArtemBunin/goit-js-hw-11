import { Notify } from 'notiflix/build/notiflix-notify-aio';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { markupImages } from './markup';
import { getImegs } from './fetchimegs';
const ref = {
  form: document.querySelector('.search-form'),
  loadMoreBtn: document.querySelector('.load-more'),
};
const gallerry = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
let page = 1;
let searchQuery = '';
let pageHits = 0;

ref.form.addEventListener('submit', onFormSubmit);

ref.loadMoreBtn.addEventListener('click', moreImg);
function onFormSubmit(ev) {
  ev.preventDefault();

  searchQuery = ev.currentTarget.searchQuery.value.trim();
  clearpage();
  moreImg();
}

async function moreImg() {
  try {
    const { hits, totalHits } = await getImegs(searchQuery, page);

    if (!searchQuery) {
      clearpage();
      Notify.failure('Write more correctly');
      return;
    }

    if (hits.length === 0) {
      disabledBtn();
      Notify.warning(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    if (searchQuery) {
      Notify.success(`Hooray! We found ${totalHits} images.`);
    }

    if (pageHits >= totalHits) {
      disabledBtn();
      Notify.warning(
        `We're sorry, but you've reached the end of search results.`
      );
      return;
    }
    page += 1;
    enableBtn();
    pageHits += hits.length;
    markupImages(hits);
    lightbox.refresh();
  } catch (error) {
    console.error(error);
  }
  
}

function clearpage() {
  gallerry.innerHTML = '';
  page = 1;
}

function enableBtn() {
  ref.loadMoreBtn.classList.remove('is-hidden');
}

function disabledBtn() {
  ref.loadMoreBtn.classList.add('is-hidden');
}
