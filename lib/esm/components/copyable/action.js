import React from 'react';
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyableContext } from '.';
import { Block } from '../../atoms/block';
import { Body } from '../../blocks/typography/body';
import { Caption } from '../../blocks/typography/caption';
export var CopyableAction = function (_a) {
    var style = _a.style;
    var _b = React.useContext(CopyableContext), id = _b.id, setCopied = _b.setCopied;
    var onClick = function () {
        var copyText = document.getElementById(id);
        if (copyText) {
            navigator.clipboard.writeText(copyText.textContent || '');
        }
        setCopied(true);
    };
    var body = function () {
        switch (style) {
            case 'text':
                return React.createElement(TextAction, { onClick: onClick });
            case 'icon':
                return React.createElement(IconAction, { onClick: onClick });
        }
    };
    return React.createElement(Block, { marginRight: "0.5" }, body());
};
CopyableAction.displayName = 'Copyable.Action';
var TextAction = function (_a) {
    var onClick = _a.onClick;
    var copied = React.useContext(CopyableContext).copied;
    return (React.createElement(Caption, { color: "primary" }, copied ? (React.createElement("span", null, "Copied!")) : (React.createElement(Block, { border: "none", cursor: "pointer", onClick: onClick, tagName: "button", type: "button" }, "Copy"))));
};
export var IconAction = function (_a) {
    var onClick = _a.onClick;
    var copied = React.useContext(CopyableContext).copied;
    return (React.createElement(Body, { color: "primary" }, copied ? (React.createElement(FontAwesomeIcon, { icon: faCheck })) : (React.createElement(Block, { border: "none", cursor: "pointer", onClick: onClick, tagName: "button", type: "button" },
        React.createElement(FontAwesomeIcon, { icon: faCopy })))));
};
