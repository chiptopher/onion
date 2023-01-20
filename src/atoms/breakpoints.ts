export interface Bounds {
    lower: number;
    upper: number;
}

export interface Breakpoints {
    desktop: Bounds;
    mobile: Bounds;
    tablet: Bounds;
    wide: Bounds;
}

export function breakpoint(lower: number, upper: number) {
    return {
        lower,
        upper,
    };
}

export type ForBreakpoints<
    T,
    E extends keyof Breakpoints = 'mobile' | 'tablet' | 'wide' | 'desktop'
> = T | Partial<Pick<Record<keyof Breakpoints, T>, E>>;
