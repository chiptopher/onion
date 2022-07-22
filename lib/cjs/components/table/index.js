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
var __1 = require("../..");
var colors_1 = require("../../atoms/colors");
var theme_1 = require("../../theme");
var body_1 = require("./body");
var header_1 = require("./header");
var Table = function (_a) {
    var children = _a.children;
    var theme = (0, theme_1.useTheme)();
    return (react_1.default.createElement(Container, { oddRowBackgroundColor: (0, colors_1.resolveColorValue)(theme.base.grey) }, children));
};
exports.Table = Table;
var Container = styled_components_1.default.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-collapse: collapse;\n    table-layout: fixed;\n\n    thead {\n        th {\n            border-bottom: solid 1px black;\n            padding-right: ", ";\n        }\n    }\n\n    tbody {\n        vertical-align: top;\n\n        tr:nth-child(even) {\n            background-color: ", ";\n        }\n    }\n"], ["\n    border-collapse: collapse;\n    table-layout: fixed;\n\n    thead {\n        th {\n            border-bottom: solid 1px black;\n            padding-right: ", ";\n        }\n    }\n\n    tbody {\n        vertical-align: top;\n\n        tr:nth-child(even) {\n            background-color: ", ";\n        }\n    }\n"])), (0, __1.block)(3), function (p) { return p.oddRowBackgroundColor; });
exports.Table.Header = header_1.TableHeader;
exports.Table.Body = body_1.TableBody;
var templateObject_1;
