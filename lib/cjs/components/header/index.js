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
exports.HeaderBrand = exports.HeaderMessage = exports.HeaderPrimaryNav = exports.Header = void 0;
/* eslint-disable react/display-name */
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var __1 = require("../..");
var context_1 = require("./context");
var menu_1 = require("./menu");
var Header = function (_a) {
    var children = _a.children, inverted = _a.inverted;
    var _b = react_1.default.useState(), content = _b[0], setContent = _b[1];
    var _c = react_1.default.useState(), visible = _c[0], setVisible = _c[1];
    return (react_1.default.createElement(context_1.MenuContentContext.Provider, { value: { content: content, setContent: setContent, setVisible: setVisible, visible: visible } },
        react_1.default.createElement(context_1.HeaderContext.Provider, { value: { inverted: Boolean(inverted) } },
            react_1.default.createElement(__1.Block, { marginBottom: "1.5", tagName: "header" }, children))));
};
exports.Header = Header;
var HeaderPrimaryNav = function (_a) {
    var children = _a.children;
    var inverted = react_1.default.useContext(context_1.HeaderContext).inverted;
    var _b = react_1.default.useContext(context_1.MenuContentContext), content = _b.content, visible = _b.visible;
    return (react_1.default.createElement(__1.Block, { color: inverted ? 'white' : 'primary', tagName: "div" },
        react_1.default.createElement(Container, null, children),
        content && (react_1.default.createElement(__1.Block, { display: visible ? undefined : 'none', paddingBottom: "1" },
            react_1.default.createElement(MobileNavContainer, { className: "mobile-header-menu" }, content)))));
};
exports.HeaderPrimaryNav = HeaderPrimaryNav;
exports.HeaderPrimaryNav.displayName = 'Header.PrimaryNav';
var MobileNavContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    .header-menu-start,\n    .header-menu-end {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n"], ["\n    .header-menu-start,\n    .header-menu-end {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n"])));
var Container = styled_components_1.default.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    padding: ", " ", ";\n\n    .header-brand {\n        display: flex;\n        align-items: center;\n        white-space: nowrap;\n\n        * {\n            margin-right: ", ";\n        }\n    }\n"], ["\n    display: flex;\n    padding: ", " ", ";\n\n    .header-brand {\n        display: flex;\n        align-items: center;\n        white-space: nowrap;\n\n        * {\n            margin-right: ", ";\n        }\n    }\n"])), (0, __1.block)(1), (0, __1.block)(3), (0, __1.block)(2));
var HeaderMessage = function (_a) {
    var children = _a.children, color = _a.color;
    return (react_1.default.createElement(__1.Block, { color: color, colorTint: "light", paddingBottom: "0.5", paddingLeft: "1.5", paddingRight: "1.5", paddingTop: "0.5" }, children));
};
exports.HeaderMessage = HeaderMessage;
exports.HeaderMessage.displayName = 'Header.Message';
var HeaderBrand = function (props) { return react_1.default.createElement("a", __assign({ className: "header-brand" }, props)); };
exports.HeaderBrand = HeaderBrand;
exports.HeaderBrand.displayName = 'Header.Brand';
exports.Header.Brand = exports.HeaderBrand;
exports.Header.NavContainer = menu_1.HeaderNavContainer;
exports.Header.Menu = menu_1.HeaderMenu;
exports.Header.MenuItem = menu_1.HeaderMenuItem;
exports.Header.PrimaryNav = exports.HeaderPrimaryNav;
exports.Header.Message = exports.HeaderMessage;
var templateObject_1, templateObject_2;
