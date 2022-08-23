"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuContentContext = exports.HeaderContext = void 0;
var react_1 = __importDefault(require("react"));
exports.HeaderContext = react_1.default.createContext({
    inverted: false,
});
exports.MenuContentContext = react_1.default.createContext({
    setContent: console.log,
    setVisible: console.log,
});
