import React, { useContext } from 'react';

import { breakpoint, Breakpoints } from '../atoms/breakpoints';
import {
    ColorMapping,
    Colors,
    ColorValue,
    resolveColorValue,
} from '../atoms/colors';

const defaultColor: ColorMapping = {
    danger: '#e74c3c',
    light: '#fff',
    primary: {
        dark: '#1b98b1',
        light: '#bcecf5',
        regular: '#48cae4',
    },
    text: 'transparent',
    warning: '#f1c40f',
};

export type Theme = {
    backgroundColor: ColorMapping;
    backgroundTextColor: ColorMapping;
    base: {
        grey: ColorValue;
    };
    breakpoints: Breakpoints;
    textColor: ColorMapping;
};

const defaultTheme: Theme = {
    backgroundColor: {
        ...defaultColor,
    },
    backgroundTextColor: {
        danger: defaultColor.light,
        light: 'black',
        primary: defaultColor.light,
        text: 'black',
        warning: 'black',
    },
    base: {
        grey: {
            dark: '#5A5C5C',
            light: '#fafafa',
            regular: '#efefef',
        },
    },
    breakpoints: {
        desktop: breakpoint(1025, 1440),
        mobile: breakpoint(0, 425),
        tablet: breakpoint(426, 1024),
        wide: breakpoint(1441, Infinity),
    },
    textColor: {
        ...defaultColor,
        text: 'black',
    },
};

export const ThemeContext = React.createContext<Theme>(defaultTheme);
export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => useContext(ThemeContext);

/*
 * @deprecated
 */
export function useBackgroundColor(color: Colors) {
    const theme = useTheme();
    return theme.backgroundColor[color];
}

/**
 * @deprecated
 */
export function useBackground(color?: Colors): {
    backgroundColor: string;
    color: string;
} {
    if (!color) {
        return {
            backgroundColor: 'inherit',
            color: 'inherit',
        };
    }
    const theme = useTheme();
    return {
        backgroundColor: resolveColorValue(theme.backgroundColor[color]),
        color: resolveColorValue(theme.backgroundTextColor[color]),
    };
}

export function useTextColor(color?: Colors) {
    const theme = useTheme();
    if (!color) {
        return 'inherit';
    }
    return theme.textColor[color || 'text'];
}
