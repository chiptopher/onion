"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormButtons = void 0;
var react_1 = __importDefault(require("react"));
var button_1 = require("../blocks/button");
var loading_1 = require("../blocks/loading");
var buttons_1 = require("../components/buttons");
var FormButtons = function () { return (react_1.default.createElement(buttons_1.Buttons, null,
    react_1.default.createElement(button_1.Button, { type: "reset" }, "Cancel"),
    react_1.default.createElement(button_1.Button, { type: "submit" },
        react_1.default.createElement(loading_1.Loading.Spinner, null, "Submit")))); };
exports.FormButtons = FormButtons;
exports.FormButtons.displayName = 'Form.Buttons';
