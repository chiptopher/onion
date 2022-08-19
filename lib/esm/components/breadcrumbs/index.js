var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { Block, block } from '../..';
import { BreadcrumbItem } from './item';
export var Breadcrumbs = function (_a) {
    var children = _a.children;
    return (React.createElement(Block, { marginBottom: "1" },
        React.createElement(Container, null,
            React.createElement("ol", null, React.Children.toArray(children).map(function (child, index) { return (React.createElement("li", { key: index }, child)); })))));
};
Breadcrumbs.Item = BreadcrumbItem;
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ol {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        display: flex;\n        list-style-type: none;\n\n        li:before {\n            content: '/';\n            margin: ", " ", ";\n        }\n\n        li:first-child:before {\n            margin-left: 0;\n        }\n    }\n"], ["\n    ol {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        display: flex;\n        list-style-type: none;\n\n        li:before {\n            content: '/';\n            margin: ", " ", ";\n        }\n\n        li:first-child:before {\n            margin-left: 0;\n        }\n    }\n"])), block(1.5), block(1.5));
var templateObject_1;
