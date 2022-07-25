var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { block, Body } from '../..';
import { useLoading } from './contex';
export var LoadingText = function (_a) {
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
    var _a = React.useState(0), dots = _a[0], setDots = _a[1];
    React.useEffect(function () {
        var interval = setInterval(function () {
            setDots(dots + 1);
            if (dots >= 3) {
                setDots(0);
            }
        }, 800);
        return function () { return clearInterval(interval); };
    }, [dots, setDots]);
    return (React.createElement(Body, null,
        React.createElement(Container, null,
            React.createElement("span", null, "Loading"),
            dots > 0 && React.createElement("span", null, "."),
            dots > 1 && React.createElement("span", null, "."),
            dots > 2 && React.createElement("span", null, "."))));
};
var Container = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    span {\n        margin-right: ", ";\n    }\n"], ["\n    span {\n        margin-right: ", ";\n    }\n"])), block(1));
var templateObject_1;
