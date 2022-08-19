"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterFlavor = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var FooterFlavor = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(__1.Block, { marginBottom: "0.75" },
        react_1.default.createElement(__1.Caption, null, children)));
};
exports.FooterFlavor = FooterFlavor;
