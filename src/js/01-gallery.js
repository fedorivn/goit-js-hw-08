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
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
        `
    }).join('')
}

function onImgClick(event){
  event.preventDefault()}

const lightbox = new SimpleLightbox('.gallery a', {captions: true, captionsData: 'alt' , captionDelay: 250 });

