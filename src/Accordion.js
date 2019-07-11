import './polyfill/arrayFrom';

const KukiAccordion = (() => {
  /* =========== variables =========== */

  let Accordion;
  let AccordionSub;
  let options;

  /* =========== private methods =========== */

  function cacheDOM() {
    const { accordionClass } = options;
    Accordion = document.querySelectorAll(`.${accordionClass}`);
    AccordionSub = document.querySelectorAll('.accordion-sub');
  }

  /**
   * @param element {Element}
   */
  function openAccordion(element) {
    const { activeClass, speed, easingOption, accordionStructure, duration } = options;
    element.classList.add(activeClass);
    let panel;

    if (accordionStructure === 'nested') {
      panel = element.lastElementChild;
    } else {
      panel = element.nextElementSibling;
    }

    const panelHeight = panel.scrollHeight;

    const keyframeDuration = duration ? duration : (panelHeight / 100) * speed;
    panel.setAttribute('style', `
            overflow: hidden;
            transition: height ${keyframeDuration}ms ${easingOption};
            height: ${panelHeight}px;
        `);
  }

  /**
   * @param element {Element}
   */
  function closeAccordion(element) {
    const { activeClass, speed, easingOption, accordionStructure, duration } = options;
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

    panel.setAttribute('style', `
            overflow: hidden;
            transition: height ${keyframeDuration}ms ${easingOption};
            height: 0px;
        `);
  }

  function onClick(event) {
    //event.preventDefault();
    const { accordionClass, activeClass } = options;

    // let targetClicked = event.target;
    // let classClicked = targetClicked.classList;

    // while ((classClicked[0] !== accordionClass)) {
    //   targetClicked = targetClicked.parentElement;
    //   classClicked = targetClicked.classList;
    // }

    const targetClass = event.classList;

    let closeTarget = Accordion;

    if (targetClass.contains('accordion-sub')) {
      closeTarget = AccordionSub;
    }

    if (targetClass.contains(`${activeClass}`) && targetClass.contains(`${accordionClass}`)) {
      closeAccordion(event);
    } else {
      for (let i = 0; i < closeTarget.length; i += 1) {
        const classList = Array.from(closeTarget[i].classList);
        if (classList.indexOf(activeClass) !== -1) {
          closeAccordion(closeTarget[i]);
        }
      }
      openAccordion(event);
    }
  }

  function setupEventListeners() {
    // console.log(AccordionSub);

    for (let i = 0; i < Accordion.length; i += 1) {
      Accordion[i].addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        onClick(event.currentTarget);
      });
    }

    for (let i = 0; i < AccordionSub.length; i += 1) {
      AccordionSub[i].addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        onClick(event.currentTarget);
      });
    }

  }

  function noJS() {
    const { accordionStructure } = options;
    let panelOverflow;
    for (let i = 0; i < Accordion.length; i += 1) {
      if (accordionStructure === 'nested') {
        panelOverflow = Accordion[i].lastElementChild;
      } else {
        panelOverflow = Accordion[i].nextElementSibling;
      }

      panelOverflow.style.overflow = 'hidden';

      closeAccordion(Accordion[i]);
    }
    // closing Accordion sub

    for (let i = 0; i < AccordionSub.length; i += 1) {
      if (accordionStructure === 'nested') {
        panelOverflow = AccordionSub[i].lastElementChild;
      } else {
        panelOverflow = AccordionSub[i].nextElementSibling;
      }

      panelOverflow.style.overflow = 'hidden';

      closeAccordion(AccordionSub[i]);
    }
  }


  /* =========== public methods =========== */

  function init(customOptions) {
    const defaults = {
      accordionClass: 'accordion', // Accepts any string
      activeClass: 'active', // Accepts any string
      accordionStructure: 'paired', // string 'paired' or 'nested'
      easingOption: 'ease-in-out', // Accepts string https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing,
      duration: false, // {boolean/number}
      speed: 500 // Number - Speed of the animation in ms
    };

    options = Object.assign(defaults, customOptions);

    cacheDOM();
    setupEventListeners();
    noJS();
  }

  /* =========== export public methods and variables =========== */

  return { init };
})();

export default KukiAccordion;
