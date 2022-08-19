"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalOpener = exports.Modal = void 0;
var react_1 = __importDefault(require("react"));
var content_1 = require("./content");
var contex_1 = require("./contex");
var Modal = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(contex_1.ModalProvider, null, children)));
};
exports.Modal = Modal;
var ModalOpener = function (_a) {
    var children = _a.children;
    var setOpen = react_1.default.useContext(contex_1.ModalContext).setOpen;
    return react_1.default.createElement("div", { onClick: setOpen }, children);
};
exports.ModalOpener = ModalOpener;
exports.ModalOpener.displayName = 'Modal.Opener';
exports.Modal.Content = content_1.ModalContent;
exports.Modal.Opener = exports.ModalOpener;
