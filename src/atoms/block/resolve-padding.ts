import { BorderSpacing } from '../size';
import { SpacingValues } from './types';

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

    return `${topValue}rem ${right}rem ${bottom}rem ${left}rem`;
}
