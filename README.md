# S-Ago Translate

![NPM](https://img.shields.io/npm/l/s-ago-translate?color=blue&logo=npm&style=flat-square)
![Travis (.com)](https://img.shields.io/travis/com/jebbarbas/s-ago-translate?logo=travis&style=flat-square)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/s-ago-translate?logo=librariesdotio&style=flat-square)
![npm](https://img.shields.io/npm/dt/s-ago-translate?color=red&logo=npm&style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/s-ago-translate?color=red&logo=npm&style=flat-square)
![npm](https://img.shields.io/npm/v/s-ago-translate?color=red&logo=npm&style=flat-square)
![GitHub Repo stars](https://img.shields.io/github/stars/jebbarbas/s-ago-translate?logo=github&style=social)

A package based in 's-ago' that I made to take the functionality of the 'ago' function and translate it to many languages.

## Instalation

```
npm i s-ago-translate
```

## Usage

It has the same usage as the `ago` function from `s-ago`, but you need to pass a new parameter named 
lang that must be a property from the exported object Langs. This parameter is the language in that you want 
the human  readable text. You can find them in the `Langs` object, followed by a language codes according 
to ISO 639-1.

The Following example is also from the s-ago package, but the code is modified to add the new parameter.

```js
const {ago, Langs} = require('s-ago-translate');

// Or if you are using import-export
// import { ago, Langs } from 's-ago-translate'

let now = Date.now();
let hoursAgo = new Date(now - (6 * 60 * 60 * 1000));
let yesterday = new Date(now - (24 * 60 * 60 * 1000));

// In newer versions, you don't need to convert the miliseconds to a Date object
// this is very useful because, in some cases, you store created or edited dates
// in databases as numbers indicating miliseconds.
let tomorrow = now + (24 * 60 * 60 * 1000);
let inSixHours = now + (6 * 60 * 60 * 1000);
let inTwoWeeks = now + (2 * 7 * 24 * 60 * 60 * 1000);
 
// present
ago(now, Langs.EN); // 'just now', the used TLP was EN (english)
 
// past
ago(yesterday, Langs.ES); // 'ayer' (yesterday), the used TLP was ES (spanish)
ago(hoursAgo, Langs.ES); // 'hace 6 horas' (6 hours ago), the used TLP was ES (spanish)
 
// future
ago(inSixHours, Langs.IT); // 'in 6 ore' (in 6 hours), the used TLP was IT (italian)
ago(tomorrow, Langs.IT); // 'domani' (tomorrow), the used TLP was IT (italian)
 
// max unit
ago(inTwoWeeks, Langs.FR);  // 'dans 2 semaines' (in 2 weeks), the used TLP was FR (french)
ago(inTwoWeeks, Langs.FR, 'day'); // 'dans 14 jours' (in 14 days), the used TLP was FR (french)
```

In cases where you want to translate to only 1 language (like spanish for example) you can only
import the required Lang.

```js
const {ago, Langs:{ES}} = require('s-ago-translate')

const now = new Date()

ago(now, ES) // en este momento
```

For more information about how the `ago` function works, visit the 
[s-ago npm page](https://www.npmjs.com/package/s-ago).

## Available Languages

These are the availables Langs.

- English (`Langs.EN`)
- Spanish (`Langs.ES`)
- Portuguese (`Langs.PT`)
- German (`Langs.DE`)
- French (`Langs.FR`)
- Italian (`Langs.IT`)

These are Langs NOT AVAILABLE yet, but that will be in a future (or that's the idea).

- Dutch (`Langs.NL`)
- Polish (`Langs.PL`)
- Ukrainian  (`Langs.UK`)
- Russian (`Langs.RU`)
- Turkish (`Langs.TR`)
- Japanese (`Langs.JA`)
- Korean (`Langs.KO`)
- Thai (`Langs.TH`)
- Chinese (`Langs.ZH`)