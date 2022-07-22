import { BorderSpacing } from '../size';
import { BlockSpacing } from './util';

export function resolveBorderSpacing(value: {
    all?: BlockSpacing;
    bottom?: BlockSpacing;
    left?: BlockSpacing;
    right?: BlockSpacing;
    top?: BlockSpacing;
}): BorderSpacing {
    let topValue: BlockSpacing = value.all || '0';
    let bottom: BlockSpacing = value.all || '0';
    let left: BlockSpacing = value.all || '0';
    let right: BlockSpacing = value.all || '0';

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
