"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flow = void 0;
var react_1 = __importDefault(require("react"));
var block_1 = require("../../atoms/block");
var Flow = function (_a) {
    var children = _a.children, direction = _a.direction, rest = __rest(_a, ["children", "direction"]);
    var justifyContent;
    switch (rest.style) {
        case 'separate':
            justifyContent = 'space-between';
            break;
        default:
            break;
    }
    return (react_1.default.createElement(block_1.Block, { alignItems: "center", display: "flex", flexDirection: direction === 'horizontal' ? 'row' : 'column', justifyContent: justifyContent }, children));
};
exports.Flow = Flow;
