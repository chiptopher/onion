var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Block } from '../../atoms/block';
export var Flow = function (_a) {
    var children = _a.children, direction = _a.direction, rest = __rest(_a, ["children", "direction"]);
    var justifyContent;
    switch (rest.style) {
        case 'separate':
            justifyContent = 'space-between';
            break;
        default:
            break;
    }
    return (React.createElement(Block, { alignItems: "center", display: "flex", flexDirection: direction === 'horizontal' ? 'row' : 'column', justifyContent: justifyContent }, children));
};
