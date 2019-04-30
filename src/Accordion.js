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

        console.log(options);
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


    function removeActive() {
        const {activeClass} = options;
        // for (let i = 0; i < Accordion.length; i++) {
        //     Accordion[i].classList.remove(activeClass);
        //     Panel[i].classList.remove(activeClass);
        // }
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
        // console.log(targetClicked.classList);

        if (targetClass.value === accordionClass + ' ' + activeClass) {
            // description.style.maxHeight = null;
            // event.currentTarget.classList.remove('active');
            closeAccordion(targetClicked);
        } else {

            for (let i = 0; i < Accordion.length; i++) {
                // Accordion[i].classList.remove('active');
                // Accordion[i].nextElementSibling.style.maxHeight = null;
                const classList = Array.from(Accordion[i].classList);

                console.log(classList);

                if (classList.indexOf(activeClass) !== -1) {
                    closeAccordion(Accordion[i]);
                }
            }

            // open
            openAccordion(targetClicked);
            // event.currentTarget.classList.add('active');
            // description.style.maxHeight = description.scrollHeight + 'px';
        }
    }

    /**
     * @param element {Element}
     */
    function openAccordion(element) {
        const {activeClass, speed, easingOption} = options;
        console.log('opening accordion');
        element.classList.add(activeClass);
        const panel = element.nextElementSibling;
        const panelHeight = panel.scrollHeight;
        const duration = (panelHeight / 100) * speed;

        panel.animate([
            {maxHeight: getComputedStyle(panel).maxHeight},
            {maxHeight: panelHeight + 'px'}
        ], {
            duration,
            fill: "forwards",
            easing: easingOption
        });
    }

    /**
     * @param element {Element}
     */
    function closeAccordion(element) {
        const {activeClass, speed, easingOption} = options;
        const panel = element.nextElementSibling;

        let panelHeight = getComputedStyle(panel).height;
        panelHeight = panelHeight.substr(0, panelHeight.length - 2);

        const duration = (panelHeight / 100) * speed;

        element.classList.remove(activeClass);

        panel.animate([
            {maxHeight: getComputedStyle(panel).height},
            {maxHeight: 0}
        ], {
            duration,
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
            speed:  500, // Number - Speed of the animation in ms
            easingOption: 'ease-in-out' // Accepts string https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing
        };

        options = Object.assign(defaults, customOptions);

        cacheDOM();
        setupEventListeners();
        removeActive();
    }


    /* =========== export public methods and variables =========== */

    return {init};



})();

export default KukiAccordion;
