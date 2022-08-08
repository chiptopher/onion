import React, { useRef } from 'react';
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyableContext } from '.';
import { Block } from '../../atoms/block';
import { Body } from '../../blocks/typography/body';
import { Caption } from '../../blocks/typography/caption';
export var CopyableAction = function (_a) {
    var style = _a.style;
    var ref = useRef(null);
    var setCopied = React.useContext(CopyableContext).setCopied;
    var onClick = function () {
        var _a, _b;
        var copyText = (_b = (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.closest('.copyable')) === null || _b === void 0 ? void 0 : _b.querySelector('.copyable-content');
        console.log(ref.current);
        console.log(copyText);
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
    return (React.createElement("span", { ref: ref },
        React.createElement(Block, { marginRight: "0.5" }, body())));
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
