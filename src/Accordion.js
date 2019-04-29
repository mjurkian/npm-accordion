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
            description.style.maxHeight = null;
            event.currentTarget.classList.remove('active');

        } else {

            for (let i = 0; i < Accordion.length; i++) {
                Accordion[i].classList.remove('active');
                Accordion[i].nextElementSibling.style.maxHeight = null;
            }

            event.currentTarget.classList.add('active');
            description.style.maxHeight = description.scrollHeight + 'px';
        }
    }

    /* =========== public methods =========== */

    function init() {
        cacheDOM();
        setupEventListeners();
        removeActive();
    }

    /* =========== export public methods and variables =========== */

    return {init};

})();

export default KukiAccordion;
