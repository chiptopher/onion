import React from 'react';
import { Body } from '../..';
import { useLoading } from './contex';
import { BlockContainer } from './dot-container';
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
        React.createElement("div", null,
            React.createElement(BlockContainer, null, "Loading"),
            dots > 0 && React.createElement(BlockContainer, null, "."),
            dots > 1 && React.createElement(BlockContainer, null, "."),
            dots > 2 && React.createElement(BlockContainer, null, "."))));
};
LoadingText.displayName = 'Loading.Text';
