# Doki
Generate a JSON with your styleguide's data

## Installation
```sh
npm install --save doki
```

## Basic usage
```js
const Doki = require('doki');

let doki = new Doki('my-css-files/*.css');
doki.parse('docs/styles.json');
```

**Your .scss file**
```scss
//
// @name Button
// @description Your standard form button.
// 
// @state :hover - Highlights when hovering.
// @state :disabled - Dims the button when disabled.
// @state .primary - Indicates button is the primary action.
// @state .smaller - A smaller button
// 
// @markup
//   <button>This is a button</button>
// 
```

**output JSON`**
```json
{
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
}
```
> Multiples files will generate a array of objects.

## Doki API
Doki was built on top of [DSS](https://github.com/DSSWG/DSS)

#### class Doki(sourceFile)
The constructor accept any patter from [glob](https://www.npmjs.com/package/glob#glob-primer).

```js
const Doki = require('doki');

var doki = new Doki('css/*.css');
```

#### doki.parse(outputFile, [options]())
Generate a new JSON.

```js
var doki = new Doki('css/*.css');

doki.parse('output-file');
```

#### doki.parser(name, cb(i, line, block))
[DSS](https://github.com/DSSWG/DSS#dssparser-name-callback-), by default, includes 4 parsers for the name, description, state and markup of a comment block. You can add to, or override, these defaults by registering a new parser.

```js
var doki = new Doki('css/*.css');

doki.parser('name', (i, line, block) => line );
doki.parse('output-file');
```

## Styleguide Documentation

#### @name
```css
// @name Button
```
#### @description
```css
// @description Your standard form button.
```
#### @state
```css
// @state :hover - Highlights when hovering.
```
#### @markup
```css
// @markup
//   <button>This is a button</button>
```


## License
[MIT](LICENSE.md) © Filipe LInhares
