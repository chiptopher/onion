import React from 'react';
export var ModalContext = React.createContext({
    open: false,
    setClosed: console.log,
    setOpen: console.log,
});
export var ModalProvider = function (props) {
    var _a = React.useState(false), open = _a[0], setOpen = _a[1];
    return (React.createElement(ModalContext.Provider, { value: {
            open: open,
            setClosed: function () { return setOpen(false); },
            setOpen: function () { return setOpen(true); },
        } }, props.children));
};
