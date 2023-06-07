import { Mapping } from './util';

export const ColorArangementOptions = ['dark', 'light', 'regular'] as const;
export type Tint = (typeof ColorArangementOptions)[number];
export type ColorArrangment = Mapping<Tint>;

export const ColorsOptions = [
    'primary',
    'warning',
    'danger',
    'text',
    'light',
    'grey',
    'white',
] as const;
export type Colors = (typeof ColorsOptions)[number];
export type ColorValue = string | ColorArrangment;
export type ColorMapping = Mapping<Colors, ColorValue>;

export function resolveColorValue(
    value: ColorValue,
    option: Tint = 'regular'
): string {
    if (typeof value === 'string') {
        return value as string;
    } else {
        return value[option];
    }
}
