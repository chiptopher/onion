import { REMValue } from "./types";

export const spacingBaseSizeInRems = 0.5;

export type PossibleScale = 0.5 | 1 | 1.5 | 2 | 3 | 4 | 6;

export type Block = `${PossibleScale}`;

/*
 * @deprecated
 */
export const block = (input: PossibleScale | Block): REMValue => {
  if (typeof input === "string") {
    return `${parseInt(input) * spacingBaseSizeInRems}rem`;
  }
  return `${input * spacingBaseSizeInRems}rem`;
};
