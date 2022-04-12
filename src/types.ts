/**
 * Represents a order format to represent a date
 * - '#' means a number.
 * - 'u' means the unit.
 * - 'c' means the wordConstant (for example in past english will be 'ago' and in future 'in' meanwhile in
 * spanish past will be 'hace' and future 'en').
 * 
 * For example, in english, the past format will be '# u c' because a date in the past follows the format 
 * of "3 months ago", and the future format will be 'c # u' becase a date in the future follows the format
 * of "in 3 months".
 * 
 * Another example is, in spanish, both formats are 'c # u' because a date in the past follows the format
 * of 'hace 3 meses', as same as in the future, that follows the format 'en 3 meses'.
 */
export type OrderFormat = '# c u' | '# u c' | 'c u #' | 'c # u' | 'u c #' | 'u # c'

/** Represents a time unit as second, minute, hour, etc. */
export interface TimeUnit {
    /** The name in plural of the unit, for example, if this is a minute, then use 'minutes' */
    name: string

    /** What use if the miliseconds are 1 unit ago, for example, 1 day ago will be 'yesterday' */
    past: string

    /** What use if the miliseconds are in 1 unit, for example, in 1 day will be 'tomorrow' */
    future: string

    /** Identifier, used you want to use the max param */
    id: LangUnitName
}

/** Represents the units that need to be given to the TLP */
export interface LangUnits {
    now: string
    minute: TimeUnit
    hour: TimeUnit
    day: TimeUnit
    week: TimeUnit
    month: TimeUnit
    year: TimeUnit
}

/** Represents the interface of static words */
export interface LangStaticWords {
    /** A static word used to describe a past date, in english is 'ago' and in spanish is 'hace' */
    past: string

    /** A static word used to describe a future date, in english is 'in' and in spanish is 'en' */
    future: string
}

/** Represents the interface of formats */
export interface LangFormats {
    /** Followed format in a past date */
    past: OrderFormat

    /** Followed format in a future date */
    future: OrderFormat
}

/** Represents the properties of a TimeLanguagePack */
export interface Lang {
    /** Units of this time pack */
    units: LangUnits

    /** The format to follow with the dates */
    formats: LangFormats

    /** Static words used to describe dates, as 'ago', 'in', etc. */
    static: LangStaticWords
}

/** Represents the time unit that manages the ago-function */
export interface AgoFriendlyTimeUnit extends TimeUnit {
    max: number
    value: number
}

/** Represents the possible values for the parameter max in ago-function */
export type LangUnitName = keyof Omit<LangUnits, 'now'>