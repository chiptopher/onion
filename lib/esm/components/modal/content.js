var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { block } from '../..';
import { ModalContext } from './contex';
export var ModalContent = function (_a) {
    var children = _a.children, fixedSize = _a.fixedSize;
    var _b = React.useContext(ModalContext), open = _b.open, setClosed = _b.setClosed;
    var escFunction = React.useCallback(function (event) {
        if (event.key === 'Escape') {
            setClosed();
        }
    }, []);
    React.useEffect(function () {
        document.addEventListener('keydown', escFunction, false);
        return function () {
            document.removeEventListener('keydown', escFunction, false);
        };
    }, []);
    return open ? (React.createElement(Container, null,
        React.createElement(Shadow, { onClick: function () { return setClosed(); } }),
        React.createElement(ContentContainer, { width: fixedSize ? '720' : undefined },
            React.createElement("div", null, children)))) : (React.createElement(React.Fragment, null));
};
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n"], ["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n"])));
var Shadow = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n\n    background-color: rgba(0, 0, 0, 0.5);\n"], ["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n\n    background-color: rgba(0, 0, 0, 0.5);\n"])));
var ContentContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n\n    & > div {\n        background-color: white;\n        padding: ", ";\n        z-index: 99;\n        border-radius: 4px;\n\n        ", "\n    }\n"], ["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n\n    & > div {\n        background-color: white;\n        padding: ", ";\n        z-index: 99;\n        border-radius: 4px;\n\n        ", "\n    }\n"])), block(2), function (p) { return p.width && "width: ".concat(p.width, "px;"); });
var templateObject_1, templateObject_2, templateObject_3;
