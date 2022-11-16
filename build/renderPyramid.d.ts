export declare const DEFAULT_SECONDARY_COLOR = "#3b230b";
export declare const DEFAULT_PRIMARY_COLOR = "#d49c5f";
export interface IPyramidConfig {
    x: number;
    yBottom: number;
    yTop: number;
    primaryColor?: string;
    secondaryColor?: string;
}
export declare const renderPyramid: (ctx: CanvasRenderingContext2D, config: IPyramidConfig) => void;
