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
import { Body } from '../..';
export var TableBody = function (_a) {
    var children = _a.children;
    return React.createElement("tbody", null, children);
};
export var TableBodyRow = function (_a) {
    var children = _a.children;
    return (React.createElement("tr", null, children));
};
export var TableBodyCell = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (React.createElement("td", __assign({}, rest),
        React.createElement(Body, null, children)));
};
TableBody.displayName = 'Table.Body';
TableBodyRow.displayName = 'Table.Body.Row';
TableBodyCell.displayName = 'Table.Body.Cell';
TableBody.Cell = TableBodyCell;
TableBody.Row = TableBodyRow;
