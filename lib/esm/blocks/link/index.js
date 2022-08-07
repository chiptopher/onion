import React from 'react';
import { Block } from '../../atoms/block';
export var Link = function (_a) {
    var _b = _a.tagName, tagName = _b === void 0 ? 'a' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, children = _a.children, href = _a.href;
    return (React.createElement(Block, { cursor: "pointer", href: href, tagName: tagName, textColor: color, textDecoration: "underline" }, children));
};
