import React from 'react';
import { Block } from '../../atoms/block';
import { TableHeaderCell } from './header-cell';
export var TableHeader = function (_a) {
    var children = _a.children;
    return (React.createElement(Block, { tagName: "thead" },
        React.createElement("tr", null, children)));
};
TableHeader.displayName = 'Table.Header';
TableHeader.Cell = TableHeaderCell;
