"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderSky = void 0;
var SKY_START_COLOR = "#a7bde0";
var SKY_END_COLOR = "#3c68b1";
var renderSky = function (ctx, width, height) {
    var skyGradient = ctx.createLinearGradient(0, 0, width, height);
    skyGradient.addColorStop(0, SKY_START_COLOR);
    skyGradient.addColorStop(1, SKY_END_COLOR);
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, width, height);
};
exports.renderSky = renderSky;
