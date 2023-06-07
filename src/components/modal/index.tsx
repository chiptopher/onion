import React from 'react';

import { ChildrenOnlyProps } from '../../atoms/util';
import { Text3, TextProps } from '../../blocks/typography/text3';
import { ModalContent, ModalContentProps } from './content';
import { ModalContext, ModalProvider } from './contex';

export const Modal: React.FunctionComponent<ChildrenOnlyProps> & {
    Content: React.FunctionComponent<ModalContentProps>;
    Opener: React.FunctionComponent<ModalOpenerProps>;
    Title: React.FunctionComponent<ChildrenOnlyProps>;
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

export const ModalTitle: React.FunctionComponent<
    Pick<TextProps, 'children'>
> = props => <Text3 style="subheader" tagName="p" {...props} />;

ModalOpener.displayName = 'Modal.Opener';
ModalTitle.displayName = 'Modal.Title';

Modal.Content = ModalContent;
Modal.Opener = ModalOpener;
Modal.Title = ModalTitle;
