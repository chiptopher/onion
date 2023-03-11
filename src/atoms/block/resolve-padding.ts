import { Breakpoints } from '../breakpoints';
import { isGreaterThan, isLessThan } from '../media';
import { BorderSpacing, IndividaulPadding } from '../size';
import {
    PaddingProps,
    SpacingNonNumber,
    spacingNonNumberValues,
    SpacingPropsValue,
    SpacingValues,
} from './types';
import { BlockSpacing } from './util';

interface EvalInfo {
    breakpoints: Breakpoints;
    direction?: string;
    type: 'padding' | 'margin';
    value: SpacingPropsValue;
}

export function evaluateValue({
    breakpoints,
    direction,
    type,
    value,
}: EvalInfo) {
    if (typeof value === 'string') {
        return `
${type}${direction ? `-${direction}` : ''}: ${value}rem;
`;
    } else {
        return `
${
    value.desktop
        ? `${type}${direction ? `-${direction}` : ''}: ${value.desktop}rem;`
        : ''
}
${Boolean(value.mobile) && isLessThan(breakpoints.mobile.upper)} {
    ${type}${direction ? `-${direction}` : ''}: ${value.mobile}rem;
}
${Boolean(value.tablet) && isLessThan(breakpoints.tablet.upper)} {
    ${type}${direction ? `-${direction}` : ''}: ${value.tablet}rem;
}
${Boolean(value.wide) && isGreaterThan(breakpoints.wide.lower)} {
    ${type}${direction ? `-${direction}` : ''}: ${value.wide}rem;
}
`;
    }
}

export function resolveBorderSpacing2(
    value: PaddingProps,
    breakpoints: Breakpoints
) {
    return `
    ${
        (value.padding &&
            evaluateValue({
                breakpoints,
                type: 'padding',
                value: value.padding,
            })) ||
        ''
    }
    ${
        (value.paddingBottom &&
            evaluateValue({
                breakpoints,
                direction: 'bottom',
                type: 'padding',
                value: value.paddingBottom,
            })) ||
        ''
    }
    ${
        (value.paddingTop &&
            evaluateValue({
                breakpoints,
                direction: 'top',
                type: 'padding',
                value: value.paddingTop,
            })) ||
        ''
    }
    ${
        (value.paddingRight &&
            evaluateValue({
                breakpoints,
                direction: 'right',
                type: 'padding',
                value: value.paddingRight,
            })) ||
        ''
    }
    ${
        (value.paddingLeft &&
            evaluateValue({
                breakpoints,
                direction: 'left',
                type: 'padding',
                value: value.paddingLeft,
            })) ||
        ''
    }
    
`;
}

export function resolveBorderSpacing(value: {
    all?: SpacingValues;
    bottom?: SpacingValues;
    left?: SpacingValues;
    right?: SpacingValues;
    top?: SpacingValues;
}): BorderSpacing {
    let topValue: SpacingValues = value.all || '0';
    let bottom: SpacingValues = value.all || '0';
    let left: SpacingValues = value.all || '0';
    let right: SpacingValues = value.all || '0';

    if (value.top) {
        topValue = value.top;
    }
    if (value.bottom) {
        bottom = value.bottom;
    }
    if (value.left) {
        left = value.left;
    }
    if (value.right) {
        right = value.right;
    }

    return `${determineValue(topValue)} ${determineValue(
        right
    )} ${determineValue(bottom)} ${determineValue(left)}`;
}

function determineValue(value: SpacingValues): IndividaulPadding {
    if (spacingNonNumberValues.includes(value as any)) {
        return value as SpacingNonNumber;
    } else {
        return `${value as BlockSpacing}rem`;
    }
}
