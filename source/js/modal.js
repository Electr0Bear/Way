'use strict';

var modal = document.querySelector('.modal');
var openModalBtns = document.querySelectorAll('.tour__button, .rates__button');
var closeModalBtn = document.querySelector('.modal__close-button');

var modalHandler = function () {
  openModalBtns.forEach(function (button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (!modal.classList.contains('modal--show')) {
        modal.classList.toggle('modal--show');
      }
    });
  });

  closeModalBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (modal.classList.contains('modal--show')) {
      modal.classList.toggle('modal--show');
    }
  });
};

export {modalHandler};
