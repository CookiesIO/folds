export interface PositionCSS {
    top: string;
    right: string;
    bottom: string;
    left: string;
    transform: string;
}
export declare type Position = "Top" | "Right" | "Bottom" | "Left";
export declare type Align = "Start" | "Center" | "End";
export declare const getRelativeFixedPosition: (anchorRect: DOMRect, position: Position, align: Align, offset: number, alignOffset: number, itemRect: DOMRect) => PositionCSS;
export declare const percent: (min: number, max: number, value: number) => number;
