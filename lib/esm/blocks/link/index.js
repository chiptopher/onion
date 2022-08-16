import React from 'react';
import { Block } from '../../atoms/block';
export var Link = React.forwardRef(function (_a, ref) {
    var _b = _a.tagName, tagName = _b === void 0 ? 'a' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, children = _a.children, href = _a.href, onClick = _a.onClick;
    return (React.createElement(Block, { cursor: "pointer", href: href, onClick: onClick, ref: ref, tagName: tagName, textColor: color, textDecoration: "underline" }, children));
});
Link.displayName = 'Link';
