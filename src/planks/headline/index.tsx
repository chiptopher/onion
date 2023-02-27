import React from 'react';

import { Block } from '../../atoms/block';
import { Colors } from '../../atoms/colors';
import { Heirarcy } from '../../blocks/typography/header-shared';
import { Title } from '../../blocks/typography/title';
import { Gutter } from '../../layout/gutter';
import { HeadlineContent, HeadlineContentProps } from './content';
import { HeadlineCTA, HeadlineCTAProps } from './cta';

interface Props {
    background?: Colors;
    children?: React.ReactNode;
    heirarchy?: Heirarcy;
    title: React.ReactNode | string;
}

export const Headline: React.FunctionComponent<Props> & {
    CTA: React.FunctionComponent<HeadlineCTAProps>;
    Content: React.FunctionComponent<HeadlineContentProps>;
} = ({ background = undefined, title, children, heirarchy = '1' }) => {
    const validChildren = React.Children.toArray(children).map((child: any) => {
        if (child.type === HeadlineCTA) {
            return React.cloneElement(child, { _containerColor: background });
        } else {
            return child;
        }
    });
    return (
        <Block
            color={background}
            paddingBottom="4"
            paddingTop="2"
            textAlign="center"
        >
            <Gutter>
                <Block marginBottom="1">
                    <Title heirarchy={heirarchy}>{title}</Title>
                </Block>
                {validChildren}
            </Gutter>
        </Block>
    );
};

Headline.CTA = HeadlineCTA;
Headline.Content = HeadlineContent;
