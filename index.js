import Accordion from './src/Accordion';


document.addEventListener("DOMContentLoaded", function() {
    // console.log('Your document is ready!');

    //***** Kuki Accordion module *****

    Accordion.init({
        accordionClass: 'accordion',
        accordionContentClass: 'panel',
        activeClass: 'active',
        accordionStructure: 'paired',
        easingOption: 'ease-in-out',
        duration: false,
        speed: 200
    });

});

