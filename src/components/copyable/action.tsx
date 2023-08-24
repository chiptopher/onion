import React, { useRef } from 'react';

import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CopyableContext } from '.';
import { Block } from '../../atoms/block';
import { Body } from '../../blocks/typography/body';
import { Caption } from '../../blocks/typography/caption';

export interface CopyableActionProps {
    style: 'text' | 'icon';
}

export const CopyableAction: React.FunctionComponent<CopyableActionProps> = ({
    style,
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const { setCopied } = React.useContext(CopyableContext);
    const onClick = () => {
        const copyText = ref?.current
            ?.closest('.copyable')
            ?.querySelectorAll('.copyable-content-element');

        if (copyText) {
            let finalText = '';
            copyText.forEach(element => {
                if (element.textContent) {
                    finalText =
                        finalText +
                        (finalText === '' ? '' : '\n') +
                        element.textContent;
                }
            });
            navigator.clipboard.writeText(finalText);
        }
        setCopied(true);
    };

    const body = () => {
        switch (style) {
            case 'text':
                return <TextAction onClick={onClick} />;
            case 'icon':
                return <IconAction onClick={onClick} />;
        }
    };
    return (
        <span ref={ref}>
            <Block marginRight="0.5">{body()}</Block>
        </span>
    );
};

CopyableAction.displayName = 'Copyable.Action';

interface SprecificActionProps {
    onClick: () => void;
}

const TextAction: React.FunctionComponent<SprecificActionProps> = ({
    onClick,
}) => {
    const { copied } = React.useContext(CopyableContext);
    return (
        <Caption color="primary">
            {copied ? (
                <span>Copied!</span>
            ) : (
                <Block
                    border="none"
                    cursor="pointer"
                    onClick={onClick}
                    tagName="button"
                    type="button"
                >
                    Copy
                </Block>
            )}
        </Caption>
    );
};

export const IconAction: React.FunctionComponent<SprecificActionProps> = ({
    onClick,
}) => {
    const { copied } = React.useContext(CopyableContext);
    return (
        <Block paddingLeft="0.5">
            <Body color="primary">
                {copied ? (
                    <FontAwesomeIcon icon={faCheck} />
                ) : (
                    <Block
                        border="none"
                        cursor="pointer"
                        onClick={onClick}
                        padding="0"
                        tagName="button"
                        type="button"
                    >
                        <FontAwesomeIcon icon={faCopy} />
                    </Block>
                )}
            </Body>
        </Block>
    );
};
