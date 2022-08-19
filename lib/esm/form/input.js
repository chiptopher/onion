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
import React from 'react';
import { Wrapper } from './wrapper';
export var FormInput = function (_a) {
    var onChange = _a.onChange, disabled = _a.disabled, id = _a.id, placeholder = _a.placeholder, value = _a.value, wrapperProps = __rest(_a, ["onChange", "disabled", "id", "placeholder", "value"]);
    return (React.createElement(Wrapper, __assign({}, wrapperProps, { htmlFor: id }),
        React.createElement("input", { disabled: disabled, id: id, onChange: onChange, placeholder: placeholder, type: "text", value: value })));
};
FormInput.displayName = 'Form.Input';
