'use strict';

var headerBtn = document.querySelector('.header__menu-button');
var headerMenu = document.querySelector('.header__nav-list')

var openMenu = function () {
  headerMenu.classList.remove('header__nav-list--closed');
  headerBtn.classList.remove('header__menu-button--closed');
  headerBtn.querySelector('.header__menu-button-open').classList.remove('header__menu-button-open--active');
  headerBtn.querySelector('.header__menu-button-close').classList.add('header__menu-button-open--active');
}

var closeMenu = function () {
  headerMenu.classList.add('header__nav-list--closed');
  headerBtn.classList.add('header__menu-button--closed');
  headerBtn.querySelector('.header__menu-button-close').classList.remove('header__menu-button-open--active');
  headerBtn.querySelector('.header__menu-button-open').classList.add('header__menu-button-open--active');
}

var onLoadJs = function () {
  closeMenu();
}

var menuHandler = function () {
  headerBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (headerBtn.classList.contains('header__menu-button--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
};

export {
  menuHandler,
  onLoadJs
}
