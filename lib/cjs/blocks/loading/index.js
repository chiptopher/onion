"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withLoading = exports.Loading = void 0;
var react_1 = __importDefault(require("react"));
var contex_1 = require("./contex");
var spinner_1 = require("./spinner");
var text_1 = require("./text");
var Loading = function (_a) {
    var children = _a.children, _b = _a.initialState, initialState = _b === void 0 ? false : _b;
    var _c = react_1.default.useState(initialState), loading = _c[0], setLoading = _c[1];
    return (react_1.default.createElement(contex_1.LoadingContext.Provider, { value: { loading: loading, setLoading: setLoading } }, children));
};
exports.Loading = Loading;
function withLoading(Component) {
    // eslint-disable-next-line react/display-name
    return function (props) { return (react_1.default.createElement(exports.Loading, null,
        react_1.default.createElement(Component, __assign({}, props)))); };
}
exports.withLoading = withLoading;
exports.Loading.Spinner = spinner_1.LoadingSpinner;
exports.Loading.Text = text_1.LoadingText;
