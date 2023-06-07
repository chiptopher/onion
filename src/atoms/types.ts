export type REMValue = `${number}rem`;

export type TagName =
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label'
    | 'span'
    | 'div'
    | 'header'
    | 'a'
    | 'tr'
    | 'th'
    | 'td'
    | 'thead'
    | 'tbody'
    | 'button'
    | 'ol'
    | 'ul'
    | 'nav'
    | 'li'
    | 'table'
    | 'summary'
    | 'details';

export type Pixels = `${number}px`;
export type REMs = `${number}rem`;
export type Percents = `${number}%`;

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
