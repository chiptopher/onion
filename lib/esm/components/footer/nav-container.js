import React from 'react';
import { Block } from '../..';
export var NavContainer = function (_a) {
    var children = _a.children;
    return (React.createElement(Block, { marginBottom: "2", tagName: "nav" },
        React.createElement(Block, { listStyleType: "none", margin: "0", padding: "0", tagName: "ol" }, children)));
};
