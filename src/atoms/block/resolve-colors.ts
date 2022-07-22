import { Theme } from '../../theme';
import { Colors, resolveColorValue } from '../colors';

interface ResolvedColors {
    backgroundColor: string;
    color: string;
}

export function resolveColors(theme: Theme, config?: Colors): ResolvedColors {
    if (config) {
        return {
            backgroundColor: resolveColorValue(theme.backgroundColor[config]),
            color: resolveColorValue(theme.backgroundTextColor[config]),
        };
    }
    return {
        backgroundColor: 'inherit',
        color: 'inherit',
    };
}
