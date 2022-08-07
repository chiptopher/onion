import { Theme } from '../../theme';
import { Colors, Tint } from '../colors';
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
export declare function resolveColors(theme: Theme, config?: Config): ResolvedColors;
export {};
