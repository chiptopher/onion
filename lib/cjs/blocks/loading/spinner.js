"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingSpinner = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var __1 = require("../..");
var contex_1 = require("./contex");
var LoadingSpinner = function (_a) {
    var children = _a.children;
    var loading = (0, contex_1.useLoading)()[0];
    if (loading) {
        return react_1.default.createElement(Dots, null);
    }
    else {
        return react_1.default.createElement(react_1.default.Fragment, null, children);
    }
};
exports.LoadingSpinner = LoadingSpinner;
var Dots = function () {
    var _a = react_1.default.useState(1), dots = _a[0], setDots = _a[1];
    react_1.default.useEffect(function () {
        var interval = setInterval(function () {
            setDots(dots + 1);
            if (dots >= 10) {
                setDots(1);
            }
        }, 250);
        return function () { return clearInterval(interval); };
    }, [dots, setDots]);
    return (react_1.default.createElement(__1.Body, null,
        react_1.default.createElement(Container, null,
            dots > 0 && react_1.default.createElement("span", null, "\u2022"),
            dots > 1 && react_1.default.createElement("span", null, "\u2022"),
            dots > 2 && react_1.default.createElement("span", null, "\u2022"))));
};
var Container = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    span {\n        margin-right: ", ";\n    }\n"], ["\n    span {\n        margin-right: ", ";\n    }\n"])), (0, __1.block)(1));
exports.LoadingSpinner.displayName = 'Loading.Spinner';
var templateObject_1;
