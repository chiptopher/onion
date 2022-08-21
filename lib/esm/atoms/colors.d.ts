import { Mapping } from './util';
declare type ColorArangementOptions = 'dark' | 'light' | 'regular';
export declare type ColorArrangment = Mapping<ColorArangementOptions>;
export declare type ColorValue = string | ColorArrangment;
export declare type Colors = 'primary' | 'warning' | 'danger' | 'text' | 'light' | 'grey' | 'white';
export declare type ColorMapping = Mapping<Colors, ColorValue>;
export declare type Tint = ColorArangementOptions;
export declare function resolveColorValue(value: ColorValue, option?: ColorArangementOptions): string;
export {};
