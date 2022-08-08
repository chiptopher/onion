import React, { useState } from 'react';
import { Block } from '../../atoms/block';
import { Body } from '../../blocks/typography/body';
import { Flow } from '../../layout/flow';
import { CopyableAction } from './action';
export var CopyableContext = React.createContext({ copied: false, setCopied: console.log });
export var Copyable = function (_a) {
    var children = _a.children;
    var _b = useState(false), copied = _b[0], setCopied = _b[1];
    return (React.createElement(CopyableContext.Provider, { value: { copied: copied, setCopied: setCopied } },
        React.createElement("span", { className: "copyable" },
            React.createElement(Block, { borderRadius: true, color: "light", colorTint: "dark", padding: "0.25" },
                React.createElement(Flow, { direction: "horizontal", style: "separate" }, children)))));
};
var CopyableContent = function (_a) {
    var children = _a.children;
    return (React.createElement("span", { className: "copyable-content" },
        React.createElement(Block, { tagName: "span" },
            React.createElement(Body, null, children))));
};
CopyableContent.displayName = 'Copyable.Content';
Copyable.Content = CopyableContent;
Copyable.Action = CopyableAction;
