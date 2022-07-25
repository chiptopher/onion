import { Theme } from '../../theme';
import { Colors, resolveColorValue, Tint } from '../colors';

interface ResolvedColors {
    backgroundColor: string;
    color: string;
}

interface Config {
    color?: Colors;
    tint?: Tint;
}

export function resolveColors(theme: Theme, config?: Config): ResolvedColors {
    if (config && config.color) {
        return {
            backgroundColor: resolveColorValue(
                theme.backgroundColor[config.color],
                config.tint
            ),
            color: resolveColorValue(theme.backgroundTextColor[config.color]),
        };
    }
    return {
        backgroundColor: 'inherit',
        color: 'inherit',
    };
}
