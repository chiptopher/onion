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
import React from 'react';
import styled from 'styled-components';
import { block } from '../..';
import { resolveColorValue } from '../../atoms/colors';
import { useTextColor } from '../../theme';
// TODO move to atoms folder
export var Text2 = function (_a) {
    var color = _a.color, tagName = _a.tagName, underlined = _a.underlined, style = _a.style, colorTint = _a.colorTint, rest = __rest(_a, ["color", "tagName", "underlined", "style", "colorTint"]);
    var textColor = useTextColor(color);
    var props = __assign({ as: tagName, color: resolveColorValue(textColor, colorTint) }, rest);
    switch (style) {
        case 'title':
            return React.createElement(TitleStyleTag, __assign({}, props));
        case 'body':
            return React.createElement(BodyStyleTag, __assign({}, props));
        case 'caption':
            return React.createElement(CaptionStyleTag, __assign({}, props));
        case 'header':
            return React.createElement(HeaderStyleTag, __assign({}, props));
        case 'subheader':
            return React.createElement(SubheaderStlyeTag, __assign({}, props));
        case 'label':
            return React.createElement(LabelStyleTag, __assign({}, props));
        case 'larger-body':
            return React.createElement(LargerBodyTag, __assign({}, props));
    }
};
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    ", ";\n    font-family: 'Nunito', sans-serif;\n    margin: 0;\n    padding: 0;\n    ", "\n    cursor: inherit;\n"], ["\n    color: ", ";\n    ", ";\n    font-family: 'Nunito', sans-serif;\n    margin: 0;\n    padding: 0;\n    ", "\n    cursor: inherit;\n"])), function (props) { return props.color; }, function (props) { return props.marginBottom && "margin-bottom: ".concat(block(1.5)); }, function (props) { return props.underlined && 'text-decoration: underline'; });
var TitleStyleTag = styled(Container)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: 2.75rem;\n    font-weight: bold;\n"], ["\n    font-size: 2.75rem;\n    font-weight: bold;\n"])));
var BodyStyleTag = styled(Container)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-size: 1rem;\n"], ["\n    font-size: 1rem;\n"])));
var CaptionStyleTag = styled(Container)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    font-size: 0.8rem;\n"], ["\n    font-size: 0.8rem;\n"])));
var HeaderStyleTag = styled(Container)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    font-size: 1.75rem;\n    font-weight: bold;\n"], ["\n    font-size: 1.75rem;\n    font-weight: bold;\n"])));
var SubheaderStlyeTag = styled(Container)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font-size: 1.5rem;\n    margin-bottom: ", ";\n"], ["\n    font-size: 1.5rem;\n    margin-bottom: ", ";\n"])), block(1.5));
var LabelStyleTag = styled(Container)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    font-weight: bold;\n    margin-bottom: ", ";\n    font-size: 1rem;\n"], ["\n    font-weight: bold;\n    margin-bottom: ", ";\n    font-size: 1rem;\n"])), block(1));
var LargerBodyTag = styled(Container)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    font-size: 1.2rem;\n"], ["\n    font-size: 1.2rem;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
