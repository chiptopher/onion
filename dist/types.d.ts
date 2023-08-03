import React$1, { FunctionComponent, PropsWithChildren } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

declare type Mapping<T extends string, R = string> = {
    [K in T]: R;
};
interface ChildrenOnlyProps {
    children?: React$1.ReactNode;
}
declare type Appended<Type, AppendedText extends string> = {
    [Property in keyof Type as `${string & Property}${AppendedText}`]: Type[Property];
};

declare type REMValue = `${number}rem`;
declare type TagName = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'span' | 'div' | 'header' | 'a' | 'tr' | 'th' | 'td' | 'thead' | 'tbody' | 'button' | 'ol' | 'ul' | 'nav' | 'li' | 'table' | 'summary' | 'details';
declare type Pixels = `${number}px`;
declare type REMs = `${number}rem`;
declare type Percents = `${number}%`;
interface Bounds {
    lower: number;
    upper: number;
}
interface Breakpoints {
    desktop: Bounds;
    mobile: Bounds;
    tablet: Bounds;
    wide: Bounds;
}
declare type ForBreakpoints<T, E extends keyof Breakpoints = 'mobile' | 'tablet' | 'wide' | 'desktop'> = T | Partial<Pick<Record<keyof Breakpoints, T>, E>>;

declare const ColorArangementOptions: readonly ["dark", "light", "regular"];
declare type Tint = (typeof ColorArangementOptions)[number];
declare type ColorArrangment = Mapping<Tint>;
declare const ColorsOptions: readonly ["primary", "warning", "danger", "text", "light", "grey", "white"];
declare type Colors = (typeof ColorsOptions)[number];
declare type ColorValue = string | ColorArrangment;
declare function resolveColorValue(value: ColorValue, option?: Tint): string;

declare const BlockSpacingValuesNumbericalValueList: readonly [0, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6];
declare type BlockSpacingValuesNumbericalValues = (typeof BlockSpacingValuesNumbericalValueList)[number];
declare type BlockSpacing = `${BlockSpacingValuesNumbericalValues}`;
declare type DirectionOptions<T extends string> = `${T}Top` | `${T}Bottom` | `${T}Left` | `${T}Right` | `${T}`;
declare type Directions<T extends string, V> = Partial<Hoverable<Mapping<DirectionOptions<T>, V>>>;
declare type Hoverable<T> = T & Appended<T, 'Hover'>;
declare const spacingNonNumberValues: readonly ["auto"];
declare type SpacingNonNumber = (typeof spacingNonNumberValues)[number];
declare type SpacingValues = BlockSpacing | SpacingNonNumber;
declare type SpacingPropsValue = ForBreakpoints<SpacingValues>;
declare type PaddingProps = Directions<'padding', SpacingPropsValue>;
declare type MarginProps = Directions<'margin', SpacingValues>;
declare type BorderStyleOptions = 'solid' | 'none';
declare type BorderWidthType = `${number}px`;
declare type BorderColorType = string;
declare type BorderType = 'none' | `${BorderStyleOptions} ${BorderWidthType} ${BorderColorType}`;
declare type BorderProps = Directions<'border', BorderType>;
interface ColorProps {
    color?: Colors;
    colorTint?: Tint;
}
interface FontProps {
    fontWeight?: 'normal' | 'bold';
}
declare type FlexJustify = 'center' | 'flex-start' | 'flex-end' | 'space-between';
declare type FlexDirection = 'column' | 'row' | 'row-reverse' | 'column-reverse';
declare type TextAlignment = 'left' | 'right' | 'center';
declare type AnchorProps = Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'>;
declare type ButtonOnlyProps = {
    type?: 'reset' | 'button' | 'submit';
};
declare type HTMLTypes = Pick<React.ButtonHTMLAttributes<HTMLElement>, 'onClick' | 'className' | 'style' | 'disabled'>;
declare type Props$j = {
    alignItems?: FlexJustify;
    borderRadius?: boolean;
    children: React.ReactNode;
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
} & AnchorProps & BorderProps & PaddingProps & MarginProps & ButtonOnlyProps & FontProps & Hoverable<ColorProps> & HTMLTypes;
declare type BlockProps = Props$j;

declare const Block$1: React$1.ForwardRefExoticComponent<{
    alignItems?: ("center" | "flex-start" | "flex-end" | "space-between") | undefined;
    borderRadius?: boolean | undefined;
    children: React$1.ReactNode;
    cursor?: "pointer" | "not-allowed" | undefined;
    display?: "none" | "flex" | undefined;
    flexDirection?: FlexDirection | undefined;
    gap?: SpacingValues | undefined;
    href?: string | undefined;
    id?: string | undefined;
    justifyContent?: ("center" | "flex-start" | "flex-end" | "space-between") | undefined;
    listStyleType?: "none" | undefined;
    open?: boolean | undefined;
    tagName?: TagName | undefined;
    textAlign?: TextAlignment | undefined;
    textColor?: "primary" | "warning" | "danger" | "text" | "light" | "grey" | "white" | undefined;
    textColorTint?: "light" | "dark" | "regular" | undefined;
    textDecoration?: "none" | "underline" | undefined;
    verticalAlign?: "top" | undefined;
    width?: `${number}px` | `${number}rem` | `${number}%` | undefined;
} & {
    target?: React$1.HTMLAttributeAnchorTarget | undefined;
    rel?: string | undefined;
} & Partial<Hoverable<Mapping<"border" | "borderTop" | "borderBottom" | "borderLeft" | "borderRight", "none" | `none ${number}px ${string}` | `solid ${number}px ${string}`>>> & Partial<Hoverable<Mapping<"padding" | "paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight", SpacingPropsValue>>> & Partial<Hoverable<Mapping<"margin" | "marginTop" | "marginBottom" | "marginLeft" | "marginRight", SpacingValues>>> & {
    type?: "button" | "reset" | "submit" | undefined;
} & FontProps & ColorProps & Appended<ColorProps, "Hover"> & {
    onClick?: React$1.MouseEventHandler<HTMLElement> | undefined;
    className?: string | undefined;
    style?: React$1.CSSProperties | undefined;
    disabled?: boolean | undefined;
} & React$1.RefAttributes<unknown>>;

declare type PossibleScale = 0.5 | 1 | 1.5 | 2 | 3 | 4 | 6 | 8;
declare type Block = `${PossibleScale}`;
declare const block: (input: PossibleScale | Block) => REMValue;

declare type Size = 'regular' | 'small' | 'large' | 'none';

interface Props$i {
    size?: Size;
}
interface AsButtonProps {
    href?: never;
    type?: 'reset' | 'button' | 'submit';
}
interface AsAnchorProps {
    href?: string;
    type?: never;
}
declare type ButtonProps = Props$i & Pick<BlockProps, 'borderRadius' | 'disabled'> & ColorProps & Hoverable<ColorProps> & React$1.ButtonHTMLAttributes<HTMLButtonElement> & (AsButtonProps | AsAnchorProps);
declare const Button: React$1.FunctionComponent<ButtonProps>;

declare type Props$h = {
    children: React$1.ReactNode;
    color?: Colors;
    tagName?: 'span' | 'a';
} & Pick<React$1.AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick' | 'target' | 'href'>;
declare const Link: React$1.ForwardRefExoticComponent<{
    children: React$1.ReactNode;
    color?: "primary" | "warning" | "danger" | "text" | "light" | "grey" | "white" | undefined;
    tagName?: "span" | "a" | undefined;
} & Pick<React$1.AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "onClick" | "href"> & React$1.RefAttributes<unknown>>;

interface Props$g {
    children?: React$1.ReactNode;
    initialState?: boolean;
}
declare const Loading: React$1.FunctionComponent<Props$g> & {
    Spinner: React$1.FunctionComponent<ChildrenOnlyProps>;
    Text: React$1.FunctionComponent<ChildrenOnlyProps>;
};
declare function withLoading<T>(Component: React$1.FunctionComponent<T>): React$1.FunctionComponent<T>;

declare function useLoading(): [boolean, (value: boolean) => void];

declare type TextStyle = 'title' | 'header' | 'subheader' | 'body' | 'label' | 'caption' | 'emphasized';
interface TextProps {
    alignment?: TextAlignment;
    children: React$1.ReactNode;
    color?: Colors;
    colorTint?: Tint;
    marginBottom?: boolean;
    style: TextStyle;
    tagName: TagName;
    underlined?: boolean;
}
declare const Text3: React$1.FunctionComponent<TextProps>;

declare const Body: React$1.FunctionComponent<Omit<TextProps, 'tagName' | 'style' | 'marginBottom'> & {
    marginBottom?: boolean;
    tagName?: 'p' | 'span';
}>;

declare const Caption: React$1.FunctionComponent<Omit<TextProps, 'tagName' | 'style' | 'marginBottom'> & {
    marginBottom?: boolean;
    tagName?: 'p' | 'span';
}>;

declare type Heirarcy = '1' | '2' | '3' | '4' | '5' | '6';

declare const Heading: React$1.FunctionComponent<Omit<TextProps, 'tagName' | 'style' | 'marginBottom'> & {
    heirarchy: Heirarcy;
}>;

declare type _Props$2 = Pick<React$1.LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'>;
declare type LabelProps = Omit<TextProps, 'tagName' | 'style' | 'marginBottom'> & _Props$2;
declare const Label: React$1.FunctionComponent<LabelProps>;

declare const Emphasized: React$1.FunctionComponent<Omit<TextProps, 'tagName' | 'style' | 'marginBottom'> & {
    marginBottom?: boolean;
    tagName?: 'p' | 'span';
}>;

interface SubheaderProps {
    heirarchy: Heirarcy;
}
declare type Props$f = Omit<TextProps, 'tagName' | 'style'> & SubheaderProps;
declare const Subheader: React$1.FunctionComponent<Omit<Props$f, 'marginBottom'>>;

interface TitleProps {
    children: React$1.ReactNode;
    heirarchy: Heirarcy;
}
declare type Props$e = Omit<TextProps, 'tagName' | 'style'> & TitleProps;
declare const Title: React$1.FunctionComponent<Omit<Props$e, 'marginBottom'>>;

interface BreadcrumbItemProps {
    children: React$1.ReactNode;
}

interface Props$d {
    children: React$1.ReactNode;
}
declare const Breadcrumbs: React$1.FunctionComponent<Props$d> & {
    Item: React$1.FunctionComponent<BreadcrumbItemProps>;
};

interface Props$c {
    children: React$1.ReactNode;
    marginBottom?: boolean;
}
declare const Buttons: React$1.FunctionComponent<Props$c>;

declare type CalloutColorOptions = Exclude<Colors, 'text'>;
interface Props$b {
    children: React$1.ReactNode;
    color: CalloutColorOptions;
    tint?: Tint;
}
declare const Callout: React$1.FunctionComponent<Props$b>;

interface CopyableActionProps {
    style: 'text' | 'icon';
}

declare const Copyable: React$1.FunctionComponent<ChildrenOnlyProps> & {
    Action: React$1.FunctionComponent<CopyableActionProps>;
    Content: React$1.FunctionComponent<CopyableContentProps>;
};
interface CopyableContentProps {
    children: string | number;
}

interface DetailsBodyProps {
    children: React$1.ReactNode;
}

interface DetailsSummaryProps {
    children: React$1.ReactNode;
    indicator?: React$1.ReactNode;
    tagName?: TagName;
    textStyle?: TextStyle;
}

interface Props$a {
    children: React$1.ReactNode;
    indicator?: React$1.ReactNode | null;
    initialOpen?: boolean;
}
declare const Details: React$1.FunctionComponent<Props$a> & {
    Body: FunctionComponent<DetailsBodyProps>;
    Summary: FunctionComponent<DetailsSummaryProps>;
};

interface FooterItemProps$1 {
    children: React$1.ReactNode;
}

interface FooterItemProps {
    children: React$1.ReactNode;
}

declare type FooterNavType = React$1.FunctionComponent<ChildrenOnlyProps> & {
    Item: React$1.FunctionComponent<FooterItemProps>;
    Title: React$1.FunctionComponent<LabelProps>;
};

interface Props$9 {
    children: React$1.ReactNode;
}
declare const Footer: React$1.FunctionComponent<Props$9> & {
    Copyright: React$1.FunctionComponent<ChildrenOnlyProps>;
    Flavor: React$1.FunctionComponent<ChildrenOnlyProps>;
    Item: React$1.FunctionComponent<FooterItemProps$1>;
    Nav: FooterNavType;
    Title: React$1.FunctionComponent<ChildrenOnlyProps>;
};

interface HeaderNavContainerProps {
    children?: React$1.ReactNode;
    side: 'start' | 'end';
}
declare type HeaderMenuItemProps = {
    contrasting?: boolean;
    cta?: boolean;
} & Exclude<ButtonProps, 'color'>;

interface Props$8 {
    children: React$1.ReactNode;
    inverted?: boolean;
}
declare const Header: React$1.FunctionComponent<Props$8> & {
    Brand: React$1.FunctionComponent<ChildrenOnlyProps>;
    Menu: React$1.FunctionComponent<ChildrenOnlyProps>;
    MenuItem: React$1.FunctionComponent<HeaderMenuItemProps>;
    Message: React$1.FunctionComponent<HeaderMessageProps>;
    NavContainer: React$1.FunctionComponent<HeaderNavContainerProps>;
    PrimaryNav: React$1.FunctionComponent<HeaderPrimaryNavProps>;
};
interface HeaderPrimaryNavProps extends ChildrenOnlyProps {
    gutter?: boolean;
}
interface HeaderMessageProps {
    children: React$1.ReactNode;
    color?: Colors;
}

interface ListItemProps {
    children: React$1.ReactNode;
}

interface Props$7 {
    children: React$1.ReactNode;
}
declare const List: React$1.FunctionComponent<Props$7> & {
    Item: React$1.FunctionComponent<ListItemProps>;
};

interface _Props$1 {
    fixedSize?: 'regular';
}
declare type ModalContentProps = _Props$1 & ChildrenOnlyProps;

declare const Modal: React$1.FunctionComponent<ChildrenOnlyProps> & {
    Content: React$1.FunctionComponent<ModalContentProps>;
    Opener: React$1.FunctionComponent<ModalOpenerProps>;
    Title: React$1.FunctionComponent<ChildrenOnlyProps>;
};
declare type ModalOpenerProps = ChildrenOnlyProps;
declare function useModalControl(): (state: boolean) => void;

declare function withModal<T>(Component: React$1.FunctionComponent<T>): (props: T) => JSX.Element;

declare const OutboundLink: React$1.FunctionComponent<Props$h>;

interface SectionActionProps {
    children: React$1.ReactNode;
}

interface SectionHeaderProps {
    children: React$1.ReactNode;
}

declare const Section: React$1.FunctionComponent<{
    children: React$1.ReactNode;
}> & {
    Action: React$1.FunctionComponent<SectionActionProps>;
    Header: React$1.FunctionComponent<SectionHeaderProps>;
};

declare type ChildrenOnlyComponent = React.FunctionComponent<ChildrenOnlyProps>;

declare type TableBodyCellProps = ChildrenOnlyProps;

declare type HeaderCellProps = {
    children?: React$1.ReactNode;
    width?: `${number}%` | `${number}px`;
};

declare const Table: ChildrenOnlyComponent & {
    Body: ChildrenOnlyComponent & {
        Cell: React$1.FunctionComponent<TableBodyCellProps>;
        Row: ChildrenOnlyComponent;
    };
    Header: ChildrenOnlyComponent & {
        Cell: React$1.FunctionComponent<HeaderCellProps>;
    };
};

declare type DesiredInputProps = 'onChange' | 'onKeyUp' | 'onKeyDown' | 'disabled' | 'id' | 'placeholder' | 'autoFocus' | 'value';

declare type Help = string | {
    color: Colors;
    text: string;
};
interface WrapperProps {
    action?: React$1.ReactNode;
    borderRadius?: boolean;
    children: React$1.ReactNode;
    help?: Help;
    htmlFor?: string;
    label?: string | React$1.ReactNode;
    prefix?: string;
}

declare type FormColorProps = Pick<React$1.InputHTMLAttributes<HTMLInputElement>, DesiredInputProps> & Omit<WrapperProps, 'children' | 'htmlFor' | 'prefix' | 'action'>;

declare type FormInputProps = Omit<React$1.InputHTMLAttributes<HTMLInputElement>, 'type'> & Omit<WrapperProps, 'children' | 'htmlFor'>;

declare type FormTextareaProps = Omit<React$1.TextareaHTMLAttributes<HTMLTextAreaElement>, 'type'> & Omit<WrapperProps, 'children' | 'htmlFor' | 'prefix' | 'action'>;

interface Props$6 extends ChildrenOnlyProps {
    onReset: () => void;
    onSubmit: () => Promise<any>;
}
declare const Form: React$1.FunctionComponent<Props$6> & {
    Buttons: React$1.FunctionComponent<Record<string, never>>;
    Color: React$1.FunctionComponent<FormColorProps>;
    ErrorMessage: React$1.FunctionComponent<ChildrenOnlyProps>;
    Input: React$1.FunctionComponent<FormInputProps>;
    InputWrapper: React$1.FunctionComponent<WrapperProps>;
    Textarea: React$1.FunctionComponent<FormTextareaProps>;
};

declare type AlignType = 'left' | 'right' | 'center';
interface BaseProps {
    align?: AlignType;
    children?: React$1.ReactNode;
    direction: 'horizontal' | 'vertical';
    reverse?: boolean;
}
declare type PropsSeparate = BaseProps & {
    style?: 'separate';
};
declare type PropsStack = BaseProps & {
    gap?: SpacingValues;
    style?: 'stack';
};
declare type Props$5 = PropsSeparate | PropsStack;
declare const Flow: React$1.FunctionComponent<Props$5>;

declare type I = Extract<Size, 'regular' | 'none'>;
declare type GutterSize = ForBreakpoints<I, 'desktop' | 'mobile'>;
interface Props$4 extends PropsWithChildren {
    size?: GutterSize;
}
declare const Gutter: React$1.FunctionComponent<Props$4>;

interface Props$3 {
    children: React$1.ReactNode;
    footer?: React$1.ReactNode;
    header?: React$1.ReactNode;
}
declare const Page: React$1.FunctionComponent<Props$3>;

interface PlankWrapperProps {
    background?: Colors;
    backgroundTint?: Tint;
    trimmedTop?: Extract<SpacingValues, BlockSpacing>;
}
interface _Props {
    children: React$1.ReactNode;
}
declare type Props$2 = _Props & PlankWrapperProps;
declare const PlankWrapper: React$1.FunctionComponent<Props$2>;

interface HeadlineContentProps {
    children: React$1.ReactNode;
}

interface HeadlineCTAProps {
    _containerColor?: Colors;
    children: React$1.ReactNode;
    href?: string;
}

interface Props$1 extends PlankWrapperProps {
    alignment?: 'left' | 'right' | 'center';
    children?: React$1.ReactNode;
    heirarchy?: Heirarcy;
    title: React$1.ReactNode | string;
}
declare const Headline: React$1.FunctionComponent<Props$1> & {
    CTA: React$1.FunctionComponent<HeadlineCTAProps>;
    Content: React$1.FunctionComponent<HeadlineContentProps>;
};

interface _BaseProps {
    children: React$1.ReactNode;
    title: string;
}
interface _WithImageProps {
    imageUrl: string;
}
interface _WithIconProps {
    icon: IconProp;
}
declare type MultiBlockChunkProps = _BaseProps & (_WithImageProps | _WithIconProps);

interface Props extends PlankWrapperProps {
    children: React$1.ReactNode;
}
declare const MultiBlock: React$1.FunctionComponent<Props> & {
    Chunk: FunctionComponent<MultiBlockChunkProps>;
};

export { Block$1 as Block, Body, Breadcrumbs, Button, ButtonProps, Buttons, Callout, Caption, Colors, Copyable, Details, Emphasized, Flow, Footer, Form, Gutter, Header, Heading, Headline, Label, Link, List, Loading, Modal, MultiBlock, OutboundLink, Page, PlankWrapper, Section, Subheader, Table, Text3 as Text, Title, block, resolveColorValue, useLoading, useModalControl, withLoading, withModal };
