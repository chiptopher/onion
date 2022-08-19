"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockContainer = void 0;
var react_1 = __importDefault(require("react"));
var block_1 = require("../../atoms/block");
var BlockContainer = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(block_1.Block, { marginRight: "0.5", tagName: "span" }, children));
};
exports.BlockContainer = BlockContainer;
