import Slide from './components/Slide';

const install = function (Vue, options) {
    Vue.mixin({
        components: {
            CardSlide: Slide
        }
    });
};

export default {
    install,
    Slide
};