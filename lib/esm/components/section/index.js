import React from 'react';
import { Block } from '../../atoms/block';
import { SectionAction } from './action';
import { SectionHeader } from './header';
export var Section = function (_a) {
    var children = _a.children;
    return React.createElement(Block, { marginBottom: "3" }, children);
};
Section.Header = SectionHeader;
Section.Action = SectionAction;
