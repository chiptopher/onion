var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { block, Body } from '../..';
import { useLoading } from './contex';
export var LoadingSpinner = function (_a) {
    var children = _a.children;
    var loading = useLoading()[0];
    if (loading) {
        return React.createElement(Dots, null);
    }
    else {
        return React.createElement(React.Fragment, null, children);
    }
};
var Dots = function () {
    var _a = React.useState(1), dots = _a[0], setDots = _a[1];
    React.useEffect(function () {
        var interval = setInterval(function () {
            setDots(dots + 1);
            if (dots >= 10) {
                setDots(1);
            }
        }, 250);
        return function () { return clearInterval(interval); };
    }, [dots, setDots]);
    return (React.createElement(Body, null,
        React.createElement(Container, null,
            dots > 0 && React.createElement("span", null, "\u2022"),
            dots > 1 && React.createElement("span", null, "\u2022"),
            dots > 2 && React.createElement("span", null, "\u2022"))));
};
var Container = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    span {\n        margin-right: ", ";\n    }\n"], ["\n    span {\n        margin-right: ", ";\n    }\n"])), block(1));
var templateObject_1;
