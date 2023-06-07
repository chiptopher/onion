import style from './index.module.css';

import {
    MarginProps,
    PaddingProps,
    SpacingPropsValue,
    SpacingValues,
    StyleResolver,
} from './types';
import { mapSpacingToClassNameString } from './util';

export const resolveMargin: StyleResolver<MarginProps> = ({
    margin,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
}) => {
    let finalOutput = {};
    if (margin) {
        finalOutput = resolvePaddingProperty(margin, finalOutput, {
            type: 'margin',
        });
    }
    if (marginTop) {
        finalOutput = resolvePaddingProperty(marginTop, finalOutput, {
            prefix: 'top',
            type: 'margin',
        });
    }
    if (marginRight) {
        finalOutput = resolvePaddingProperty(marginRight, finalOutput, {
            prefix: 'right',
            type: 'margin',
        });
    }
    if (marginLeft) {
        finalOutput = resolvePaddingProperty(marginLeft, finalOutput, {
            prefix: 'left',
            type: 'margin',
        });
    }
    if (marginBottom) {
        finalOutput = resolvePaddingProperty(marginBottom, finalOutput, {
            prefix: 'bottom',
            type: 'margin',
        });
    }
    return finalOutput;
};

type SpacingType = 'margin' | 'padding';

export const resolvePadding: StyleResolver<PaddingProps> = ({
    padding,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
}) => {
    let finalOutput = {};
    if (padding) {
        finalOutput = resolvePaddingProperty(padding, finalOutput, {
            type: 'padding',
        });
    }
    if (paddingTop) {
        finalOutput = resolvePaddingProperty(paddingTop, finalOutput, {
            prefix: 'top',
            type: 'padding',
        });
    }
    if (paddingRight) {
        finalOutput = resolvePaddingProperty(paddingRight, finalOutput, {
            prefix: 'right',
            type: 'padding',
        });
    }
    if (paddingLeft) {
        finalOutput = resolvePaddingProperty(paddingLeft, finalOutput, {
            prefix: 'left',
            type: 'padding',
        });
    }
    if (paddingBottom) {
        finalOutput = resolvePaddingProperty(paddingBottom, finalOutput, {
            prefix: 'bottom',
            type: 'padding',
        });
    }
    return finalOutput;
};

function resolvePaddingProperty(
    padding: SpacingPropsValue,
    finalOutput: object,
    config: { prefix?: 'top' | 'left' | 'right' | 'bottom'; type: SpacingType }
) {
    if (typeof padding === 'string') {
        finalOutput = {
            ...finalOutput,
            [style[
                `${config.type}${
                    config.prefix ? `-${config.prefix}` : ''
                }--size-${mapSpacingToClassNameString(
                    padding as SpacingValues
                )}`
            ]]: true,
        };
    } else {
        finalOutput = {
            ...finalOutput,
            [style[
                `${config.type}${
                    config.prefix ? `-${config.prefix}` : ''
                }--size-${mapSpacingToClassNameString(
                    padding.mobile || '0'
                )}--breakpoint-mobile`
            ]]: padding.mobile,
            [style[
                `${config.type}${
                    config.prefix ? `-${config.prefix}` : ''
                }--size-${mapSpacingToClassNameString(
                    padding.tablet || '0'
                )}--breakpoint-tablet`
            ]]: padding.tablet,
            [style[
                `${config.type}${
                    config.prefix ? `-${config.prefix}` : ''
                }--size-${mapSpacingToClassNameString(
                    padding.desktop || '0'
                )}--breakpoint-desktop`
            ]]: padding.desktop,
        };
    }

    return finalOutput;
}
