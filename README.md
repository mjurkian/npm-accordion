## Accordion

> KUKI Digital

Super-smooth Vanilla JS accordion with no external dependencies.

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
npm i @kukidigital/kuki-accordion
```

> To install several modules, chain them like:

```shell
npm i @kukidigital/kuki-accordion @kukidigital/kuki-xxx @kukidigital/kuki-yyy
```

## Usage

> Include the following file in your project:

```js
import Accordion from '@kukidigital/kuki-accordion';
```

> Then run an Accordion in your main js file.

```js
Accordion.init();
```

> Layout your markup like this: ```'paired'```. Classes = ```accordion``` and ```panel``` required - changeable in - [Options](#options).

```html
<a class='accordion'>
    <h3>Accordion Title</h3>
</a>
<div class='panel'>
    <p>Lorem ipsum</p>
</div>
```

> Layout your markup like this: ```'nested'```. Class = ```accordion``` required - changeable in - [Options](#options).

```html
<div class='accordion'>
    <div class='accordion__header'>
        <h3>Accordion Title</h3>
    </div>
    <div class='accordion__content'>
        <p>Lorem ipsum</p>
    </div>
</div>

```

> Polyfill for older browsers (IE11, Edge, Safari) - ```(Object.assign, Array.from, WebAnimations)```

```html
<script crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js?features=Object.assign%2CArray.from%2CWebAnimations"></script>
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
| **accordionContentClass**                       | String   | `"panel"`        | Accordion content Class                |
| **activeClass**                                 | String   | `"active"`       | CSS class marking an accordion as enabled                     |
| **accordionStructure**                           | String   | `paired`         | 'paired' or 'nested'   |
| [**easingOption**](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing)   | String   | `ease-in-out`              | The EffectTiming easing property                             |
| **duration**                                     | Boolean/number  | `false`          | {boolean/number} if false, then we use speed to dictate animation duration, if a number is supplied, then we use this as the duration for ALL accordions, regardless of height         |
| **speed**              | Number  | `500`          | Speed of the animation in ms        |


## Supported browsers

**Supported browser / device versions:**

| Browser       | Device/OS | Version |
| ------------- | --------- | ------- |
| Mobile Safari | iOS       | Latest  |
| Chrome        | Android   | Latest  |
| IE            | Desktop   | 11+ (it only opens)       |
| MS Edge       | Desktop   | 15+     |
| Chrome        | Desktop   | 50+     |
| Firefox       | Desktop   | 48+     |
| Opera         | Desktop   | 37+     |
| Safari        | OSX       | Latest  |


## See Also

- [`Kuki Digital`](https://www.npmjs.com/settings/kukidigital/packages)

