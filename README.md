## Accordion

> KUKI Digital

Super-smooth Vanilla JS accordion with no external dependencies.

[![npm](https://img.shields.io/badge/npm-1.1.3-green.svg)](https://www.npmjs.com/package/@kukidigital/kuki-accordion)


## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- Dependencies - none
- [You think you've found a bug?](#you-think-youve-found-a-bug)
- [Supported browsers](#supported-browsers)



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

> Layout your markup like this:

```html
<a class='accordion active'>
    <h3>Accordion Title</h3>
</a>
<div class='panel active'>
    <p>Lorem ipsum</p>
</div>
```




> Output

```
Awesome Accordion !
```
Options
----------------------------------------------------------------
| Name                                             | Type     | Default          | Description                                                     |
|--------------------------------------------------|----------|------------------|-----------------------------------------------------------------|
| [accordionClass]()                               | String   | `"accordion"`    | Accordion Class                     |
| [accordionContentClass]()                        | String   | `"panel"`          | Accordion content Class                |
| [activeClass]()                                  | String   | `"active"`         | CSS class marking an accordion as enabled                     |
| [accordionStructure]()                           | String   | `paired`            | 'paired' or 'nested'   |
| [easingOption](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing)   | String   | `ease-in-out`              | Animation                              |
| [duration]()                 | Boolean/number  | `false`          | {boolean/number} if false, then we use speed to dictate animation duration, if a number is supplied, then we use this as the duration for ALL accordions, regardless of height         |
| [speed]()               | Number  | `false`          | Speed of the animation in ms        |


## Supported browsers

**Supported browser / device versions:**

| Browser       | Device/OS | Version |
| ------------- | --------- | ------- |
| Mobile Safari | iOS       | latest  |
| Chrome        | Android   | latest  |
| IE            | Windows   | 11      |
| MS Edge       | Windows   | latest  |
| Chrome        | Desktop   | latest  |
| Firefox       | Desktop   | latest  |
| Safari        | OSX       | latest  |

* Chrome (45+)
* Firefox (40+)
* IE (10+) 
* Edge (20+)
* Safari (7+)

## See Also

- [`Kuki Digital`](https://www.npmjs.com/settings/kukidigital/packages)

