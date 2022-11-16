const SKY_START_COLOR = "#a7bde0";
const SKY_END_COLOR = "#3c68b1";

export const renderSky = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
): void => {
  const skyGradient = ctx.createLinearGradient(0, 0, width, height);

  skyGradient.addColorStop(0, SKY_START_COLOR);
  skyGradient.addColorStop(1, SKY_END_COLOR);

  ctx.fillStyle = skyGradient;
  ctx.fillRect(0, 0, width, height);
};
