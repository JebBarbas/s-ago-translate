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
lang  that must be a ***Text Language Package*** (TLP). This parameter is the language in that you want 
the human  readable text. You can find them in the `TLPS` object, followed by a language codes according 
to ISO 639-1.

The Following example is also from the s-ago package, but the code is modified to add the new parameter.

```js
let {ago, TLPS} = require('s-ago-translate');

// Or if you are using import-export
// import { ago, TLPS } from 's-ago-translate'
 
let now = new Date();
let yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1000));
let hoursAgo = new Date(now.getTime() - (6 * 60 * 60 * 1000));
let yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1000));
let tomorrow = new Date(now.getTime() + (6 * 60 * 60 * 1000));
let inSixHours = new Date(now.getTime() + (6 * 60 * 60 * 1000));
let inTwoWeeks = new Date(now.getTime() + (2 * 7 * 24 * 60 * 60 * 1000));
 
// present
ago(now, TLPS.EN); // 'just now', the used TLP was EN (english)
 
// past
ago(yesterday, TLPS.ES); // 'ayer' (yesterday), the used TLP was ES (spanish)
ago(hoursAgo, TLPS.ES); // 'hace 6 horas' (6 hours ago), the used TLP was ES (spanish)
 
// future
ago(inSixHours, TLPS.IT); // 'in 6 ore' (in 6 hours), the used TLP was IT (italian)
ago(tomorrow, TLPS.IT); // 'domani' (tomorrow), the used TLP was IT (italian)
 
// max unit
ago(inTwoWeeks, TLPS.FR);  // 'dans 2 semaines' (in 2 weeks), the used TLP was FR (french)
ago(inTwoWeeks, TLPS.FR, 'day'); // 'dans 14 jours' (in 14 days), the used TLP was FR (french)
```

For more information about how `ago` works (not including TLPS), visit the 
[s-ago npm page](https://www.npmjs.com/package/s-ago).

## Available Languages

These are the availables TLPS.

- English (`TLPS.EN`)
- Spanish (`TLPS.ES`)
- Portuguese (`TLPS.PT`)
- German (`TLPS.DE`)
- French (`TLPS.FR`)
- Italian (`TLPS.IT`)

These are TLPS NOT AVAILABLE yet, but that will be in a future (or that's the idea).

- Dutch (`TLPS.NL`)
- Polish (`TLPS.PL`)
- Ukrainian  (`TLPS.UK`)
- Russian (`TLPS.RU`)
- Turkish (`TLPS.TR`)
- Japanese (`TLPS.JA`)
- Korean (`TLPS.KO`)
- Thai (`TLPS.TH`)
- Chinese (`TLPS.ZH`)