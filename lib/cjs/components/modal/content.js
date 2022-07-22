"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalContent = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var __1 = require("../..");
var contex_1 = require("./contex");
var ModalContent = function (_a) {
    var children = _a.children, fixedSize = _a.fixedSize;
    var _b = react_1.default.useContext(contex_1.ModalContext), open = _b.open, setClosed = _b.setClosed;
    var escFunction = react_1.default.useCallback(function (event) {
        if (event.key === 'Escape') {
            setClosed();
        }
    }, []);
    react_1.default.useEffect(function () {
        document.addEventListener('keydown', escFunction, false);
        return function () {
            document.removeEventListener('keydown', escFunction, false);
        };
    }, []);
    return open ? (react_1.default.createElement(Container, null,
        react_1.default.createElement(Shadow, { onClick: function () { return setClosed(); } }),
        react_1.default.createElement(ContentContainer, { width: fixedSize ? '720' : undefined },
            react_1.default.createElement("div", null, children)))) : (react_1.default.createElement(react_1.default.Fragment, null));
};
exports.ModalContent = ModalContent;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n"], ["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n"])));
var Shadow = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n\n    background-color: rgba(0, 0, 0, 0.5);\n"], ["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n\n    background-color: rgba(0, 0, 0, 0.5);\n"])));
var ContentContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n\n    & > div {\n        background-color: white;\n        padding: ", ";\n        z-index: 99;\n        border-radius: 4px;\n\n        ", "\n    }\n"], ["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n\n    & > div {\n        background-color: white;\n        padding: ", ";\n        z-index: 99;\n        border-radius: 4px;\n\n        ", "\n    }\n"])), (0, __1.block)(2), function (p) { return p.width && "width: ".concat(p.width, "px;"); });
var templateObject_1, templateObject_2, templateObject_3;
