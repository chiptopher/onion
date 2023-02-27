import React from 'react';

import { Block } from '../../atoms/block';
import { Text2 as Text } from '../../blocks/typography/text';

export interface HeadlineContentProps {
    children: React.ReactNode;
}

export const HeadlineContent: React.FunctionComponent<HeadlineContentProps> = ({
    children,
}) => {
    return (
        <Block marginBottom="2">
            <Text style="subheader" tagName="p">
                {children}
            </Text>
        </Block>
    );
};
