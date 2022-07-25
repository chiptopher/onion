import React from 'react';
import { Breakpoints } from '../atoms/breakpoints';
import { ColorMapping, Colors, ColorValue } from '../atoms/colors';
export declare type Theme = {
    backgroundColor: ColorMapping;
    backgroundTextColor: ColorMapping;
    base: {
        grey: ColorValue;
    };
    breakpoints: Breakpoints;
    textColor: ColorMapping;
};
export declare const ThemeContext: React.Context<Theme>;
export declare const ThemeProvider: React.Provider<Theme>;
export declare const useTheme: () => Theme;
/**
 * @deprecated
 */
export declare function useBackgroundColor(color: Colors): ColorValue;
/**
 * @deprecated
 */
export declare function useBackground(color?: Colors): {
    backgroundColor: string;
    color: string;
};
export declare function useTextColor(color?: Colors): ColorValue;
