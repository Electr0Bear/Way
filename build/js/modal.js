'use strict';

var modal = document.querySelector('.modal');
var openModalBtns = document.querySelectorAll('.tour__button, .rates__button');
var closeModalBtn = document.querySelector('.modal__close-button');

var modalHandler = function () {
  openModalBtns.forEach(function (button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (!modal.classList.contains('modal--show')) {
        modal.classList.add('modal--show');
        closeModal();
      }
    });
  });
};

var closeModal = function () {
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modal.classList.remove('modal--show');
      document.removeEventListener('keydown', evt);
    }
  });

  closeModalBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (modal.classList.contains('modal--show')) {
      modal.classList.remove('modal--show');
      closeModalBtn.removeEventListener('click', evt);
    }
  });
}

export {
  modalHandler
};
