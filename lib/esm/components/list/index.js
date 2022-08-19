var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { ListItem } from './item';
export var List = function (_a) {
    var children = _a.children;
    return React.createElement(Container, null, children);
};
var Container = styled.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n"], ["\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n"])));
List.Item = ListItem;
var templateObject_1;
