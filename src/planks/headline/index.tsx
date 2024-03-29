import React from 'react';

import { Block } from '../../atoms/block';
import { Heirarcy } from '../../blocks/typography/header-shared';
import { Title } from '../../blocks/typography/title';
import { PlankWrapper, PlankWrapperProps } from '../utils';
import { HeadlineContent, HeadlineContentProps } from './content';
import { HeadlineCTA, HeadlineCTAProps } from './cta';

interface Props extends PlankWrapperProps {
    alignment?: 'left' | 'right' | 'center';
    children?: React.ReactNode;
    heirarchy?: Heirarcy;
    title: React.ReactNode | string;
}

export const Headline: React.FunctionComponent<Props> & {
    CTA: React.FunctionComponent<HeadlineCTAProps>;
    Content: React.FunctionComponent<HeadlineContentProps>;
} = ({
    alignment = 'center',
    title,
    children,
    heirarchy = '1',
    background,
    ...wrapperProps
}) => {
    const validChildren = React.Children.toArray(children).map((child: any) => {
        if (child.type === HeadlineCTA) {
            return React.cloneElement(child, { _containerColor: background });
        } else {
            return child;
        }
    });
    return (
        <PlankWrapper background={background} {...wrapperProps}>
            <Block textAlign={alignment}>
                <Block marginBottom="1">
                    <Title heirarchy={heirarchy}>{title}</Title>
                </Block>
                {validChildren}
            </Block>
        </PlankWrapper>
    );
};

Headline.CTA = HeadlineCTA;
Headline.Content = HeadlineContent;
