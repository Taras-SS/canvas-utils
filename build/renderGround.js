"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderGround = exports.DEFAULT_GROUND_COLOR = void 0;
exports.DEFAULT_GROUND_COLOR = "#e9bf83";
var renderGround = function (ctx, config) {
    ctx.beginPath();
    ctx.rect(config.x, config.y, config.width, config.height);
    ctx.fillStyle = config.color || exports.DEFAULT_GROUND_COLOR;
    ctx.fill();
};
exports.renderGround = renderGround;
