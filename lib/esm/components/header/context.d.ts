import React from 'react';
interface HeaderContextState {
    inverted: boolean;
}
export declare const HeaderContext: React.Context<HeaderContextState>;
interface MenuContentState {
    content?: any;
    setContent: (content: any) => void;
    setVisible: (visible: boolean) => void;
    visible?: boolean;
}
export declare const MenuContentContext: React.Context<MenuContentState>;
export {};
