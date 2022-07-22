import React from 'react';
import { ModalContent } from './content';
import { ModalContext, ModalProvider } from './contex';
export var Modal = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(ModalProvider, null, children)));
};
export var ModalOpener = function (_a) {
    var children = _a.children;
    var setOpen = React.useContext(ModalContext).setOpen;
    return React.createElement("div", { onClick: setOpen }, children);
};
Modal.Content = ModalContent;
Modal.Opener = ModalOpener;
