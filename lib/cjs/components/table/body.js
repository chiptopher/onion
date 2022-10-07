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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBodyCell = exports.TableBodyRow = exports.TableBody = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var colors_1 = require("../../atoms/colors");
var TableBody = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(__1.Block, { tagName: "tbody", verticalAlign: "top" }, children));
};
exports.TableBody = TableBody;
var TableBodyRow = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(__1.Block, { tagName: "tr" }, children));
};
exports.TableBodyRow = TableBodyRow;
var TableBodyCell = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var theme = (0, __1.useTheme)();
    return (react_1.default.createElement(__1.Block, __assign({ borderBottom: "solid 2px ".concat((0, colors_1.resolveColorValue)(theme.base.grey, 'regular')), paddingBottom: "0.5", paddingTop: "0.5", tagName: "td" }, rest),
        react_1.default.createElement(__1.Body, { tagName: "span" }, children)));
};
exports.TableBodyCell = TableBodyCell;
exports.TableBody.displayName = 'Table.Body';
exports.TableBodyRow.displayName = 'Table.Body.Row';
exports.TableBodyCell.displayName = 'Table.Body.Cell';
exports.TableBody.Cell = exports.TableBodyCell;
exports.TableBody.Row = exports.TableBodyRow;
