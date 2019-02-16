import Siema from 'siema';

const createSlider = (sliderSelector, prevButtonSelector, nextButtonSelector) => {
    const slider = new Siema({
        selector: sliderSelector,
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: () => { },
        onChange: () => { },
    });
    document.querySelector(prevButtonSelector).addEventListener('click', () => slider.prev());
    document.querySelector(nextButtonSelector).addEventListener('click', () => slider.next());
}

export default createSlider;