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
import React from 'react';
import { LoadingContext } from './contex';
import { LoadingSpinner } from './spinner';
import { LoadingText } from './text';
export var Loading = function (_a) {
    var children = _a.children, _b = _a.initialState, initialState = _b === void 0 ? false : _b;
    var _c = React.useState(initialState), loading = _c[0], setLoading = _c[1];
    return (React.createElement(LoadingContext.Provider, { value: { loading: loading, setLoading: setLoading } }, children));
};
export function withLoading(Component) {
    // eslint-disable-next-line react/display-name
    return function (props) { return (React.createElement(Loading, null,
        React.createElement(Component, __assign({}, props)))); };
}
Loading.Spinner = LoadingSpinner;
Loading.Text = LoadingText;
