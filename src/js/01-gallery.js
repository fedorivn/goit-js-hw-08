// Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createGallery(galleryItems)
galleryEl.insertAdjacentHTML ('beforeend', galleryMarkup)
function createGallery(galleryItems){
    return galleryItems.map(({preview, original,description})=>
    {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
        </div>
        `
    }).join('')
}


function onImgClick(event){
    event.preventDefault()
    if (event.target.nodeName !=="IMG"){
        return
    }
    const element = event.target.dataset.source;
     const lightbox = new SimpleLightbox('.gallery a', { captionsData:`{description}`})
lightbox.open();
}
galleryEl.addEventListener('click', onImgClick)
