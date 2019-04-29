## Accordion

> KUKI Digital

Super-smooth Vanilla JS accordion with no external dependencies.


## Install

> With [npm](https://npmjs.org/) installed, run

```
npm i @kukidigital/kuki-accordion --save-dev
```

## Usage

> Include the following two files in your project:

```js
css
@import '../../node_modules/@kukidigital/kuki-accordion/src/style';

js
import Accordion from '@kukidigital/kuki-accordion';

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

> Then run an Accordion in your main js file.

```js
Accordion.init();
```

> Output

```
Awesome Accordion !
```


## See Also

- [`Kuki Digital`](https://www.npmjs.com/settings/kukidigital/packages)

