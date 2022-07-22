import { Mapping } from './util';

export type Size = 'regular' | 'small' | 'large';
export type Sized<T> = Mapping<Size, T>;

type IndividaulPadding = `${number}rem`;

export type BorderSpacing =
    | `${IndividaulPadding}`
    | `${IndividaulPadding} ${IndividaulPadding}`
    | `${IndividaulPadding} ${IndividaulPadding} ${IndividaulPadding}`
    | `${IndividaulPadding} ${IndividaulPadding} ${IndividaulPadding} ${IndividaulPadding}`;

export type Padding = BorderSpacing;

export type SizedPadding = Sized<Padding>;
