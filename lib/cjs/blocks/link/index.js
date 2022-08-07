"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var react_1 = __importDefault(require("react"));
var block_1 = require("../../atoms/block");
var Link = function (_a) {
    var _b = _a.tagName, tagName = _b === void 0 ? 'a' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, children = _a.children, href = _a.href;
    return (react_1.default.createElement(block_1.Block, { cursor: "pointer", href: href, tagName: tagName, textColor: color, textDecoration: "underline" }, children));
};
exports.Link = Link;
