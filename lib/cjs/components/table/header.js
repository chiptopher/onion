"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHeader = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = require("../../atoms/colors");
var theme_1 = require("../../theme");
var header_cell_1 = require("./header-cell");
var TableHeader = function (_a) {
    var children = _a.children;
    var theme = (0, theme_1.useTheme)();
    return (react_1.default.createElement(Container, { color: (0, colors_1.resolveColorValue)(theme.base.grey) },
        react_1.default.createElement("tr", null, children)));
};
exports.TableHeader = TableHeader;
var Container = styled_components_1.default.thead(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.TableHeader.Cell = header_cell_1.TableHeaderCell;
var templateObject_1;
