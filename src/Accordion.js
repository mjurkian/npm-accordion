const KukiAccordion = (() => {

    /* =========== variables =========== */

    let Accordion;
    let Panel;

    /* =========== private methods =========== */

    function cacheDOM() {
        Accordion = document.querySelectorAll('.accordion');
        Panel = document.querySelectorAll('.panel');
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
        for (let i = 0; i < Accordion.length; i++) {
            Accordion[i].classList.remove('active');
            Panel[i].classList.remove('active');
        }
    }

    function onClick(event) {
        event.preventDefault();

        let targetClicked = event.target;
        let classClicked = targetClicked.classList;

        while ((classClicked[0] !== 'accordion')) {
            targetClicked = targetClicked.parentElement;
            classClicked = targetClicked.classList;
        }

        let description = targetClicked.nextElementSibling;

        if (description.style.maxHeight) {
            // description.style.maxHeight = null;
            // event.currentTarget.classList.remove('active');
            closeAccordion(targetClicked);
        } else {

            for (let i = 0; i < Accordion.length; i++) {
                // Accordion[i].classList.remove('active');
                // Accordion[i].nextElementSibling.style.maxHeight = null;

                closeAccordion(Accordion[i]);
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
        element.classList.add('active');
        const panel = element.nextElementSibling;
        const panelHeight = panel.scrollHeight;

        panel.animate([
            {maxHeight: getComputedStyle(panel).maxHeight},
            {maxHeight: panelHeight + 'px'}
        ], 5000);
    }

    /**
     * @param element {Element}
     */
    function closeAccordion(element) {
        element.classList.remove('active');
        const panel = element.nextElementSibling;

        panel.animate([
            {maxHeight: getComputedStyle(panel).maxHeight},
            {maxHeight: 0}
        ],5000);
    }

    /* =========== public methods =========== */

    function init(options) {

        const defaults = {
            accordionClass : 'accordion',
            accordionContentClass : 'panel',
            activeClass : 'active'
        };



        cacheDOM();
        setupEventListeners();
        removeActive();
    }

    /* =========== export public methods and variables =========== */

    return {init};

})();

export default KukiAccordion;
