<div align="center">
<img src="images/logo.png" alt="doki's logo" >
</div>

[![Build Status](https://travis-ci.org/filipelinhares/doki.svg?branch=master)](https://travis-ci.org/filipelinhares/doki)

## Installation
```sh
npm install --save doki
```

## Basic usage
```js
const Doki = require('doki');
let doki = new Doki('my-css-files/*.scss');
let output = doki.out();
```

**Your `.css` file**
```css
/**
 * @name Button
 * @description Your standard form button.
 *
 * @state :hover - Highlights when hovering.
 * @state :disabled - Dims the button when disabled.
 * @state .primary - Indicates button is the primary action.
 * @state .smaller - A smaller button
 *
 * @markup
 *   <button>This is a button</button>
 */
```

**output**
```js
[{
  "name": "Button",
  "description": "Your standard form button.",
  "state": [
    {
      "name": ":hover",
      "escaped": "pseudo-class-hover",
      "description": "Highlights when hovering."
    },
    {
      "name": ":disabled",
      "escaped": "pseudo-class-disabled",
      "description": "Dims the button when disabled."
    },
    {
      "name": ".primary",
      "escaped": "primary",
      "description": "Indicates button is the primary action."
    },
    {
      "name": ".smaller",
      "escaped": "smaller",
      "description": "A smaller button"
    }
  ],
  "markup": {
    "example": "<button>This is a button</button>",
    "escaped": "&lt;button&gt;This is a button&lt;/button&gt;"
  }
}]
```

## Doki API
Doki was built on top of [DSS](https://github.com/DSSWG/DSS)

#### class Doki(sourceFile)
The constructor accept any patter from [glob](https://www.npmjs.com/package/glob#glob-primer) or an array of files.

```js
const Doki = require('doki');
let doki = new Doki('css/*.css');
```

#### doki.out([options])
- `options` = `{}`
- return `Array`

```js
let doki = new Doki('css/*.css');
let output = doki.out();
```

#### doki.parser(name, cb(i, line, block))
[DSS](https://github.com/DSSWG/DSS#dssparser-name-callback-), by default, includes 4 parsers for the `name`, `description`, `state` and `markup` of a comment block. You can add to, or override, these defaults by registering a new `parser`.

```js
let doki = new Doki('css/*.css');
doki.parser('name', (i, line, block) => line );
let output = doki.out('output-file');
```

## Styleguide Documentation

#### `@name`
```css
/* @name Button */
```
#### `@description`
```css
/* @description Your standard form button. */
```
#### `@state`
```css
/* @state :hover - Highlights when hovering. */
```
#### `@markup`
```css
/**
 *  @markup
 *  <button>This is a button</button>
 */
```


## License
[MIT](LICENSE.md) © Filipe LInhares
