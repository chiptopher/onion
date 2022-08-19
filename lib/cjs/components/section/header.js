"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionHeader = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("../../");
var SectionHeader = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(__1.Block, { marginBottom: "1" },
        react_1.default.createElement(__1.Flow, { direction: "horizontal", style: "separate" }, children)));
};
exports.SectionHeader = SectionHeader;
exports.SectionHeader.displayName = 'Section.Header';
