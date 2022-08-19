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
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var styled_components_1 = __importDefault(require("styled-components"));
var contex_1 = require("./contex");
var LoadingSpinner = function (_a) {
    var children = _a.children;
    var loading = (0, contex_1.useLoading)()[0];
    if (loading) {
        return (react_1.default.createElement(Container, null,
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCircleNotch })));
    }
    else {
        return react_1.default.createElement(react_1.default.Fragment, null, children);
    }
};
exports.LoadingSpinner = LoadingSpinner;
exports.LoadingSpinner.displayName = 'Loading.Spinner';
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    animation-name: spin;\n    animation-duration: 1500ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n\n    @keyframes spin {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }\n"], ["\n    animation-name: spin;\n    animation-duration: 1500ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n\n    @keyframes spin {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }\n"])));
var templateObject_1;
