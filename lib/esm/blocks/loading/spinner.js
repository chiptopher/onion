import React from 'react';
import { Body } from '../..';
import { useLoading } from './contex';
import { BlockContainer } from './dot-container';
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
        React.createElement("div", null,
            dots > 0 && React.createElement(BlockContainer, null, "\u2022"),
            dots > 1 && React.createElement(BlockContainer, null, "\u2022"),
            dots > 2 && React.createElement(BlockContainer, null, "\u2022"))));
};
LoadingSpinner.displayName = 'Loading.Spinner';
