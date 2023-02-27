import { Mapping } from './util';

type ColorArangementOptions = 'dark' | 'light' | 'regular';
export type ColorArrangment = Mapping<ColorArangementOptions>;

export const ColorsOptions = [
    'primary',
    'warning',
    'danger',
    'text',
    'light',
    'grey',
    'white',
] as const;
export type Colors = typeof ColorsOptions[number];
export type ColorValue = string | ColorArrangment;
export type ColorMapping = Mapping<Colors, ColorValue>;

export type Tint = ColorArangementOptions;

export function resolveColorValue(
    value: ColorValue,
    option: ColorArangementOptions = 'regular'
): string {
    if (typeof value === 'string') {
        return value as string;
    } else {
        return value[option];
    }
}
