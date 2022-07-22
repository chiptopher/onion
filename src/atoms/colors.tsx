import { Mapping } from './util';

type ColorArangementOptions = 'dark' | 'light' | 'regular';
type ColorArrangment = Mapping<ColorArangementOptions>;

export type ColorValue = string | ColorArrangment;
export type Colors = 'primary' | 'warning' | 'danger' | 'text' | 'light';
export type ColorMapping = Mapping<Colors, ColorValue>;

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
