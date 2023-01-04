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

let page = 1;
let searchQuery = '';
let pageHits = 0;


ref.form.addEventListener('submit', onFormSubmit);

ref.loadMoreBtn.addEventListener('click', moreImg);
async function onFormSubmit(ev) {
  ev.preventDefault();
 
  searchQuery = ev.currentTarget.searchQuery.value.trim();
  clearpage();
  moreImg()
//   try {
//     await getImegs(searchQuery, page).then(
//       ({hits,totalHits}) =>{
       
//         if (!searchQuery) {
//             clearpage();
//           Notify.failure('Write more correctly');
//           return 
//           } else{
          
//           }
//         var lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt',captionDelay :250})
//         if (hits.length=== 0){
//             Notify.warning('Sorry, there are no images matching your search query. Please try again.');
//             return 
//         }
//         if (searchQuery){  Notify.success(`Hooray! We found ${totalHits} images.`)};
//         markupImages(hits);
//         page +=1;
//         enableBtn()
//         pageHits +=hits.length
        
// if(pageHits>=totalHits){
//     disabledBtn();
  
//     Notify.warning(`We're sorry, but you've reached the end of search results.`);
//     return 
// }

//         } 
//     );
//   } catch (error) {
//     console.error(error);
//   }
}

async function moreImg() {
    try {
            await getImegs(searchQuery, page).then(
              ({hits,totalHits}) =>{
               
                if (!searchQuery) {
                    clearpage();
                  Notify.failure('Write more correctly');
                  return 
                  } else{
                  
                  }
                var lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt',captionDelay :250})
                if (hits.length=== 0){
                    Notify.warning('Sorry, there are no images matching your search query. Please try again.');
                    return 
                }
                if (searchQuery){  Notify.success(`Hooray! We found ${totalHits} images.`)};
                markupImages(hits);
                page +=1;
                enableBtn()
                pageHits +=hits.length
                
        if(pageHits>=totalHits){
            disabledBtn();
          
            Notify.warning(`We're sorry, but you've reached the end of search results.`);
            return 
        }
        
                } 
            );
          } catch (error) {
            console.error(error);
          }
    // try {
    //     await getImegs(searchQuery, page).then(
    //       ({hits,totalHits}) =>{
    //         markupImages(hits);
    //         page +=1;
    //         enableBtn()
    //         if (!searchQuery) {
    //             clearpage()
    //            Notify.failure('Write more correctly');
    //            return 
               
    //           }
    //         var lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt',captionDelay :250})
    //         if (hits.length=== 0){
    //             Notify.warning('Sorry, there are no images matching your search query. Please try again.');
    //             return 
    //         }
    //         pageHits +=hits.length;
    //         if(pageHits>=totalHits){
    //             disabledBtn();
    //             Notify.warning(`We're sorry, but you've reached the end of search results.`);
    //             return 
    //         }
       
            
    //         } 
    //     );
    //   } catch (error) {
    //     console.error(error);
    //   }
}


 function clearpage(){
gallerry.innerHTML ='';
page=1
 }

 function enableBtn(){
    ref.loadMoreBtn.classList.remove('is-hidden')
 }

 function disabledBtn(){
    ref.loadMoreBtn.classList.add('is-hidden')

 }