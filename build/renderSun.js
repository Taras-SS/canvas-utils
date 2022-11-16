"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderSun = exports.DEFAULT_BLUR = exports.DEFAULT_SHADOW_COLOR = exports.DEFAULT_SUN_COLOR = void 0;
exports.DEFAULT_SUN_COLOR = "#fad797";
exports.DEFAULT_SHADOW_COLOR = "#ebb44f";
exports.DEFAULT_BLUR = 200;
var renderSun = function (ctx, config) {
    var _a;
    ctx.beginPath();
    ctx.arc(config.x, config.y, config.radius, 0, 2 * Math.PI);
    ctx.fillStyle = config.color || exports.DEFAULT_SUN_COLOR;
    ctx.shadowColor = config.shadowColor || exports.DEFAULT_SHADOW_COLOR;
    ctx.shadowBlur = (_a = config.blur) !== null && _a !== void 0 ? _a : exports.DEFAULT_BLUR;
    ctx.fill();
    ctx.shadowBlur = 0;
};
exports.renderSun = renderSun;
