"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var __1 = require("../..");
var colors_1 = require("../../atoms/colors");
var theme_1 = require("../../theme");
var copyright_1 = require("./copyright");
var favor_1 = require("./favor");
var item_1 = require("./item");
var nav_container_1 = require("./nav-container");
var title_1 = require("./title");
var Footer = function (_a) {
    var children = _a.children;
    var theme = (0, theme_1.useTheme)();
    return (react_1.default.createElement(Container, { bc: (0, colors_1.resolveColorValue)(theme.base.grey, 'light') }, children));
};
exports.Footer = Footer;
var Container = styled_components_1.default.footer(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    padding: ", " 0 ", ";\n    text-align: center;\n"], ["\n    background-color: ", ";\n    padding: ", " 0 ", ";\n    text-align: center;\n"])), function (props) { return props.bc; }, (0, __1.block)(6), (0, __1.block)(3));
exports.Footer.Item = item_1.FooterItem;
exports.Footer.Flavor = favor_1.FooterFlavor;
exports.Footer.Copyright = copyright_1.FooterCopyright;
exports.Footer.Title = title_1.FooterTitle;
// eslint-disable-next-line react/display-name
exports.Footer.Nav = function (props) { return react_1.default.createElement(nav_container_1.NavContainer, __assign({}, props)); };
var templateObject_1;
