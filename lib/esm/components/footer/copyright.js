import React from 'react';
import { Block, Caption } from '../..';
export var FooterCopyright = function (_a) {
    var children = _a.children;
    return (React.createElement(Block, { marginBottom: "0.75" },
        React.createElement(Caption, null,
            "\u00A9 ",
            new Date().getFullYear(),
            " ",
            children)));
};
