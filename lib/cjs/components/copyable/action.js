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
exports.IconAction = exports.CopyableAction = void 0;
var react_1 = __importStar(require("react"));
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var _1 = require(".");
var block_1 = require("../../atoms/block");
var body_1 = require("../../blocks/typography/body");
var caption_1 = require("../../blocks/typography/caption");
var CopyableAction = function (_a) {
    var style = _a.style;
    var ref = (0, react_1.useRef)(null);
    var setCopied = react_1.default.useContext(_1.CopyableContext).setCopied;
    var onClick = function () {
        var _a, _b;
        var copyText = (_b = (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.closest('.copyable')) === null || _b === void 0 ? void 0 : _b.querySelector('.copyable-content');
        console.log(ref.current);
        console.log(copyText);
        if (copyText) {
            navigator.clipboard.writeText(copyText.textContent || '');
        }
        setCopied(true);
    };
    var body = function () {
        switch (style) {
            case 'text':
                return react_1.default.createElement(TextAction, { onClick: onClick });
            case 'icon':
                return react_1.default.createElement(exports.IconAction, { onClick: onClick });
        }
    };
    return (react_1.default.createElement("span", { ref: ref },
        react_1.default.createElement(block_1.Block, { marginRight: "0.5" }, body())));
};
exports.CopyableAction = CopyableAction;
exports.CopyableAction.displayName = 'Copyable.Action';
var TextAction = function (_a) {
    var onClick = _a.onClick;
    var copied = react_1.default.useContext(_1.CopyableContext).copied;
    return (react_1.default.createElement(caption_1.Caption, { color: "primary" }, copied ? (react_1.default.createElement("span", null, "Copied!")) : (react_1.default.createElement(block_1.Block, { border: "none", cursor: "pointer", onClick: onClick, tagName: "button", type: "button" }, "Copy"))));
};
var IconAction = function (_a) {
    var onClick = _a.onClick;
    var copied = react_1.default.useContext(_1.CopyableContext).copied;
    return (react_1.default.createElement(body_1.Body, { color: "primary" }, copied ? (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCheck })) : (react_1.default.createElement(block_1.Block, { border: "none", cursor: "pointer", onClick: onClick, tagName: "button", type: "button" },
        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCopy })))));
};
exports.IconAction = IconAction;
