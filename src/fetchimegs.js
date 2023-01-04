import axios from 'axios';

// key - твой уникальный ключ доступа к API.
// q - термин для поиска. То, что будет вводить пользователь.
// image_type - тип изображения. Мы хотим только фотографии, поэтому задай значение photo.
// orientation - ориентация фотографии. Задай значение horizontal.
// safesearch - фильтр по возрасту. Задай значение true.

 async function getImegs( searchQuery,page){
    
        const baseURL= 'https://pixabay.com/api';
        const searchParams = new URLSearchParams({
            key:'29557508-0ee7329b42c60c951b2e7a132',
            q:searchQuery,
            image_type: 'photo',
            orientation:'horizontal',
            safesearch:'true',
            page,
            per_page:40,
        })
    
        const response = await axios.get(`${baseURL}/?${searchParams}`)
    
        const image = response.data;
        return image
   
   
 }



export {getImegs}
