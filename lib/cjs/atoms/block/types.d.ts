import { Colors, Tint } from '../colors';
import { Appended, Mapping } from '../util';
import { BlockSpacing } from './util';
declare type DirectionOptions<T extends string> = `${T}Top` | `${T}Bottom` | `${T}Left` | `${T}Right` | `${T}`;
export declare type Directions<T extends string, V> = Partial<Hoverable<Mapping<DirectionOptions<T>, V>>>;
export declare type Hoverable<T> = T & Appended<T, 'Hover'>;
export declare type LastChild<T> = T & Appended<T, 'LastChild'>;
export declare const spacingNonNumberValues: readonly ["auto"];
export declare type SpacingNonNumber = typeof spacingNonNumberValues[number];
export declare type SpacingValues = BlockSpacing | SpacingNonNumber;
export declare type PaddingProps = Directions<'padding', SpacingValues>;
export declare type MarginProps = Directions<'margin', SpacingValues>;
declare type BorderStyleOptions = 'solid' | 'none';
declare type BorderWidthType = `${number}px`;
declare type BorderColorType = string;
declare type BorderType = 'none' | `${BorderStyleOptions} ${BorderWidthType} ${BorderColorType}`;
export declare type BorderProps = LastChild<Directions<'border', BorderType>>;
export interface ColorProps {
    color?: Colors;
    colorTint?: Tint;
}
export {};
