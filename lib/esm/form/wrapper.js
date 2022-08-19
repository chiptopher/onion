var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { block } from '..';
import { resolveColorValue } from '../atoms/colors';
import { Caption } from '../blocks/typography/caption';
import { Label } from '../blocks/typography/label';
import { useTheme } from '../theme';
export var Wrapper = function (_a) {
    var children = _a.children, htmlFor = _a.htmlFor, label = _a.label, help = _a.help;
    var theme = useTheme();
    return (React.createElement(Container, { borderColor: resolveColorValue(theme.base.grey, 'regular') },
        label && React.createElement(Label, { htmlFor: htmlFor }, label),
        React.createElement("div", null, children),
        React.createElement(HelpText, { help: help })));
};
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-bottom: ", ";\n\n    input,\n    textarea {\n        border-radius: 4px;\n        width: 100%;\n        border: solid 1px ", ";\n        font-size: 1rem;\n        padding: 0.25rem 0.25rem;\n    }\n"], ["\n    margin-bottom: ", ";\n\n    input,\n    textarea {\n        border-radius: 4px;\n        width: 100%;\n        border: solid 1px ", ";\n        font-size: 1rem;\n        padding: 0.25rem 0.25rem;\n    }\n"])), block(1), function (p) { return p.borderColor; });
export var HelpText = function (_a) {
    var help = _a.help;
    if (!help) {
        return React.createElement(React.Fragment, null);
    }
    if (typeof help === 'string') {
        return React.createElement(Caption, null, help);
    }
    else {
        return React.createElement(Caption, { color: help.color }, help.text);
    }
};
var templateObject_1;
