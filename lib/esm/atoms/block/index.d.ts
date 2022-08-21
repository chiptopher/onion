import React from 'react';
import { Colors, Tint } from '../colors';
import { Percents, Pixels, REMs, TagName } from '../types';
import { ColorProps, Hoverable } from './types';
export declare type JustifyContent = 'space-between' | 'center';
interface _Props {
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    borderRadius?: boolean;
    children: React.ReactNode;
    cursor?: 'pointer';
    display?: 'flex';
    flexDirection?: 'column' | 'row';
    href?: string;
    id?: string;
    justifyContent?: JustifyContent;
    listStyleType?: 'none';
    tagName?: TagName;
    textAlign?: 'left' | 'right' | 'center';
    textColor?: Colors;
    textColorTint?: Tint;
    textDecoration?: 'underline' | 'none';
    verticalAlign?: 'top';
    width?: Pixels | REMs | Percents;
}
declare type ButtonOnlyProps = {
    type?: 'reset' | 'button' | 'submit';
};
declare type HTMLTypes = Pick<React.ButtonHTMLAttributes<HTMLElement>, 'onClick'>;
export declare const Block: React.ForwardRefExoticComponent<_Props & Partial<Hoverable<import("../util").Mapping<"border" | "borderBottom" | "borderLeft" | "borderRight" | "borderTop", "none" | `none ${number}px ${string}` | `solid ${number}px ${string}`>>> & import("../util").Appended<Partial<Hoverable<import("../util").Mapping<"border" | "borderBottom" | "borderLeft" | "borderRight" | "borderTop", "none" | `none ${number}px ${string}` | `solid ${number}px ${string}`>>>, "LastChild"> & Partial<Hoverable<import("../util").Mapping<"padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop", import("./types").SpacingValues>>> & Partial<Hoverable<import("../util").Mapping<"margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop", import("./types").SpacingValues>>> & ButtonOnlyProps & ColorProps & import("../util").Appended<ColorProps, "Hover"> & HTMLTypes & React.RefAttributes<unknown>>;
export {};
