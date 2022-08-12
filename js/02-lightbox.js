import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = galleryItems.map(({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
});

// imageGallery.addEventListener('click', evt => {
//   evt.preventDeafaults();
//   const instance = basicLightbox.create(`
//   	<div class = 'modal'><img
//         class="modal__image"
//         src="${evt.target.dataset.source}"
//         data-source="${evt.target.dataset.source}"
//         alt=""
//       /></div>`);
//   console.log(instance.show());
// });
