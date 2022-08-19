import React from 'react';
import { Block, Flow } from '../../';
export var SectionHeader = function (_a) {
    var children = _a.children;
    return (React.createElement(Block, { marginBottom: "1" },
        React.createElement(Flow, { direction: "horizontal", style: "separate" }, children)));
};
SectionHeader.displayName = 'Section.Header';
