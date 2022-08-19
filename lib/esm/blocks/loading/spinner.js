var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useLoading } from './contex';
export var LoadingSpinner = function (_a) {
    var children = _a.children;
    var loading = useLoading()[0];
    if (loading) {
        return (React.createElement(Container, null,
            React.createElement(FontAwesomeIcon, { icon: faCircleNotch })));
    }
    else {
        return React.createElement(React.Fragment, null, children);
    }
};
LoadingSpinner.displayName = 'Loading.Spinner';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    animation-name: spin;\n    animation-duration: 1500ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n\n    @keyframes spin {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }\n"], ["\n    animation-name: spin;\n    animation-duration: 1500ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n\n    @keyframes spin {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }\n"])));
var templateObject_1;
