import React from 'react';

interface HeaderContextState {
    inverted: boolean;
}

export const HeaderContext = React.createContext<HeaderContextState>({
    inverted: false,
});

interface MenuContentState {
    content?: any;
    setContent: (content: any) => void;
    setVisible: (visible: boolean) => void;
    visible?: boolean;
}

export const MenuContentContext = React.createContext<MenuContentState>({
    setContent: console.log,
    setVisible: console.log,
});
