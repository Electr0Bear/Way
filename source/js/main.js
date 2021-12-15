'use strict';

import { sliderHandler } from './slider.js';
import { modalHandler } from './modal.js';
import { menuHandler, onLoadJs } from './header-menu.js'

onLoadJs();
sliderHandler();
modalHandler();
menuHandler();
