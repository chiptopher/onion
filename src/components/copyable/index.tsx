import React, { useState } from 'react';

import classNames from 'classnames';

import { Block } from '../../atoms/block';
import { TagName } from '../../atoms/types';
import { ChildrenOnlyProps } from '../../atoms/util';
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
                    paddingBottom="0.25"
                    paddingLeft="1"
                    paddingRight="0.5"
                    paddingTop="0.25"
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
    children: React.ReactNode;
    tagName?: TagName;
}

const CopyableContent: React.FunctionComponent<CopyableContentProps> = ({
    children,
    tagName = 'span',
}) => {
    const mappedChildren = React.Children.toArray(children).map(child => {
        if (React.isValidElement(child)) {
            return (
                <div>
                    {React.cloneElement<any>(child, {
                        className: classNames(
                            child.props?.className || '',
                            'copyable-content-element'
                        ),
                    })}
                </div>
            );
        } else {
            return <div className="copyable-content-element">{child}</div>;
        }
    });
    return (
        <span className="copyable-content">
            <Block tagName={tagName}>{mappedChildren}</Block>
        </span>
    );
};

CopyableContent.displayName = 'Copyable.Content';

Copyable.Content = CopyableContent;
Copyable.Action = CopyableAction;
