"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
var AgoError_1 = __importDefault(require("./AgoError"));
var ago = function (date, lang, max) {
    if (!(date instanceof Date) && typeof (date) !== 'number') {
        throw new AgoError_1.default("Error in ago function, 'date' is neither a Date nor number");
    }
    var time = typeof (date) === 'number' ? date : date.getTime();
    var units = (0, helpers_1.orderUnits)(lang.units);
    var diff = Date.now() - time;
    // less than a minute
    if (Math.abs(diff) < 60000)
        return lang.units.now;
    for (var i = 0; i < units.length; i++) {
        if (Math.abs(diff) < units[i].max || (max && units[i].id === max)) {
            return (0, helpers_1.format)(diff, units[i], diff < 0, lang);
        }
    }
    return (0, helpers_1.format)(diff, (0, helpers_1.yearUnit)(lang.units.year), diff < 0, lang);
};
exports.default = ago;
