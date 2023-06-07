import React from 'react';

import styles from './index.module.css';

import { Block } from '../atoms/block';
import { Colors } from '../atoms/colors';
import { Body } from '../blocks/typography/body';
import { Caption } from '../blocks/typography/caption';
import { Label } from '../blocks/typography/label';

type Help =
    | string
    | {
          color: Colors;
          text: string;
      };

export interface WrapperProps {
    action?: React.ReactNode;
    borderRadius?: boolean;
    children: React.ReactNode;
    help?: Help;
    htmlFor?: string;
    label?: string | React.ReactNode;
    prefix?: string;
}

export const Wrapper: React.FunctionComponent<WrapperProps> = ({
    borderRadius = true,
    children,
    htmlFor,
    label,
    help,
    prefix,
    action,
}) => {
    return (
        <Block className={styles['onion-input-wrapper']}>
            {label && <Label htmlFor={htmlFor}>{label}</Label>}
            <Block display="flex" marginBottom="0.5">
                {prefix && (
                    <Block
                        alignItems="center"
                        borderRadius={borderRadius}
                        className="onion-input-wrapper--prefix"
                        color="grey"
                        colorTint="light"
                        display="flex"
                        paddingLeft="0.75"
                        paddingRight="0.75"
                    >
                        <Body>{prefix}</Body>
                    </Block>
                )}
                <>{children}</>
                {action && <Block marginLeft="0.5">{action}</Block>}
            </Block>
            <HelpText help={help} />
        </Block>
    );
};

export const HelpText: React.FunctionComponent<{ help?: Help }> = ({
    help,
}) => {
    if (!help) {
        return <></>;
    }
    if (typeof help === 'string') {
        return <Caption>{help}</Caption>;
    } else {
        return <Caption color={help.color}>{help.text}</Caption>;
    }
};
