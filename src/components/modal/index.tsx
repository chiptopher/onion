import React from 'react';

import { ChildrenOnlyProps } from '../../atoms/util';
import { ModalContent, ModalContentProps } from './content';
import { ModalContext, ModalProvider } from './contex';

export const Modal: React.FunctionComponent<ChildrenOnlyProps> & {
    Content: React.FunctionComponent<ModalContentProps>;
    Opener: React.FunctionComponent<ModalOpenerProps>;
} = ({ children }) => {
    return (
        <React.Fragment>
            <ModalProvider>{children}</ModalProvider>
        </React.Fragment>
    );
};

type ModalOpenerProps = ChildrenOnlyProps;

export const ModalOpener: React.FunctionComponent<ModalOpenerProps> = ({
    children,
}) => {
    const { setOpen } = React.useContext(ModalContext);
    return <span onClick={setOpen}>{children}</span>;
};

export function useModalControl() {
    const { setOpen, setClosed } = React.useContext(ModalContext);
    return (state: boolean) => (state ? setOpen() : setClosed());
}

ModalOpener.displayName = 'Modal.Opener';

Modal.Content = ModalContent;
Modal.Opener = ModalOpener;
