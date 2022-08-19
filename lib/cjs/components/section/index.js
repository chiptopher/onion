"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
var react_1 = __importDefault(require("react"));
var block_1 = require("../../atoms/block");
var action_1 = require("./action");
var header_1 = require("./header");
var Section = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(block_1.Block, { marginBottom: "3" }, children);
};
exports.Section = Section;
exports.Section.Header = header_1.SectionHeader;
exports.Section.Action = action_1.SectionAction;
