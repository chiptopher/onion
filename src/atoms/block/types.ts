import { Mapping } from '../util';
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

export type PaddingProps = Directions<'padding', BlockSpacing>;
export type MarginProps = Directions<'margin', BlockSpacing>;

type BorderStyleOptions = 'solid' | 'none';
type BorderWidthType = `${number}px`;
type BorderColorType = string;
type BorderType = `${BorderStyleOptions} ${BorderWidthType} ${BorderColorType}`;
export type BorderProps = Directions<'border', BorderType>;
