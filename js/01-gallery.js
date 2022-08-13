import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListItem = galleryItems.map(
  ({ preview, original, description }) => {
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
  },
);

const imageGallery = document.querySelector('.gallery');

imageGallery.insertAdjacentHTML('beforeend', galleryListItem.join(''));

//------------------------------------------

function modalImageUsage(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox
    .create(
      `
      	<div class = 'modal'><img

            src="${evt.target.dataset.source}"

            alt="${evt.target.dataset.alt}"
          /></div>
      `,
      {
        onShow: instance =>
          window.addEventListener('keydown', evt => {
            if (evt.code === 'Escape') {
              console.log('Exit the gallery');
              return instance.close();
            }
          }),
      },
      { onClose: instance => window.removeEventListener('keydown', instance) },
    )
    .show();
}

imageGallery.addEventListener('click', modalImageUsage);

// -----------------------------

// imageGallery.addEventListener('click', modalImageOpen);

// const instance = basicLightbox.create(`<img class="modal-img" src="">`, {
//   onShow: instance => window.addEventListener('keydown', onEscExit),
//   onClose: instance => window.removeEventListener('keydown', onEscExit),
// });
// function modalImageOpen(evt) {
//   evt.preventDefault();
//   if (!evt.target.classList.contains('gallery__image')) {
//     return;
//   }
//   instance.element().querySelector('modal-img').src = evt.target.dataset.source;
//   instance.show();
// }

// function onEscExit(evt) {
//   if (evt.code === 'Escape') {
//     console.log('Exit the gallery');
//     return instance.close();
//   }
// }
