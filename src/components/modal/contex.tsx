import React from 'react';

export interface State {
    open: boolean;
    setClosed: () => void;
    setOpen: () => void;
}

export const ModalContext = React.createContext<State>({
    open: false,
    setClosed: console.log,
    setOpen: console.log,
});

interface Props {
    children: React.ReactNode;
}

export const ModalProvider = (props: Props) => {
    const [open, setOpen] = React.useState(false);
    return (
        <ModalContext.Provider
            value={{
                open: open,
                setClosed: () => setOpen(false),
                setOpen: () => setOpen(true),
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
};
