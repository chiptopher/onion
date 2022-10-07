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
import React from 'react';
import { Block } from '../../atoms/block';
import { Text2 } from '../typography/text';
export var Button = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'button' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, _d = _a.size, size = _d === void 0 ? 'regular' : _d, children = _a.children, href = _a.href, onClick = _a.onClick;
    var p;
    var tagName = href ? 'a' : 'button';
    switch (size) {
        case 'large':
            p = {
                paddingBottom: '1',
                paddingLeft: '1.5',
                paddingRight: '1.5',
                paddingTop: '1',
            };
            break;
        case 'regular':
            p = {
                paddingBottom: '0.75',
                paddingLeft: '1',
                paddingRight: '1',
                paddingTop: '0.75',
            };
            break;
        case 'small':
            p = {
                paddingBottom: '0.5',
                paddingLeft: '0.75',
                paddingRight: '0.75',
                paddingTop: '0.5',
            };
            break;
    }
    return (React.createElement(Block, __assign({ border: "none", borderRadius: true, color: color, colorHover: color, colorTintHover: "dark", cursor: "pointer" }, p, { href: href, onClick: onClick, tagName: tagName, textDecoration: "none", type: type }),
        React.createElement(Text2, { style: "label", tagName: "span" }, children)));
};
