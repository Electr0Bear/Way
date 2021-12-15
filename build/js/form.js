'use strict';

var phoneInput = document.querySelector('.form__input-phone');
var emailInput = document.querySelector('.form__input-email');
var submitBtn = document.querySelector('.form__submit-button');
var modal = document.querySelector('.modal');
var buyTourForm = document.querySelector('.modal__form');
var modalPhoneInput = document.querySelector('.modal__input-phone');
var modalEmailInput = document.querySelector('.modal__input-email');
var modalSubmitBtn = document.querySelector('.modal__submit-button');

var checkInputValidity = function (input) {

  input.addEventListener('input', function () {
    input.setCustomValidity('');
    input.parentNode.classList.remove('input-wrapper--invalid');
  });

  input.addEventListener('focusout', function () {
    input.setCustomValidity('');
    input.parentNode.classList.remove('input-wrapper--invalid');
    if (input.value) {
      var validity = phoneInput.checkValidity();
      input.parentNode.classList.toggle('input-wrapper--invalid', !validity);
    }
  });
}

var checkFormValidity = function () {
  checkInputValidity(phoneInput);
  checkInputValidity(emailInput);
  checkInputValidity(modalPhoneInput);
  checkInputValidity(modalEmailInput);

  submitBtn.addEventListener('click', function () {
    if (!phoneInput.checkValidity()) {
      phoneInput.parentNode.classList.add('input-wrapper--invalid');
    }
    if (!emailInput.checkValidity()) {
      emailInput.parentNode.classList.add('input-wrapper--invalid');
    }
  });

  modalSubmitBtn.addEventListener('click', function () {
    if (!modalPhoneInput.checkValidity()) {
      modalPhoneInput.parentNode.classList.add('input-wrapper--invalid');
    }
    if (!modalEmailInput.checkValidity()) {
      modalEmailInput.parentNode.classList.add('input-wrapper--invalid');
    }
  });
};

var onSubmitForm = function () {
  buyTourForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    modal.style = "padding: 0; background-image: none";
    modal.innerHTML = `<div style="padding-top: 179px; display: flex; justify-content: center; width: 100%; height: auto; background-color: $extraGrey2">
      <span style="font-weight: 500; font-size: 25px; line-height: 43px; text-align: center; color: $extraDark2">
        Форма успешно отправлена,<br> спасибо! :)
      </span>
    </div>
    <a class="modal__close-button">
      <svg>
        <use xlink:href="img/icons/sprite_auto.svg#icon-cross"></use>
      </svg>
      <span class="visually-hidden">Закрыть окно</span>
    </a>`;
  });
};

onSubmitForm();
checkFormValidity();

export { onSubmitForm, checkFormValidity }
