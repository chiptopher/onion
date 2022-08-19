import { REMValue } from './types';
export declare const spacingBaseSizeInRems = 0.5;
export declare type PossibleScale = 0.5 | 1 | 1.5 | 2 | 3 | 4 | 6;
export declare type Block = `${PossibleScale}`;
export declare const block: (input: PossibleScale | Block) => REMValue;
