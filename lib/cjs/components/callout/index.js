"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Callout = void 0;
var react_1 = __importDefault(require("react"));
var block_1 = require("../../atoms/block");
var Callout = function (_a) {
    var children = _a.children, color = _a.color;
    return (react_1.default.createElement(block_1.Block, { borderRadius: true, color: color, padding: "1", tagName: "div" }, children));
};
exports.Callout = Callout;
