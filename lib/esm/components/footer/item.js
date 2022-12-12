import React from 'react';
import { Block, Body } from '../..';
export var FooterItem = function (_a) {
    var children = _a.children;
    return (React.createElement(Block, { cursor: "pointer", marginBottom: "0.25", tagName: "li", textDecoration: "underline" },
        React.createElement(Body, null, children)));
};
