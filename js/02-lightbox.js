import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const createGelery = galleryItems.map(
	({ preview, original, description }) =>
		`<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-src="${original}"
            alt="${description}"
          />
        </a>
      </li>`
);

gallery.insertAdjacentHTML('beforeend', createGelery.join(''));

new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
});
