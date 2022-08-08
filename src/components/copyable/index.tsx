import React, { useState } from 'react';

import { Block } from '../../atoms/block';
import { ChildrenOnlyProps } from '../../atoms/util';
import { Body } from '../../blocks/typography/body';
import { Flow } from '../../layout/flow';
import { CopyableAction, CopyableActionProps } from './action';

export const CopyableContext = React.createContext<{
    copied: boolean;
    setCopied: (value: boolean) => void;
}>({ copied: false, setCopied: console.log });

export const Copyable: React.FunctionComponent<ChildrenOnlyProps> & {
    Action: React.FunctionComponent<CopyableActionProps>;
    Content: React.FunctionComponent<CopyableContentProps>;
} = ({ children }) => {
    const [copied, setCopied] = useState(false);
    return (
        <CopyableContext.Provider value={{ copied, setCopied }}>
            <span className="copyable">
                <Block
                    borderRadius
                    color="light"
                    colorTint="dark"
                    padding="0.25"
                >
                    <Flow direction="horizontal" style="separate">
                        {children}
                    </Flow>
                </Block>
            </span>
        </CopyableContext.Provider>
    );
};

interface CopyableContentProps {
    children: string | number;
}

const CopyableContent: React.FunctionComponent<CopyableContentProps> = ({
    children,
}) => {
    return (
        <span className="copyable-content">
            <Block tagName="span">
                <Body>{children}</Body>
            </Block>
        </span>
    );
};

CopyableContent.displayName = 'Copyable.Content';

Copyable.Content = CopyableContent;
Copyable.Action = CopyableAction;
