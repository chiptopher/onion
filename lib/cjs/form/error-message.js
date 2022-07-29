"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormErrorMessage = void 0;
var react_1 = __importDefault(require("react"));
var body_1 = require("../blocks/typography/body");
var callout_1 = require("../components/callout");
var FormErrorMessage = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(callout_1.Callout, { color: "danger" },
        react_1.default.createElement(body_1.Body, null, children)));
};
exports.FormErrorMessage = FormErrorMessage;
exports.FormErrorMessage.displayName = 'Form.ErrorMessage';
