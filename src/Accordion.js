const KukiAccordion = (() => {

    /* =========== variables =========== */

    let Accordion;
    let Panel;

    let options;

    /* =========== private methods =========== */

    function cacheDOM() {
        const {accordionClass, accordionContentClass} = options;
        Accordion = document.querySelectorAll('.' + accordionClass);
        Panel = document.querySelectorAll('.' + accordionContentClass);
    }

    function setupEventListeners() {
        for (let i = 0; i < Accordion.length; i++) {
            Accordion[i].addEventListener('click', function (event) {
                event.stopPropagation();
                event.preventDefault();
                onClick(event);
            });
        }
    }

    function noJS() {
        const {accordionStructure} = options;
        let panelOverflow;
        for (let i = 0; i < Accordion.length; i++) {

            if (accordionStructure === 'nested') {
                panelOverflow = Accordion[i].lastElementChild;
            } else {
                panelOverflow = Accordion[i].nextElementSibling;
            }

            panelOverflow.style.overflow = 'hidden';

            closeAccordion(Accordion[i]);
        }
    }

    function onClick(event) {
        event.preventDefault();
        const {accordionClass, activeClass} = options;

        let targetClicked = event.target;
        let classClicked = targetClicked.classList;

        while ((classClicked[0] !== accordionClass)) {
            targetClicked = targetClicked.parentElement;
            classClicked = targetClicked.classList;
        }

        let targetClass = targetClicked.classList;

        if (targetClass.value === accordionClass + ' ' + activeClass) {
            closeAccordion(targetClicked);
        } else {

            for (let i = 0; i < Accordion.length; i++) {

                const classList = Array.from(Accordion[i].classList);

                if (classList.indexOf(activeClass) !== -1) {
                    closeAccordion(Accordion[i]);
                }
            }
            openAccordion(targetClicked);
        }
    }

    /**
     * @param element {Element}
     */
    function openAccordion(element) {
        const {activeClass, speed, easingOption, accordionStructure, duration} = options;
        element.classList.add(activeClass);
        let panel;

        if (accordionStructure === 'nested') {
            panel = element.lastElementChild;
        } else {
            panel = element.nextElementSibling;
        }

        let panelHeight = panel.scrollHeight;

        const keyframeDuration = duration ? duration : (panelHeight / 100) * speed;

        panel.animate([
            {maxHeight: getComputedStyle(panel).maxHeight},
            {maxHeight: panelHeight + 'px'}
        ], {
            duration: keyframeDuration,
            fill: "forwards",
            easing: easingOption
        });
    }

    /**
     * @param element {Element}
     */
    function closeAccordion(element) {
        const {activeClass, speed, easingOption, accordionStructure, duration} = options;
        let panel;

        if (accordionStructure === 'nested') {
            panel = element.lastElementChild;
        } else {
            panel = element.nextElementSibling;
        }

        let panelHeight = getComputedStyle(panel).height;
        panelHeight = panelHeight.substr(0, panelHeight.length - 2);

        const keyframeDuration = duration ? duration : (panelHeight / 100) * speed;

        element.classList.remove(activeClass);

        panel.animate([
            {maxHeight: getComputedStyle(panel).height},
            {maxHeight: 0}
        ], {
            duration: keyframeDuration,
            fill: "forwards",
            easing: easingOption
        });
    }

    /* =========== public methods =========== */

    function init(customOptions) {

        const defaults = {
            accordionClass: 'accordion', // Accepts any string
            accordionContentClass: 'panel', // Accepts any string
            activeClass: 'active', // Accepts any string
            accordionStructure: 'paired', // string 'paired' or 'nested'
            easingOption: 'ease-in-out', // Accepts string https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing,
            duration: false, // {boolean/number} if false, then we use speed to dictate animation duration, if a number is supplied, then we use this as the duration for ALL accordions, regardless of height
            speed: 500 // Number - Speed of the animation in ms
        };

        options = Object.assign(defaults, customOptions);

        cacheDOM();
        setupEventListeners();
        noJS();
    }

    /* =========== export public methods and variables =========== */

    return {init};

})();

export default KukiAccordion;
