import React from 'react';
export var HeaderContext = React.createContext({
    inverted: false,
});
export var MenuContentContext = React.createContext({
    setContent: console.log,
    setVisible: console.log,
});
