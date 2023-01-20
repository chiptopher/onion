import { ForBreakpoints } from '../breakpoints';
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
    Hoverable<Mapping<DirectionOptions<T>, V>>
>;

export type Hoverable<T> = T & Appended<T, 'Hover'>;
export type LastChild<T> = T & Appended<T, 'LastChild'>;

export const spacingNonNumberValues = ['auto'] as const;
export type SpacingNonNumber = typeof spacingNonNumberValues[number];

export type SpacingValues = BlockSpacing | SpacingNonNumber;

export type SpacingPropsValue = ForBreakpoints<SpacingValues>;
export type PaddingProps = Directions<'padding', SpacingPropsValue>;
export type MarginProps = Directions<'margin', SpacingValues>;

type BorderStyleOptions = 'solid' | 'none';
type BorderWidthType = `${number}px`;
type BorderColorType = string;
type BorderType =
    | 'none'
    | `${BorderStyleOptions} ${BorderWidthType} ${BorderColorType}`;
export type BorderProps = LastChild<Directions<'border', BorderType>>;

export interface ColorProps {
    color?: Colors;
    colorTint?: Tint;
}
