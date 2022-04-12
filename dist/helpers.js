"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = exports.order = exports.yearUnit = exports.orderUnits = void 0;
/** Orders the units of a TLP to an array, this was created to "connect" TLPs with the ago function */
var orderUnits = function (units) {
    return [
        __assign({ max: 2760000, value: 60000 }, units.minute),
        __assign({ max: 72000000, value: 3600000 }, units.hour),
        __assign({ max: 518400000, value: 86400000 }, units.day),
        __assign({ max: 2419200000, value: 604800000 }, units.week),
        __assign({ max: 28512000000, value: 2592000000 }, units.month)
    ];
};
exports.orderUnits = orderUnits;
/** Gets the year unit */
var yearUnit = function (unit) {
    return __assign({ max: Infinity, value: 31536000000 }, unit);
};
exports.yearUnit = yearUnit;
/** Orders the given values depending of the given order format */
var order = function (val, unit, constant, format) {
    var fArray = format.split(' ');
    var _a = ['c', 'u', '#'].map(function (value) { return fArray.indexOf(value); }), cIndex = _a[0], uIndex = _a[1], vIndex = _a[2];
    fArray[cIndex] = constant;
    fArray[uIndex] = unit;
    fArray[vIndex] = String(val);
    return fArray.join(' ');
};
exports.order = order;
/** Format Function from s-ago */
var format = function (diff, unit, isInTheFuture, lang) {
    var val = Math.round(Math.abs(diff) / unit.value);
    if (isInTheFuture) {
        return val <= 1 ? unit.future : (0, exports.order)(val, unit.name, lang.static.future, lang.formats.future);
    }
    return val <= 1 ? unit.past : (0, exports.order)(val, unit.name, lang.static.past, lang.formats.past);
};
exports.format = format;
