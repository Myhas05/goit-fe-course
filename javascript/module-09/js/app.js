'use strict';

import galleryItems from './gallery-items.js';
const galleryList = document.querySelector('.gallery');

// Делаем разметку HTML

const createGalleryList = ({ preview, original, description }) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.setAttribute('href', original);

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.setAttribute('src', preview);
  galleryImage.dataset.sourse = original;
  galleryImage.setAttribute('alt', description);

  const galleryIcon = document.createElement('span');
  galleryIcon.classList.add('gallery__icon');

  const galleryMaterialIcons = document.createElement('i');
  galleryMaterialIcons.classList.add('material-icons');
  galleryMaterialIcons.textContent = 'zoom_out_map';

  galleryLink.append(galleryImage, galleryIcon);
  galleryIcon.appendChild(galleryMaterialIcons);
  galleryItem.appendChild(galleryLink);
  return galleryItem;
};

const galleryHtml = galleryItems.map(item => createGalleryList(item));
galleryList.append(...galleryHtml);

// Делаем close-open modal window

const modal = document.querySelector('.lightbox');
const modalImage = document.querySelector('.lightbox__content');
const closeModalBtn = modal.querySelector(
  'button[data-action="close-lightbox"]',
);

galleryList.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalImage.addEventListener('click', handleModalClick);

function openModal(e) {
  e.preventDefault();

  if (e.target === e.currentTarget) {
    return;
  }

  const gallery = e.currentTarget;
  const galleryImg = e.target;

  const modal = gallery.nextElementSibling;
  const modalImg = modal.querySelector('img');
  modalImg.src = galleryImg.dataset.sourse;

  modal.classList.add('is-open');

  window.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(e) {
  if (e.key !== 'Escape') {
    return;
  }

  closeModal();
}

function handleModalClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  closeModal();
}

function closeModal() {
  modal.classList.remove('is-open');

  const modalImg = modal.querySelector('img');
  modalImg.src = '';

  window.removeEventListener('keydown', handleKeyPress);
}
