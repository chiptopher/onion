import { Colors, Tint } from '../colors';
import { ForBreakpoints, Percents, Pixels, REMs, TagName } from '../types';
import { Appended, Mapping } from '../util';

export const BlockSpacingValuesNumbericalValueList = [
    0, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6,
] as const;

export type BlockSpacingValuesNumbericalValues =
    (typeof BlockSpacingValuesNumbericalValueList)[number];

export type BlockSpacing = `${BlockSpacingValuesNumbericalValues}`;

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
export type SpacingNonNumber = (typeof spacingNonNumberValues)[number];

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
export type BorderProps = Directions<'border', BorderType>;

export interface ColorProps {
    color?: Colors;
    colorTint?: Tint;
}

export interface FontProps {
    fontWeight?: 'normal' | 'bold';
}

type FlexJustify = 'center' | 'flex-start' | 'flex-end' | 'space-between';

export type FlexDirection = 'column' | 'row' | 'row-reverse' | 'column-reverse';
export type JustifyContent = FlexJustify;
export type TextAlignment = 'left' | 'right' | 'center';

type AnchorProps = Pick<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    'target' | 'rel'
>;

// TODO make an eslint warning when giving type but tagName isn't set to 'button'
type ButtonOnlyProps = {
    type?: 'reset' | 'button' | 'submit';
};

type HTMLTypes = Pick<
    React.ButtonHTMLAttributes<HTMLElement>,
    'onClick' | 'className' | 'style' | 'disabled'
>;

type Props = {
    alignItems?: FlexJustify;
    borderRadius?: boolean;
    children?: React.ReactNode;
    cursor?: 'pointer' | 'not-allowed';
    display?: 'flex' | 'none';
    flexDirection?: FlexDirection;
    gap?: SpacingValues;
    href?: string;
    id?: string;
    justifyContent?: FlexJustify;
    listStyleType?: 'none';
    open?: boolean;
    tagName?: TagName;
    textAlign?: TextAlignment;
    textColor?: Colors;
    textColorTint?: Tint;
    textDecoration?: 'underline' | 'none';
    verticalAlign?: 'top';
    width?: Pixels | REMs | Percents;
} & AnchorProps &
    BorderProps &
    PaddingProps &
    MarginProps &
    ButtonOnlyProps &
    FontProps &
    Hoverable<ColorProps> &
    HTMLTypes;

export type BlockProps = Props;

export type StyleResolver<T> = (t: T) => { [key: string]: boolean };
