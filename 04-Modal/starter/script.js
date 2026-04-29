'use strict';

// Functions

const trigger = function (action) {
  modal.classList[action === 'showModal' ? 'remove' : 'add']('hidden');
  overlay.classList[action === 'showModal' ? 'remove' : 'add']('hidden');
};

// Select Element from DOM Tree
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

console.log(btnsShowModal);

// Modal Buttons Functionality
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', function () {
    trigger('showModal');
  });
}

// Close-modal Button Functionality
btnCloseModal.addEventListener('click', function () {
  trigger('hideModal');
});

// Handling Click on Overlay
overlay.addEventListener('click', function () {
  trigger('hideModal');
});

document.addEventListener('keydown', function (e) {
  console.log('a key was pressed');
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    trigger('hideModel');
  }
});
