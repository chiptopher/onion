import React from 'react';
export interface State {
    open: boolean;
    setClosed: () => void;
    setOpen: () => void;
}
export declare const ModalContext: React.Context<State>;
interface Props {
    children: React.ReactNode;
}
export declare const ModalProvider: (props: Props) => JSX.Element;
export {};
