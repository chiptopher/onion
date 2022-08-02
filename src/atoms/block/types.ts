import { Colors, Tint } from '../colors';
import { Appended, Mapping } from '../util';
import { BlockSpacing } from './util';

type DirectionOptions<T extends string> =
    | `${T}Top`
    | `${T}Bottom`
    | `${T}Left`
    | `${T}Right`
    | `${T}`;

export type Directions<T extends string, V> = Partial<
    Mapping<DirectionOptions<T>, V>
>;

export type Hoverable<T> = T & Appended<T, 'Hover'>;

export type SpacingNonNumber = 'auto';

export type SpacingValues = BlockSpacing | SpacingNonNumber;

export type PaddingProps = Directions<'padding', SpacingValues>;
export type MarginProps = Directions<'margin', SpacingValues>;

type BorderStyleOptions = 'solid' | 'none';
type BorderWidthType = `${number}px`;
type BorderColorType = string;
type BorderType =
    | 'none'
    | `${BorderStyleOptions} ${BorderWidthType} ${BorderColorType}`;
export type BorderProps = Directions<'border', BorderType>;

export interface ColorProps {
    color: Colors;
    colorTint: Tint;
}
