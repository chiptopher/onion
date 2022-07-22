import { Theme } from '../../theme';
import { Colors } from '../colors';
interface ResolvedColors {
    backgroundColor: string;
    color: string;
}
export declare function resolveColors(theme: Theme, config?: Colors): ResolvedColors;
export {};
