import { resolveColorValue } from '../colors';
export function resolveColors(theme, config) {
    if (config && config.color) {
        return {
            backgroundColor: resolveColorValue(theme.backgroundColor[config.color], config.tint),
            color: resolveColorValue(theme.backgroundTextColor[config.color]),
        };
    }
    return {
        backgroundColor: 'inherit',
        color: 'inherit',
    };
}
