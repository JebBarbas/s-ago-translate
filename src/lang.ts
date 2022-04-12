import type { Lang } from "./types";
  
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

/** Lang per la lingua italiana */
export const IT:Lang = {
    formats:{
        past: '# u c',
        future: 'c # u',
    },

    units: {
        day: {id: 'day', name: 'giorni', future: 'domani', past: 'ieri'},
        hour: {id: 'hour', name: 'ore', future: 'in un\'ora', past: 'un\'ora fa'},
        minute: {id: 'minute', name: 'minuti', future: 'in un minuto', past: 'un minuto fa'},
        month: {id: 'month', name: 'mesi', future: 'in un mese', past: 'un mese fa'},
        now: 'proprio adesso',
        week: {id: 'week', name: 'settimane', future: 'in una settimana', past: 'una settimana fa'},
        year: {id: 'year',name: 'anni', future: 'in un anno', past: 'un anno fa'}
    },

    static: {
        past: 'fa',
        future: 'in'
    }
}

/** Lang pour la langue française */
export const FR:Lang = {
    formats:{
        past: 'c # u',
        future: 'c # u',
    },

    units: {
        day: {id: 'day', name: 'jours', future: 'demain', past: 'hier'},
        hour: {id: 'hour', name: 'heures', future: 'dans une heure', past: 'il y a une heure'},
        minute: {id: 'minute', name: 'minutes', future: 'dans une minute', past: 'il y a une minute'},
        month: {id: 'month', name: 'mois', future: 'dans un mois', past: 'il y a un mois'},
        now: 'juste maintenant',
        week: {id: 'week', name: 'semaines', future: 'dans une semaine', past: 'il y a une semaine'},
        year: {id: 'year', name: 'ans', future: 'dans un an', past: 'il y a un an'}
    },

    static: {
        past: 'il y a',
        future: 'dans'
    }
}

/** Lang für die deutsche Sprache */
export const DE:Lang = {
    formats:{
        past: 'c # u',
        future: 'c # u',
    },

    units: {
        day: {id: 'day', name: 'Tagen', future: 'Morgen', past: 'gestern'},
        hour: {id: 'hour', name: 'Stunden', future: 'in einer Stunde', past: 'vor einer Stunde'},
        minute: {id: 'minute', name: 'Minuten', future: 'in einer Minute', past: 'vor einer Minute'},
        month: {id: 'month', name: 'Monaten', future: 'in einer Monat', past: 'vor einem Monat'},
        now: 'in diesem Moment',
        week: {id: 'week', name: 'Wochen', future: 'in einer Woche', past: 'vor einer Woche'},
        year: {id: 'year', name: 'Jahren', future: 'in einem Jahr', past: 'vor einem Jahr'}
    },

    static: {
        past: 'vor',
        future: 'in'
    }
}

/** Lang para lingua portuguesa */
export const PT:Lang = {
    formats:{
        past: '# u c',
        future: 'c # u',
    },

    units: {
        day: {id: 'day', name: 'dias', future: 'amanhã', past: 'ontem'},
        hour: {id: 'hour', name: 'horas', future: 'em uma hora', past: 'uma hora atrás'},
        minute: {id: 'minute', name: 'minutos', future: 'em um minuto', past: 'um minuto atrás'},
        month: {id: 'month', name: 'meses', future: 'em um mês', past: 'um mês atrás'},
        now: 'agora mesmo',
        week: {id: 'week', name: 'semanas', future: 'em uma semana', past: 'uma semana atrás'},
        year: {id: 'year', name: 'anos', future: 'em um ano', past: 'um ano atrás'}
    },

    static: {
        past: 'atrás',
        future: 'em'
    }
}


/** Lang para lenguaje español */
export const ES:Lang = {
    formats:{
        past: 'c # u',
        future: 'c # u',
    },

    units: {
        day: {id: 'day', name: 'días', future: 'mañana', past: 'ayer'},
        hour: {id: 'hour', name: 'horas', future: 'en una hora', past: 'hace una hora'},
        minute: {id: 'minute', name: 'minutos', future: 'en un minuto', past: 'hace un minuto'},
        month: {id: 'month', name: 'meses', future: 'en un mes', past: 'hace un mes'},
        now: 'en este momento',
        week: {id: 'week', name: 'semanas', future: 'en una semana', past: 'hace una semana'},
        year: {id: 'year', name: 'años', future: 'en un año', past: 'hace un año'}
    },

    static: {
        past: 'hace',
        future: 'en'
    }
}

/** Lang for english language */
export const EN:Lang = {
    formats:{
        past: '# u c',
        future: 'c # u',
    },

    units: {
        day: {id: 'day', name: 'days', future: 'tomorrow', past: 'yesterday'},
        hour: {id: 'hour', name: 'hours', future: 'in an hour', past: 'an hour ago'},
        minute: {id: 'minute', name: 'minutes', future: 'in a minute', past: 'a minute ago'},
        month: {id: 'month', name: 'months', future: 'in a month', past: 'a month ago'},
        now: 'just now',
        week: {id: 'week', name: 'weeks', future: 'in a week', past: 'a week ago'},
        year: {id: 'year', name: 'years', future: 'in a year', past: 'a year ago'}
    },

    static: {
        past: 'ago',
        future: 'in'
    }
}
