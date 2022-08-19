"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Copyable = exports.CopyableContext = void 0;
var react_1 = __importStar(require("react"));
var block_1 = require("../../atoms/block");
var body_1 = require("../../blocks/typography/body");
var flow_1 = require("../../layout/flow");
var action_1 = require("./action");
exports.CopyableContext = react_1.default.createContext({ copied: false, setCopied: console.log });
var Copyable = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), copied = _b[0], setCopied = _b[1];
    return (react_1.default.createElement(exports.CopyableContext.Provider, { value: { copied: copied, setCopied: setCopied } },
        react_1.default.createElement("span", { className: "copyable" },
            react_1.default.createElement(block_1.Block, { borderRadius: true, color: "light", colorTint: "dark", padding: "0.25" },
                react_1.default.createElement(flow_1.Flow, { direction: "horizontal", style: "separate" }, children)))));
};
exports.Copyable = Copyable;
var CopyableContent = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("span", { className: "copyable-content" },
        react_1.default.createElement(block_1.Block, { tagName: "span" },
            react_1.default.createElement(body_1.Body, null, children))));
};
CopyableContent.displayName = 'Copyable.Content';
exports.Copyable.Content = CopyableContent;
exports.Copyable.Action = action_1.CopyableAction;
