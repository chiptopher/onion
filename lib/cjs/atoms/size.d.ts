import { SpacingNonNumber } from './block/types';
import { Mapping } from './util';
export declare type Size = 'regular' | 'small' | 'large';
export declare type Sized<T> = Mapping<Size, T>;
export declare type IndividaulPadding = `${number}rem` | SpacingNonNumber;
export declare type BorderSpacing = `${IndividaulPadding}` | `${IndividaulPadding} ${IndividaulPadding}` | `${IndividaulPadding} ${IndividaulPadding} ${IndividaulPadding}` | `${IndividaulPadding} ${IndividaulPadding} ${IndividaulPadding} ${IndividaulPadding}`;
export declare type Padding = BorderSpacing;
export declare type SizedPadding = Sized<Padding>;
