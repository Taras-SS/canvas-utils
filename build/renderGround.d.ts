export declare const DEFAULT_GROUND_COLOR = "#e9bf83";
export interface IGroundConfig {
    color?: string;
    width: number;
    height: number;
    x: number;
    y: number;
}
export declare const renderGround: (ctx: CanvasRenderingContext2D, config: IGroundConfig) => void;
