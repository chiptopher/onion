import React from 'react';

import styles from './index.module.css';

import { Block } from '../../atoms/block';
import { TagName } from '../../atoms/types';
import { TextStyle, Text3 } from '../../blocks/typography/text3';
import { Flow } from '../../layout/flow';

export interface DetailsSummaryProps {
    children: React.ReactNode;
    indicator?: React.ReactNode;
    tagName?: TagName;
    textStyle?: TextStyle;
}

export const DetailsSummary: React.FunctionComponent<DetailsSummaryProps> = ({
    children,
    indicator,
    tagName = 'span',
    textStyle = 'subheader',
}) => {
    return (
        <Block
            color="primary"
            paddingBottom="0.5"
            paddingLeft="1"
            paddingRight="1"
            paddingTop="0.5"
            tagName="summary"
        >
            <Flow direction="horizontal" style="separate">
                <Text3 marginBottom={false} style={textStyle} tagName={tagName}>
                    {children}
                </Text3>
                {indicator && (
                    <div className={styles['onion-details__open-indicator']}>
                        {indicator}
                    </div>
                )}
            </Flow>
        </Block>
    );
};
