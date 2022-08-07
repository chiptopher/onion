"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterCopyright = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var FooterCopyright = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(__1.Block, { marginBottom: "0.75" },
        react_1.default.createElement(__1.Caption, null,
            "\u00A9 ",
            new Date().getFullYear(),
            " ",
            children)));
};
exports.FooterCopyright = FooterCopyright;
