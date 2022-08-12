import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//__________________________ -- 1
const galleryList = galleryItems.map(({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
});

//______________________________-- 2
const imageGallery = document.querySelector('.gallery');

imageGallery.insertAdjacentHTML('beforeend', galleryList.join(''));

imageGallery.addEventListener('click', evt => {
  evt.preventDefault();

  const instance = basicLightbox.create(`
  	<div class = 'modal'><img
        
        src="${evt.target.dataset.source}"
        
        alt="${evt.target.dataset.alt}"
      /></div>
  `);

  console.log(instance.show());
});
