export declare const DEFAULT_SUN_COLOR = "#fad797";
export declare const DEFAULT_SHADOW_COLOR = "#ebb44f";
export declare const DEFAULT_BLUR = 200;
export interface ISunConfig {
    radius: number;
    x: number;
    y: number;
    color?: string;
    shadowColor?: string;
    blur?: number;
}
export declare const renderSun: (ctx: CanvasRenderingContext2D, config: ISunConfig) => void;
