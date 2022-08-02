import { Mapping } from '../util';
import { BlockSpacing } from './util';

type DirectionOptions<T extends string> =
    | `${T}Top`
    | `${T}Bottom`
    | `${T}Left`
    | `${T}Right`
    | `${T}`;

type HoverOptions<T extends string> = `${T}` | `${T}Hover`;

export type Directions<T extends string, V> = Partial<
    Mapping<DirectionOptions<T> | HoverOptions<DirectionOptions<T>>, V>
>;

export type Hoverable<T extends string, V> = Partial<
    Mapping<T | `${T}Hover`, V>
>;

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
