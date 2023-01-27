import React from 'react';

import styled from 'styled-components';

import { Block } from '../../atoms/block';
import { TagName } from '../../atoms/types';
import { TextStlye, Text2 } from '../../blocks/typography/text';
import { Flow } from '../../layout/flow';

export interface DetailsSummaryProps {
    children: React.ReactNode;
    indicator?: React.ReactNode;
    tagName?: TagName;
    textStyle?: TextStlye;
}

export const DetailsSummary: React.FunctionComponent<DetailsSummaryProps> = ({
    children,
    indicator,
    tagName = 'span',
    textStyle = 'subheader',
}) => {
    return (
        <Summary
            color="primary"
            paddingBottom="0.5"
            paddingLeft="1"
            paddingRight="1"
            paddingTop="0.5"
            tagName="summary"
        >
            <Flow direction="horizontal" style="separate">
                <Text2 style={textStyle} tagName={tagName}>
                    {children}
                </Text2>
                {indicator && (
                    <div className="ontion-details__open-indicator">
                        {indicator}
                    </div>
                )}
            </Flow>
        </Summary>
    );
};

const Summary = styled(Block)`
    list-style: none;
    &::-webkit-details-marker {
        display: none;
    }

    .onion-text {
        margin-bottom: 0;
    }

    .ontion-details__open-indicator {
    }
`;
