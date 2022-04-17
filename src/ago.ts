import { orderUnits, format, yearUnit } from './helpers';
import AgoError from './AgoError';

import type { Lang, LangUnitName } from './types'
  
const ago = (date:Date|number, lang:Lang, max?:LangUnitName):string => {
    if(!(date instanceof Date) && typeof(date) !== 'number'){
        throw new AgoError(`Error in ago function, 'date' is neither a Date nor number`)
    }

    const time = typeof(date) === 'number' ? date : date.getTime()
    const units = orderUnits(lang.units)
    const diff = Date.now() - time;
  
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