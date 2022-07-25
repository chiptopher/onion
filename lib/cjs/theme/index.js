"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTextColor = exports.useBackground = exports.useBackgroundColor = exports.useTheme = exports.ThemeProvider = exports.ThemeContext = void 0;
var react_1 = __importStar(require("react"));
var breakpoints_1 = require("../atoms/breakpoints");
var colors_1 = require("../atoms/colors");
var defaultColor = {
    danger: {
        dark: '#86281E',
        light: '#FF8679',
        regular: '#e74c3c',
    },
    light: '#efefef',
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
        danger: 'white',
        light: 'black',
        primary: 'white',
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
        desktop: (0, breakpoints_1.breakpoint)(1025, 1440),
        mobile: (0, breakpoints_1.breakpoint)(0, 425),
        tablet: (0, breakpoints_1.breakpoint)(426, 1024),
        wide: (0, breakpoints_1.breakpoint)(1441, Infinity),
    },
    textColor: __assign(__assign({}, defaultColor), { text: 'black' }),
};
exports.ThemeContext = react_1.default.createContext(defaultTheme);
exports.ThemeProvider = exports.ThemeContext.Provider;
var useTheme = function () { return (0, react_1.useContext)(exports.ThemeContext); };
exports.useTheme = useTheme;
/**
 * @deprecated
 */
function useBackgroundColor(color) {
    var theme = (0, exports.useTheme)();
    return theme.backgroundColor[color];
}
exports.useBackgroundColor = useBackgroundColor;
/**
 * @deprecated
 */
function useBackground(color) {
    if (!color) {
        return {
            backgroundColor: 'inherit',
            color: 'inherit',
        };
    }
    var theme = (0, exports.useTheme)();
    return {
        backgroundColor: (0, colors_1.resolveColorValue)(theme.backgroundColor[color]),
        color: (0, colors_1.resolveColorValue)(theme.backgroundTextColor[color]),
    };
}
exports.useBackground = useBackground;
function useTextColor(color) {
    var theme = (0, exports.useTheme)();
    if (!color) {
        return 'inherit';
    }
    return theme.textColor[color || 'text'];
}
exports.useTextColor = useTextColor;
