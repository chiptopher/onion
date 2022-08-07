import React, { useState } from 'react';

import { Block } from '../../atoms/block';
import { ChildrenOnlyProps } from '../../atoms/util';
import { Body } from '../../blocks/typography/body';
import { Caption } from '../../blocks/typography/caption';
import { Flow } from '../../layout/flow';

const CopyableContext = React.createContext<{
    copied: boolean;
    id: string;
    setCopied: (value: boolean) => void;
}>({ copied: false, id: '', setCopied: console.log });

export const Copyable: React.FunctionComponent<ChildrenOnlyProps> & {
    Action: React.FunctionComponent;
    Content: React.FunctionComponent<CopyableContentProps>;
} = ({ children }) => {
    const [copied, setCopied] = useState(false);
    const id = `copyable-${(Math.random() * 100).toFixed(0)}`;
    return (
        <CopyableContext.Provider value={{ copied, id, setCopied }}>
            <Block borderRadius color="light" colorTint="dark" padding="0.25">
                <Flow direction="horizontal" style="separate">
                    {children}
                </Flow>
            </Block>
        </CopyableContext.Provider>
    );
};

interface CopyableContentProps {
    children: string | number;
}

const CopyableContent: React.FunctionComponent<CopyableContentProps> = ({
    children,
}) => {
    const { id } = React.useContext(CopyableContext);
    return (
        <Block id={id} tagName="span">
            <Body>{children}</Body>
        </Block>
    );
};

CopyableContent.displayName = 'Copyable.Content';

const CopyableAction: React.FunctionComponent = () => {
    const { copied, id, setCopied } = React.useContext(CopyableContext);
    return (
        <Block marginRight="0.5">
            <Caption color="primary">
                {copied ? (
                    <span>Copied!</span>
                ) : (
                    <Block
                        border="none"
                        onClick={() => {
                            const copyText = document.getElementById(id);
                            if (copyText) {
                                navigator.clipboard.writeText(
                                    copyText.textContent || ''
                                );
                            }
                            setCopied(true);
                        }}
                        tagName="button"
                        type="button"
                    >
                        Copy
                    </Block>
                )}
            </Caption>
        </Block>
    );
};

CopyableAction.displayName = 'Copyable.Action';

Copyable.Content = CopyableContent;
Copyable.Action = CopyableAction;
