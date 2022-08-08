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
exports.Copyable = void 0;
var react_1 = __importStar(require("react"));
var block_1 = require("../../atoms/block");
var body_1 = require("../../blocks/typography/body");
var caption_1 = require("../../blocks/typography/caption");
var flow_1 = require("../../layout/flow");
var CopyableContext = react_1.default.createContext({ copied: false, id: '', setCopied: console.log });
var Copyable = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), copied = _b[0], setCopied = _b[1];
    var id = "copyable-".concat((Math.random() * 100).toFixed(0));
    return (react_1.default.createElement(CopyableContext.Provider, { value: { copied: copied, id: id, setCopied: setCopied } },
        react_1.default.createElement(block_1.Block, { borderRadius: true, color: "light", colorTint: "dark", padding: "0.25" },
            react_1.default.createElement(flow_1.Flow, { direction: "horizontal", style: "separate" }, children))));
};
exports.Copyable = Copyable;
var CopyableContent = function (_a) {
    var children = _a.children;
    var id = react_1.default.useContext(CopyableContext).id;
    return (react_1.default.createElement(block_1.Block, { id: id, tagName: "span" },
        react_1.default.createElement(body_1.Body, null, children)));
};
CopyableContent.displayName = 'Copyable.Content';
var CopyableAction = function () {
    var _a = react_1.default.useContext(CopyableContext), copied = _a.copied, id = _a.id, setCopied = _a.setCopied;
    return (react_1.default.createElement(block_1.Block, { marginRight: "0.5" },
        react_1.default.createElement(caption_1.Caption, { color: "primary" }, copied ? (react_1.default.createElement("span", null, "Copied!")) : (react_1.default.createElement(block_1.Block, { border: "none", onClick: function () {
                var copyText = document.getElementById(id);
                if (copyText) {
                    navigator.clipboard.writeText(copyText.textContent || '');
                }
                setCopied(true);
            }, tagName: "button", type: "button" }, "Copy")))));
};
CopyableAction.displayName = 'Copyable.Action';
exports.Copyable.Content = CopyableContent;
exports.Copyable.Action = CopyableAction;
