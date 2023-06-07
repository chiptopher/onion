//TODO move to types

import { SpacingValues } from './types';

export function mapSpacingToClassNameString(spacing: SpacingValues) {
    switch (spacing) {
        case '0.25':
            return '0_25';
        case '0.5':
            return '0_5';
        case '0.75':
            return '0_75';
        case '1.5':
            return '1_5';
        default:
            return spacing;
    }
}
