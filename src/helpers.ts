import { LangUnits, AgoFriendlyTimeUnit, OrderFormat, Lang, TimeUnit } from "./types"

/** Orders the units of a TLP to an array, this was created to "connect" TLPs with the ago function */
export const orderUnits = (units:LangUnits):AgoFriendlyTimeUnit[] => {
    return [
        { max: 2760000, value: 60000, ...units.minute}, // max: 46 minutes
        { max: 72000000, value: 3600000, ...units.hour }, // max: 20 hours
        { max: 518400000, value: 86400000, ...units.day }, // max: 6 days
        { max: 2419200000, value: 604800000, ...units.week }, // max: 28 days
        { max: 28512000000, value: 2592000000, ...units.month } // max: 11 months
    ]
}

/** Gets the year unit */
export const yearUnit = (unit:TimeUnit):AgoFriendlyTimeUnit => {
    return {max: Infinity, value: 31536000000, ...unit}
}

/** Orders the given values depending of the given order format */
export const order = (val:number, unit:string, constant:string, format: OrderFormat) => {
    const fArray = format.split(' ')
    
    const [cIndex, uIndex, vIndex] = ['c','u','#'].map(value => fArray.indexOf(value))
    fArray[cIndex] = constant
    fArray[uIndex] = unit
    fArray[vIndex] = String(val)

    return fArray.join(' ')
}

/** Format Function from s-ago */
export const format = (diff:number, unit:AgoFriendlyTimeUnit, isInTheFuture:boolean, lang:Lang):string => {
    const val = Math.round(Math.abs(diff) / unit.value);

    if (isInTheFuture) {
        return val <= 1 ? unit.future : order(val, unit.name, lang.static.future, lang.formats.future)
    }

    return val <= 1 ? unit.past : order(val, unit.name, lang.static.past, lang.formats.past)
}
