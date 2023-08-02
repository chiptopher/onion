import React from 'react';

import styles from './text3.module.css';

import classNames from 'classnames';

import { Block } from '../../atoms/block';
import { BlockProps, TextAlignment } from '../../atoms/block/types';
import { Colors, Tint } from '../../atoms/colors';
import { TagName } from '../../atoms/types';

export type TextStyle =
    | 'title'
    | 'header'
    | 'subheader'
    | 'body'
    | 'label'
    | 'caption'
    | 'emphasized';

export interface TextProps {
    alignment?: TextAlignment;
    children: React.ReactNode;
    color?: Colors;
    colorTint?: Tint;
    marginBottom?: boolean;
    style: TextStyle;
    tagName: TagName;
    underlined?: boolean;
}

// TODO move to atoms folder
export const Text3: React.FunctionComponent<TextProps> = ({
    alignment,
    color,
    colorTint,
    marginBottom = true,
    style,
    underlined,
    ...passthroughProps
}) => {
    const mappedProps: Partial<BlockProps> = {
        textColor: color,
        textColorTint: colorTint,
    };
    const sharedProps: Partial<BlockProps> = { margin: '0', padding: '0' };

    switch (style) {
        case 'title':
            return (
                <Block
                    className={classNames(
                        styles['onion-text3'],
                        styles['title'],
                        { [styles['margin-bottom']]: marginBottom }
                    )}
                    {...passthroughProps}
                    {...mappedProps}
                />
            );
        case 'header':
            return (
                <Block
                    className={classNames(
                        styles['onion-text3'],
                        styles['header'],
                        { [styles['margin-bottom']]: marginBottom }
                    )}
                    fontWeight="bold"
                    {...passthroughProps}
                    {...mappedProps}
                />
            );
        case 'subheader':
            return (
                <Block
                    className={classNames(
                        styles['onion-text3'],
                        styles['subheader'],
                        { [styles['margin-bottom']]: marginBottom }
                    )}
                    {...passthroughProps}
                    {...mappedProps}
                />
            );
        case 'emphasized':
            return (
                <Block
                    className={classNames(
                        styles['onion-text3'],
                        styles['emphasized'],
                        { [styles['margin-bottom']]: marginBottom }
                    )}
                    {...passthroughProps}
                    {...mappedProps}
                />
            );
        case 'body':
            return (
                <Block
                    className={classNames(
                        styles['onion-text3'],
                        styles['body'],
                        { [styles['margin-bottom']]: marginBottom }
                    )}
                    textAlign={alignment}
                    textDecoration={underlined ? 'underline' : undefined}
                    {...passthroughProps}
                    {...mappedProps}
                    {...sharedProps}
                />
            );
        case 'caption':
            return (
                <Block
                    className={classNames(
                        styles['onion-text3'],
                        styles['caption'],
                        { [styles['margin-bottom']]: marginBottom }
                    )}
                    {...passthroughProps}
                    {...mappedProps}
                />
            );
        case 'label':
            return (
                <Block
                    className={classNames(
                        styles['onion-text3'],
                        styles['caption'],
                        { [styles['margin-bottom']]: marginBottom }
                    )}
                    {...passthroughProps}
                    {...mappedProps}
                />
            );
    }
};
