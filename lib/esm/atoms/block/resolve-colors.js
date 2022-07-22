import { resolveColorValue } from '../colors';
export function resolveColors(theme, config) {
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
