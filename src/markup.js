// webformatURL - ссылка на маленькое изображение для списка карточек.
// largeImageURL - ссылка на большое изображение.
// tags - строка с описанием изображения. Подойдет для атрибута alt.
// likes - количество лайков.
// views - количество просмотров.
// comments - количество комментариев.
// downloads - количество загрузок.
const gallerry = document.querySelector('.gallery');


function markupImages(images) {
const markup= images.map( ({ largeImageURL, webformatURL,
     tags, downloads, comments, likes, views })=> ` <div class="photo-card">
        <a class="gallery__item" href="${largeImageURL}" >
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>likes:</b>${likes}
          </p>
          <p class="info-item">
            <b>Views:</b>${views}
          </p>
          <p class="info-item">
            <b>Comments:</b>${comments}
          </p>
          <p class="info-item">
            <b>Downloads:</b>${downloads}
          </p>
        </div>
      </div>`
  
     ).join('');

    gallerry.insertAdjacentHTML('beforeend',markup)
    
    };
     export {markupImages}