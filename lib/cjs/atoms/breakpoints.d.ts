interface Bounds {
    lower: number;
    upper: number;
}
export interface Breakpoints {
    desktop: Bounds;
    mobile: Bounds;
    tablet: Bounds;
    wide: Bounds;
}
export declare function breakpoint(lower: number, upper: number): {
    lower: number;
    upper: number;
};
export {};
