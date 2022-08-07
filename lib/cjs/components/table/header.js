"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHeader = void 0;
var react_1 = __importDefault(require("react"));
var block_1 = require("../../atoms/block");
var header_cell_1 = require("./header-cell");
var TableHeader = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(block_1.Block, { tagName: "thead" },
        react_1.default.createElement("tr", null, children)));
};
exports.TableHeader = TableHeader;
exports.TableHeader.displayName = 'Table.Header';
exports.TableHeader.Cell = header_cell_1.TableHeaderCell;
