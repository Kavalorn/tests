import createSlider from './slider';
import Plyr from 'plyr';

document.addEventListener('DOMContentLoaded', () => {
    createSlider(
        '#slider_1 .slider__container',
        '#slider_1 .slider__prev',
        '#slider_1 .slider__next'
    );
    createSlider(
        '#slider_2 .slider__container',
        '#slider_2 .slider__prev',
        '#slider_2 .slider__next'
    );
})
const player = new Plyr('#player')

