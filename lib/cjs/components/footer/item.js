"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterItem = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var FooterItem = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(__1.Block, { cursor: "pointer", marginBottom: "0.25", tagName: "li", textDecoration: "underline" },
        react_1.default.createElement(__1.Body, null, children)));
};
exports.FooterItem = FooterItem;
