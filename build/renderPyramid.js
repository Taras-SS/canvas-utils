"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderPyramid = exports.DEFAULT_PRIMARY_COLOR = exports.DEFAULT_SECONDARY_COLOR = void 0;
exports.DEFAULT_SECONDARY_COLOR = "#3b230b";
exports.DEFAULT_PRIMARY_COLOR = "#d49c5f";
var renderPyramid = function (ctx, config) {
    ctx.beginPath();
    ctx.moveTo(config.x, config.yBottom);
    ctx.lineTo(config.x + 66, config.yBottom);
    ctx.lineTo(config.x + 145, config.yTop);
    ctx.fillStyle = config.secondaryColor || exports.DEFAULT_SECONDARY_COLOR;
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(config.x + 66, config.yBottom);
    ctx.lineTo(config.x + 362, config.yBottom);
    ctx.lineTo(config.x + 145, config.yTop);
    ctx.fillStyle = config.primaryColor || exports.DEFAULT_PRIMARY_COLOR;
    ctx.closePath();
    ctx.fill();
};
exports.renderPyramid = renderPyramid;
