import { LangUnits, AgoFriendlyTimeUnit, OrderFormat, Lang, TimeUnit } from "./types";
/** Orders the units of a TLP to an array, this was created to "connect" TLPs with the ago function */
export declare const orderUnits: (units: LangUnits) => AgoFriendlyTimeUnit[];
/** Gets the year unit */
export declare const yearUnit: (unit: TimeUnit) => AgoFriendlyTimeUnit;
/** Orders the given values depending of the given order format */
export declare const order: (val: number, unit: string, constant: string, format: OrderFormat) => string;
/** Format Function from s-ago */
export declare const format: (diff: number, unit: AgoFriendlyTimeUnit, isInTheFuture: boolean, lang: Lang) => string;
