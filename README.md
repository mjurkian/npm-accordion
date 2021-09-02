## Accordion

> Namkos

Super-smooth Vanilla JS accordion with no external dependencies

[![npm](https://img.shields.io/badge/npm-1.1.3-green.svg)](https://www.npmjs.com/package/@kukidigital/kuki-accordion)


## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Supported browsers](#supported-browsers)
- [See Also](#see-also)



## Installation

> With [npm](https://npmjs.org/) installed, run

```shell
npm i namkos-accordion
```

> To install several modules, chain them like:

```shell
npm i @namkos/namkos-accordion @namkos/namkos-xxx @namkos/namkos-yyy
```

## Usage

> Include the following file in your project:

```js
 import Accordion from 'npm-accordion';
```

> Then run an Accordion in your main js file.

```js
Accordion.init();
```

> This is how it looks with [Options](#options).

```js
Accordion.init({
        accordionClass: 'accordion',
        accordionTrigger: 'accordion-trigger',
        accordionContentClass: 'panel',
        activeClass: 'active',
        easingOption: 'ease-in-out',
        duration: false,
        speed: 500
    });
```

> Layout your markup like this: - [Options](#options).

```html

<ul aria-label="Accordion Control Group Buttons" class="accordion-controls">

    <li class="accordion">
        <h3>
            <button class="accordion-trigger"
                    id="accordion-control-1"
                    aria-expanded="false"
                    aria-controls="content-1">
                <span>
                    Accordion Title
                </span>
            </button>
        </h3>
        <div id="content-1"
             aria-hidden="true"
             aria-labelledby="accordion-control-1"
             role="region">
            <p>Lorem ipsum </p>
        </div>
    </li>

    <li class="accordion">
        <h3>
            <button class="accordion-trigger"
                    id="accordion-control-2"
                    aria-expanded="false"
                    aria-controls="content-2">
                <span>
                    Accordion Title
                </span>
            </button>
        </h3>
        <div id="content-2"
             aria-hidden="true"
             aria-labelledby="accordion-control-2"
             role="region">
            <p>Lorem ipsum </p>
        </div>
    </li>

</ul>


```


> Output

```
Awesome Accordion !
```
Options
----------------------------------------------------------------
| Name                                             | Type     | Default          | Description                                                     |
|--------------------------------------------------|----------|------------------|-----------------------------------------------------------------|
| **accordionClass**                             | String   | `"accordion"`    | Accordion Class                     |
| **activeClass**                                 | String   | `"active"`       | CSS class marking an accordion as enabled                     |
| [**easingOption**](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing) - click   | String   | `ease-in-out`              | The EffectTiming easing property                             |
| **duration**                                     | Boolean/number  | `false`          | {boolean/number} if false, then we use speed to dictate animation duration (ms), if a number is supplied, then we use this as the duration for ALL accordions, regardless of height         |
| **speed**              | Number  | `500`          | Speed of the animation in ms        |


## Supported browsers

**Supported browser / device versions:**

| Browser       | Device/OS | Version |
| ------------- | --------- | ------- |
| Mobile Safari | iOS       | 10+     |
| Chrome        | Android   | 4.4+    |
| IE            | Desktop   | 11+     |
| MS Edge       | Desktop   | 17+     |
| Chrome        | Desktop   | 47+     |
| Firefox       | Desktop   | 47+     |
| Opera         | Desktop   | 37+     |
| Safari        | OSX       | 10+     |


## See Also
