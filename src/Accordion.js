const KukiAccordion = (() => {

    /* =========== variables =========== */

    let Accordion;
    let Panel;
    let options;



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

                const classList = Array.from(Accordion[i].classList);

                if (classList.indexOf('active') !== -1) {
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
        console.log('opening accordion');
        element.classList.add('active');
        const panel = element.nextElementSibling;
        const panelHeight = panel.scrollHeight;
        const duration = (panelHeight / 100) * 300;

        panel.animate([
            {maxHeight: getComputedStyle(panel).maxHeight},
            {maxHeight: panelHeight + 'px'}
        ],{
            duration,
            fill: "forwards",
            easing: "ease-in-out"
        });
    }

    /**
     * @param element {Element}
     */
    function closeAccordion(element) {
        console.log('closing accordion');
        element.classList.remove('active');
        const panel = element.nextElementSibling;
        let panelHeight = getComputedStyle(panel).height;
        panelHeight = panelHeight.substr(0, panelHeight.length - 2);

        const duration = (panelHeight / 100) * 300;
        console.log(panelHeight);

        panel.animate([
            {maxHeight: getComputedStyle(panel).height},
            {maxHeight: 0}
        ],{
            duration,
            fill: "forwards",
            easing: "ease-in-out"
        });
    }

    /* =========== public methods =========== */

    function init(customOptions) {

        const defaults = {
            accordionClass : 'accordion',
            accordionContentClass : 'panel',
            activeClass : 'active'
        };

        Object.assign(defaults, customOptions, options);

        console.log(options);

        cacheDOM();
        setupEventListeners();
        removeActive();
    }

    /* =========== export public methods and variables =========== */

    return {init};

})();

export default KukiAccordion;


