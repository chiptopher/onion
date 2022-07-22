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

export function breakpoint(lower: number, upper: number) {
  return {
    lower,
    upper,
  };
}
