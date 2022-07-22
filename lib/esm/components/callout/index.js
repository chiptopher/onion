import React from 'react';
import { Block } from '../../atoms/block';
export var Callout = function (_a) {
    var children = _a.children, color = _a.color;
    return (React.createElement(Block, { borderRadius: true, color: color, padding: "1", tagName: "div" }, children));
};
