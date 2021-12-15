'use strict';

var feedbackForm = document.querySelector('.form');
var buyTourForm = document.querySelector('.form');

var onSubmitForm = function () {
  feedbackForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    
  });
};

export {onSubmitForm}
