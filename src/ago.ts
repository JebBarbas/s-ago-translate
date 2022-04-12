import { orderUnits, format, yearUnit } from './helpers';

import type { Lang, LangUnitName } from './types'
  
const ago = (date:Date, lang:Lang, max?:LangUnitName):string => {
    const units = orderUnits(lang.units)
    const diff = Date.now() - date.getTime();
  
    // less than a minute
    if (Math.abs(diff) < 60000) return lang.units.now;
  
    for (let i = 0; i < units.length; i++) {
        if (Math.abs(diff) < units[i].max || (max && units[i].id === max)) {
            return format(diff, units[i], diff < 0, lang)
        }
    }
  
    return format(diff, yearUnit(lang.units.year), diff < 0, lang);  
}

export default ago