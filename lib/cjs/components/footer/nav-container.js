"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavContainer = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var NavContainer = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(__1.Block, { marginBottom: "2", tagName: "nav" },
        react_1.default.createElement(__1.Block, { listStyleType: "none", margin: "0", padding: "0", tagName: "ol" }, children)));
};
exports.NavContainer = NavContainer;
