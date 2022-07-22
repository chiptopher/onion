"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalProvider = exports.ModalContext = void 0;
var react_1 = __importDefault(require("react"));
exports.ModalContext = react_1.default.createContext({
    open: false,
    setClosed: console.log,
    setOpen: console.log,
});
var ModalProvider = function (props) {
    var _a = react_1.default.useState(false), open = _a[0], setOpen = _a[1];
    return (react_1.default.createElement(exports.ModalContext.Provider, { value: {
            open: open,
            setClosed: function () { return setOpen(false); },
            setOpen: function () { return setOpen(true); },
        } }, props.children));
};
exports.ModalProvider = ModalProvider;
