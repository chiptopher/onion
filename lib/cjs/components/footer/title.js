"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterTitle = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var FooterTitle = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(__1.Subheader, { heirarchy: "2" }, children);
};
exports.FooterTitle = FooterTitle;
