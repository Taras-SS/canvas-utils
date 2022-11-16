export const DEFAULT_SUN_COLOR = "#fad797";
export const DEFAULT_SHADOW_COLOR = "#ebb44f";
export const DEFAULT_BLUR = 200;

export interface ISunConfig {
  radius: number;
  x: number;
  y: number;
  color?: string;
  shadowColor?: string;
  blur?: number;
}

export const renderSun = (
  ctx: CanvasRenderingContext2D,
  config: ISunConfig
) => {
  ctx.beginPath();
  ctx.arc(config.x, config.y, config.radius, 0, 2 * Math.PI);
  ctx.fillStyle = config.color || DEFAULT_SUN_COLOR;
  ctx.shadowColor = config.shadowColor || DEFAULT_SHADOW_COLOR;
  ctx.shadowBlur = config.blur ?? DEFAULT_BLUR;
  ctx.fill();
  ctx.shadowBlur = 0;
};
