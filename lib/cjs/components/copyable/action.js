"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconAction = exports.CopyableAction = void 0;
var react_1 = __importDefault(require("react"));
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var _1 = require(".");
var block_1 = require("../../atoms/block");
var body_1 = require("../../blocks/typography/body");
var caption_1 = require("../../blocks/typography/caption");
var CopyableAction = function (_a) {
    var style = _a.style;
    var _b = react_1.default.useContext(_1.CopyableContext), id = _b.id, setCopied = _b.setCopied;
    var onClick = function () {
        var copyText = document.getElementById(id);
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
    return react_1.default.createElement(block_1.Block, { marginRight: "0.5" }, body());
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
