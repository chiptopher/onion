import { Theme } from '../../theme';
import { Colors, resolveColorValue, Tint } from '../colors';

interface ResolvedColors {
    backgroundColor: string;
    backgroundColorHover?: string;
    color: string;
    colorHover?: string;
}

interface Config {
    color?: Colors;
    colorHover?: Colors;
    textColor?: Colors;
    textColorTint?: Tint;
    tint?: Tint;
    tintHover?: Tint;
}

export function resolveColors(theme: Theme, config?: Config): ResolvedColors {
    const c: ResolvedColors = {
        backgroundColor: 'inherit',
        backgroundColorHover: undefined,
        color: 'inherit',
        colorHover: undefined,
    };
    if (!config) {
        return c;
    }
    if (config.color) {
        c.backgroundColor = resolveColorValue(
            theme.backgroundColor[config.color],
            config.tint
        );
        c.color = resolveColorValue(theme.backgroundTextColor[config.color]);
    }

    if (config.textColor) {
        c.color = resolveColorValue(
            theme.textColor[config.textColor],
            config.textColorTint
        );
    }

    if (config.colorHover) {
        c.backgroundColorHover = resolveColorValue(
            theme.backgroundColor[config.colorHover],
            config.tintHover
        );
        c.colorHover = resolveColorValue(
            theme.backgroundTextColor[config.colorHover]
        );
    }
    return c;
}
