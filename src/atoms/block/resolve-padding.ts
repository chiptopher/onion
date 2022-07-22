import { Padding } from '../size';
import { BlockPadding } from './util';

export function resolvePadding(padding?: BlockPadding): Padding {
    if (padding) {
        return `${padding}rem`;
    }
    return '0rem';
}
