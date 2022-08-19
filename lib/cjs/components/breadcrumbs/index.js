"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumbs = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var __1 = require("../..");
var item_1 = require("./item");
var Breadcrumbs = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(__1.Block, { marginBottom: "1" },
        react_1.default.createElement(Container, null,
            react_1.default.createElement("ol", null, react_1.default.Children.toArray(children).map(function (child, index) { return (react_1.default.createElement("li", { key: index }, child)); })))));
};
exports.Breadcrumbs = Breadcrumbs;
exports.Breadcrumbs.Item = item_1.BreadcrumbItem;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ol {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        display: flex;\n        list-style-type: none;\n\n        li:before {\n            content: '/';\n            margin: ", " ", ";\n        }\n\n        li:first-child:before {\n            margin-left: 0;\n        }\n    }\n"], ["\n    ol {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        display: flex;\n        list-style-type: none;\n\n        li:before {\n            content: '/';\n            margin: ", " ", ";\n        }\n\n        li:first-child:before {\n            margin-left: 0;\n        }\n    }\n"])), (0, __1.block)(1.5), (0, __1.block)(1.5));
var templateObject_1;
