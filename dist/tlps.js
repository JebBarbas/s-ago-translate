"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EN = exports.ES = exports.PT = exports.DE = exports.FR = exports.IT = void 0;
/**
 * Frases Claves
 * >>> in 3 days    >>> Permiten saber el orden de futuro y como son days, hours y minutes, aparte de
 * >>> in 5 hours   >>> la constante de futuro
 * >>> in 7 minutes
 *
 * >>> 3 months ago >>> Permiten saber el orden de pasado y como son months, weeks y years, aparte de
 * >>> 5 weeks ago  >>> la constante de pasado
 * >>> 7 years ago
 *
 * >>> tomorrow, yesterday and just now are MUSTs
 *
 */
/** TLP per la lingua italiana */
exports.IT = {
    formats: {
        past: '# u c',
        future: 'c # u',
    },
    units: {
        day: { name: 'giorni', future: 'domani', past: 'ieri' },
        hour: { name: 'ore', future: 'in un\'ora', past: 'un\'ora fa' },
        minute: { name: 'minuti', future: 'in un minuto', past: 'un minuto fa' },
        month: { name: 'mesi', future: 'in un mese', past: 'un mese fa' },
        now: 'proprio adesso',
        week: { name: 'settimane', future: 'in una settimana', past: 'una settimana fa' },
        year: { name: 'anni', future: 'in un anno', past: 'un anno fa' }
    },
    static: {
        past: 'fa',
        future: 'in'
    }
};
/** TLP pour la langue française */
exports.FR = {
    formats: {
        past: 'c # u',
        future: 'c # u',
    },
    units: {
        day: { name: 'jours', future: 'demain', past: 'hier' },
        hour: { name: 'heures', future: 'dans une heure', past: 'il y a une heure' },
        minute: { name: 'minutes', future: 'dans une minute', past: 'il y a une minute' },
        month: { name: 'mois', future: 'dans un mois', past: 'il y a un mois' },
        now: 'juste maintenant',
        week: { name: 'semaines', future: 'dans une semaine', past: 'il y a une semaine' },
        year: { name: 'ans', future: 'dans un an', past: 'il y a un an' }
    },
    static: {
        past: 'il y a',
        future: 'dans'
    }
};
/** TLP für die deutsche Sprache */
exports.DE = {
    formats: {
        past: 'c # u',
        future: 'c # u',
    },
    units: {
        day: { name: 'Tagen', future: 'Morgen', past: 'gestern' },
        hour: { name: 'Stunden', future: 'in einer Stunde', past: 'vor einer Stunde' },
        minute: { name: 'Minuten', future: 'in einer Minute', past: 'vor einer Minute' },
        month: { name: 'Monaten', future: 'in einer Monat', past: 'vor einem Monat' },
        now: 'in diesem Moment',
        week: { name: 'Wochen', future: 'in einer Woche', past: 'vor einer Woche' },
        year: { name: 'Jahren', future: 'in einem Jahr', past: 'vor einem Jahr' }
    },
    static: {
        past: 'vor',
        future: 'in'
    }
};
/** TLP para lingua portuguesa */
exports.PT = {
    formats: {
        past: '# u c',
        future: 'c # u',
    },
    units: {
        day: { name: 'dias', future: 'amanhã', past: 'ontem' },
        hour: { name: 'horas', future: 'em uma hora', past: 'uma hora atrás' },
        minute: { name: 'minutos', future: 'em um minuto', past: 'um minuto atrás' },
        month: { name: 'meses', future: 'em um mês', past: 'um mês atrás' },
        now: 'agora mesmo',
        week: { name: 'semanas', future: 'em uma semana', past: 'uma semana atrás' },
        year: { name: 'anos', future: 'em um ano', past: 'um ano atrás' }
    },
    static: {
        past: 'atrás',
        future: 'em'
    }
};
/** TLP para lenguaje español */
exports.ES = {
    formats: {
        past: 'c # u',
        future: 'c # u',
    },
    units: {
        day: { name: 'días', future: 'mañana', past: 'ayer' },
        hour: { name: 'horas', future: 'en una hora', past: 'hace una hora' },
        minute: { name: 'minutos', future: 'en un minuto', past: 'hace un minuto' },
        month: { name: 'meses', future: 'en un mes', past: 'hace un mes' },
        now: 'en este momento',
        week: { name: 'semanas', future: 'en una semana', past: 'hace una semana' },
        year: { name: 'años', future: 'en un año', past: 'hace un año' }
    },
    static: {
        past: 'hace',
        future: 'en'
    }
};
/** TLP for english language */
exports.EN = {
    formats: {
        past: '# u c',
        future: 'c # u',
    },
    units: {
        day: { name: 'days', future: 'tomorrow', past: 'yesterday' },
        hour: { name: 'hours', future: 'in an hour', past: 'an hour ago' },
        minute: { name: 'minutes', future: 'in a minute', past: 'a minute ago' },
        month: { name: 'months', future: 'in a month', past: 'a month ago' },
        now: 'just now',
        week: { name: 'weeks', future: 'in a week', past: 'a week ago' },
        year: { name: 'years', future: 'in a year', past: 'a year ago' }
    },
    static: {
        past: 'ago',
        future: 'in'
    }
};
