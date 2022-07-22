var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useContext } from 'react';
import { breakpoint } from '../atoms/breakpoints';
import { resolveColorValue, } from '../atoms/colors';
var defaultColor = {
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
var defaultTheme = {
    backgroundColor: __assign({}, defaultColor),
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
    textColor: __assign(__assign({}, defaultColor), { text: 'black' }),
};
export var ThemeContext = React.createContext(defaultTheme);
export var ThemeProvider = ThemeContext.Provider;
export var useTheme = function () { return useContext(ThemeContext); };
/*
 * @deprecated
 */
export function useBackgroundColor(color) {
    var theme = useTheme();
    return theme.backgroundColor[color];
}
/**
 * @deprecated
 */
export function useBackground(color) {
    if (!color) {
        return {
            backgroundColor: 'inherit',
            color: 'inherit',
        };
    }
    var theme = useTheme();
    return {
        backgroundColor: resolveColorValue(theme.backgroundColor[color]),
        color: resolveColorValue(theme.backgroundTextColor[color]),
    };
}
export function useTextColor(color) {
    var theme = useTheme();
    if (!color) {
        return 'inherit';
    }
    return theme.textColor[color || 'text'];
}
