"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var react_1 = __importDefault(require("react"));
var block_1 = require("../../atoms/block");
exports.Link = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.tagName, tagName = _b === void 0 ? 'a' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, children = _a.children, href = _a.href, onClick = _a.onClick;
    return (react_1.default.createElement(block_1.Block, { cursor: "pointer", href: href, onClick: onClick, ref: ref, tagName: tagName, textColor: color, textDecoration: "underline" }, children));
});
exports.Link.displayName = 'Link';
