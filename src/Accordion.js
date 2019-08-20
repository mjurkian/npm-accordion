import './polyfill/arrayFrom';

const KukiAccordion = (() => {
  /* =========== variables =========== */

  let Accordion;
  let Filter;
  let options;
  let showAll;

  /* =========== private methods =========== */

  function cacheDOM() {
    const { accordionClass, filterClass, viewAllClass } = options;
    Accordion = document.querySelectorAll(`.${accordionClass}`);
    Filter = document.querySelectorAll(`.${filterClass}`);
    showAll = document.querySelectorAll(`.${viewAllClass}`);


  }

  /**
   * @param element {Element}
   */
  function openAccordion(element) {
    const { activeClass, filterHeight, speed, easingOption, accordionStructure, duration, viewAllClass } = options;
    element.classList.add(activeClass);
    let panel;

    if (accordionStructure === 'nested') {
      panel = element.lastElementChild;
    } else {
      panel = element.nextElementSibling;
    }

    let panelHeight = panel.scrollHeight;

    if (element.nextElementSibling.getElementsByClassName(`${viewAllClass}`)[0]) {
      if (panelHeight < filterHeight) {
        panelHeight = panel.scrollHeight;
      } else {
        panelHeight = filterHeight;
      }
    }

    const keyframeDuration = duration ? duration : (panelHeight / 100) * speed;
    panel.setAttribute('style', `
            overflow: hidden;
            transition: height ${keyframeDuration}ms ${easingOption};
            height: ${panelHeight}px;
        `);
  }


  function viewAll(element) {
    const { speed, easingOption, duration } = options;

    const panel = element.parentElement;
    const panelHeight = panel.scrollHeight;
    const keyframeDuration = duration ? duration : (panelHeight / 100) * speed;

    console.log(panel)

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
    const { filterClass, filterClose, accordionClass, activeClass, viewAllClass } = options;
    const targetClass = event.classList;

    let closeTarget = Accordion;
    let closeClass = accordionClass;

    if (targetClass.contains(`${filterClass}`)) {
      closeTarget = Filter;
      closeClass = `${filterClass}`;
    }

    if (targetClass.contains(`${viewAllClass}`)) {
      viewAll(event);
    } else if (targetClass.contains(`${activeClass}`) && targetClass.contains(closeClass)) {
      closeAccordion(event);
    } else {
      if (targetClass.contains(`${filterClass}`) && filterClose === true) {
        for (let i = 0; i < closeTarget.length; i += 1) {
          const classList = Array.from(closeTarget[i].classList);
          if (classList.indexOf(activeClass) !== -1) {
            closeAccordion(closeTarget[i]);
          }
        }
      } else if (targetClass.contains(`${accordionClass}`)) {
        for (let i = 0; i < closeTarget.length; i += 1) {
          const classList = Array.from(closeTarget[i].classList);
          if (classList.indexOf(activeClass) !== -1) {
            closeAccordion(closeTarget[i]);
          }
        }
      }
      openAccordion(event);
    }
  }

  function setupEventListeners() {
    for (let i = 0; i < Accordion.length; i += 1) {
      Accordion[i].addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        onClick(event.currentTarget);
      });
    }

    for (let i = 0; i < Filter.length; i += 1) {
      Filter[i].addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        onClick(event.currentTarget);
      });
    }

    for (let i = 0; i < showAll.length; i += 1) {
      showAll[i].addEventListener('click', (event) => {
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

    for (let i = 0; i < Filter.length; i += 1) {
      if (accordionStructure === 'nested') {
        panelOverflow = Filter[i].lastElementChild;
      } else {
        panelOverflow = Filter[i].nextElementSibling;
      }

      panelOverflow.style.overflow = 'hidden';

      closeAccordion(Filter[i]);
    }
  }

  /* =========== public methods =========== */

  function init(customOptions) {
    const defaults = {
      filterClass: 'accordion-filter', // Accepts any string
      filterClose: false, // {boolean}
      filterHeight: 200, // Number
      viewAllClass: 'view-all', // Accepts any string
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
