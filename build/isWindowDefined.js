"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSSR = void 0;
var isSSR = function () {
    return typeof window === "undefined";
};
exports.isSSR = isSSR;
