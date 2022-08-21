import { Mapping } from './util';

type ColorArangementOptions = 'dark' | 'light' | 'regular';
export type ColorArrangment = Mapping<ColorArangementOptions>;

export type ColorValue = string | ColorArrangment;
export type Colors =
    | 'primary'
    | 'warning'
    | 'danger'
    | 'text'
    | 'light'
    | 'grey'
    | 'white';
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
