import React from 'react';
import { Block } from '../../atoms/block';
export var BlockContainer = function (_a) {
    var children = _a.children;
    return (React.createElement(Block, { marginRight: "0.5", tagName: "span" }, children));
};
