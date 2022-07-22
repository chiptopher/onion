import React from 'react';
import { ChildrenOnlyProps } from '../../atoms/util';
import { ModalContentProps } from './content';
export declare const Modal: React.FunctionComponent<ChildrenOnlyProps> & {
    Content: React.FunctionComponent<ModalContentProps>;
    Opener: React.FunctionComponent<ModalOpenerProps>;
};
declare type ModalOpenerProps = ChildrenOnlyProps;
export declare const ModalOpener: React.FunctionComponent<ModalOpenerProps>;
export {};
