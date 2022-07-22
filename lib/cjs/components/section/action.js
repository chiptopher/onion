"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionAction = void 0;
var react_1 = __importDefault(require("react"));
var SectionAction = function (props) {
    return react_1.default.createElement("span", { className: "action" }, props.children);
};
exports.SectionAction = SectionAction;
