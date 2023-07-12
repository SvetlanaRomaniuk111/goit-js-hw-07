import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const createGelery = galleryItems.map(
	({ preview, original, description }) =>
		`<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
);

gallery.insertAdjacentHTML('beforeend', createGelery.join(''));

gallery.addEventListener('click', onClick);

function onClick(evt) {
	const { target } = evt;
	if (target.classList.contains('gallery')) {
		return;
	}
	// console.log(target);
	evt.preventDefault();

	const instance = basicLightbox.create(
		`
    <img width="1400" height="900" src="${target.dataset.source}">
`,
		{
			onShow: () => {
				document.addEventListener('keydown', closeModal);
			},
			onClose: () => {
				document.removeEventListener('keydown', closeModal);
			},
		}
	);

	instance.show();

	function closeModal(evt) {
		if (evt.code !== 'Escape' || !instance) return;
		instance.close();
	}
}
