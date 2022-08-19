import React from 'react';
import { Block } from '../../atoms/block';
export var Callout = function (_a) {
    var children = _a.children, color = _a.color, _b = _a.tint, tint = _b === void 0 ? 'light' : _b;
    return (React.createElement(Block, { borderRadius: true, color: color, colorTint: tint, marginBottom: "1", padding: "1", tagName: "div" }, children));
};
