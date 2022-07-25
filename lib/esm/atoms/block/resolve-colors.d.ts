import { Theme } from '../../theme';
import { Colors, Tint } from '../colors';
interface ResolvedColors {
    backgroundColor: string;
    color: string;
}
interface Config {
    color?: Colors;
    tint?: Tint;
}
export declare function resolveColors(theme: Theme, config?: Config): ResolvedColors;
export {};
