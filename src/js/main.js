import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import timer from './modules/timer';
import works from './modules/works';
import modalState from './modules/modalState';


document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const state = {};

    modals();
    tabs('.decoration_slider', '.no_click', '[decoration-content]', 'after_click');
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img img', 'do_image_more', 'inline-block');
    forms(state);
    timer();
    works();
    modalState(state);

});