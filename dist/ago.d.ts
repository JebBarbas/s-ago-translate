import type { Lang } from './types';
declare const ago: (date: Date | number, lang: Lang, max?: "minute" | "hour" | "day" | "week" | "month" | "year" | undefined) => string;
export default ago;
