'use strict';

var destinationArr = document.querySelectorAll('.destinations__card');
var countryArr = document.querySelectorAll('.tour__item-short-link');
var countrySliderArr = document.querySelectorAll('.tour__item');

var onClickCountry = function (i) {
  if (!countryArr[i].classList.contains('tour__item-short-link--current') && !countrySliderArr[i].classList.contains('tour__item--current')) {
    document.querySelector('.tour__item-short-link--current').classList.toggle('tour__item-short-link--current');
    document.querySelector('.tour__item--current').classList.toggle('tour__item--current');
    countryArr[i].classList.toggle('tour__item-short-link--current');
    countrySliderArr[i].classList.toggle('tour__item--current');
  }
};

destinationArr.forEach(function (element) {
  element.addEventListener('click', function (evt) {
    var index = Array.from(destinationArr).indexOf(evt.target);
    onClickCountry(index);
  });
});

countryArr.forEach(function (element) {
  element.addEventListener('click', function (evt) {
    evt.preventDefault();
    var index = Array.from(countryArr).indexOf(evt.target);
    onClickCountry(index);
  });
});
