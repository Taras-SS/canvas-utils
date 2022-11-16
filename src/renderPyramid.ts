export const DEFAULT_SECONDARY_COLOR = "#3b230b";
export const DEFAULT_PRIMARY_COLOR = "#d49c5f";

export interface IPyramidConfig {
  x: number;
  yBottom: number;
  yTop: number;
  primaryColor?: string;
  secondaryColor?: string;
}

export const renderPyramid = (
  ctx: CanvasRenderingContext2D,
  config: IPyramidConfig
) => {
  ctx.beginPath();
  ctx.moveTo(config.x, config.yBottom);
  ctx.lineTo(config.x + 66, config.yBottom);
  ctx.lineTo(config.x + 145, config.yTop);
  ctx.fillStyle = config.secondaryColor || DEFAULT_SECONDARY_COLOR;
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(config.x + 66, config.yBottom);
  ctx.lineTo(config.x + 362, config.yBottom);
  ctx.lineTo(config.x + 145, config.yTop);
  ctx.fillStyle = config.primaryColor || DEFAULT_PRIMARY_COLOR;
  ctx.closePath();
  ctx.fill();
};
