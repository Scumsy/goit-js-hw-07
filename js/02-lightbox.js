import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = galleryItems.map(({ preview, original, description }) => {
  return `<li><a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${original}"
      alt="${description}"
    />
  </a></li>`;
});

const imageGallery = document.querySelector('.gallery');

imageGallery.insertAdjacentHTML('beforeend', galleryList.join(''));

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
