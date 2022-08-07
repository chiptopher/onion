"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var block_1 = require("../../atoms/block");
var body_1 = require("./body");
var header_1 = require("./header");
var Table = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(block_1.Block, { tagName: "table" }, children)));
};
exports.Table = Table;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    table {\n        border-collapse: collapse;\n        table-layout: fixed;\n        width: 100%;\n\n        tbody {\n            // TODO figure out how to do this in Block\n            tr:last-child {\n                td {\n                    border-style: none;\n                }\n            }\n        }\n    }\n"], ["\n    table {\n        border-collapse: collapse;\n        table-layout: fixed;\n        width: 100%;\n\n        tbody {\n            // TODO figure out how to do this in Block\n            tr:last-child {\n                td {\n                    border-style: none;\n                }\n            }\n        }\n    }\n"])));
exports.Table.Header = header_1.TableHeader;
exports.Table.Body = body_1.TableBody;
var templateObject_1;
