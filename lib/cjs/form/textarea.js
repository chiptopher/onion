"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.FormTextarea = void 0;
var react_1 = __importDefault(require("react"));
var wrapper_1 = require("./wrapper");
var FormTextarea = function (_a) {
    var onChange = _a.onChange, disabled = _a.disabled, id = _a.id, placeholder = _a.placeholder, value = _a.value, _b = _a.rows, rows = _b === void 0 ? 4 : _b, wrapperProps = __rest(_a, ["onChange", "disabled", "id", "placeholder", "value", "rows"]);
    return (react_1.default.createElement(wrapper_1.Wrapper, __assign({}, wrapperProps, { htmlFor: id }),
        react_1.default.createElement("textarea", { className: "input", disabled: disabled, id: id, onChange: onChange, placeholder: placeholder, rows: rows, value: value })));
};
exports.FormTextarea = FormTextarea;
exports.FormTextarea.displayName = 'Form.TextArea';
