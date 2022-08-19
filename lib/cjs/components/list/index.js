"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var item_1 = require("./item");
var List = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(Container, null, children);
};
exports.List = List;
var Container = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n"], ["\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n"])));
exports.List.Item = item_1.ListItem;
var templateObject_1;
