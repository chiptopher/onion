import { BorderSpacing, IndividaulPadding } from '../size';
import {
    SpacingNonNumber,
    spacingNonNumberValues,
    SpacingValues,
} from './types';
import { BlockSpacing } from './util';

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
