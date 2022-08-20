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
exports.HeaderMenuItem = exports.HeaderNavContainer = exports.HeaderMenu = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var __1 = require("../..");
var context_1 = require("./context");
var HeaderMenu = function (props) {
    return react_1.default.createElement(Container, __assign({}, props));
};
exports.HeaderMenu = HeaderMenu;
exports.HeaderMenu.displayName = 'Header.Menu';
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n\n    .header-menu-end {\n        .menu-item {\n            margin-left: ", ";\n        }\n    }\n"], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n\n    .header-menu-end {\n        .menu-item {\n            margin-left: ", ";\n        }\n    }\n"])), (0, __1.block)(2));
var HeaderNavContainer = function (_a) {
    var side = _a.side, children = _a.children, rest = __rest(_a, ["side", "children"]);
    return (react_1.default.createElement("div", __assign({ className: "header-menu-".concat(side) }, rest), side === 'start'
        ? children
        : react_1.default.Children.toArray(children).map(function (child, index, array) {
            return react_1.default.cloneElement(child, {
                cta: index === array.length - 1,
            });
        })));
};
exports.HeaderNavContainer = HeaderNavContainer;
exports.HeaderNavContainer.displayName = 'Header.NavContainer';
var HeaderMenuItem = function (_a) {
    var _b = _a.contrasting, contrasting = _b === void 0 ? false : _b, cta = _a.cta, rest = __rest(_a, ["contrasting", "cta"]);
    var inverted = react_1.default.useContext(context_1.HeaderContext).inverted;
    var color;
    switch (true) {
        case inverted && !cta:
            color = 'text';
            break;
        case contrasting:
            color = 'light';
            break;
        case !contrasting:
            color = 'primary';
            break;
        default:
            color = undefined;
            break;
    }
    return (react_1.default.createElement("span", { className: "menu-item" },
        react_1.default.createElement(__1.Button, __assign({ color: color }, rest))));
};
exports.HeaderMenuItem = HeaderMenuItem;
exports.HeaderMenuItem.displayName = 'Header.MenuItem';
var templateObject_1;
