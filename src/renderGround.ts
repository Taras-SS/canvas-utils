export const DEFAULT_GROUND_COLOR = "#e9bf83";

export interface IGroundConfig {
  color?: string;
  width: number;
  height: number;
  x: number;
  y: number;
}

export const renderGround = (
  ctx: CanvasRenderingContext2D,
  config: IGroundConfig
) => {
  ctx.beginPath();
  ctx.rect(config.x, config.y, config.width, config.height);
  ctx.fillStyle = config.color || DEFAULT_GROUND_COLOR;
  ctx.fill();
};
