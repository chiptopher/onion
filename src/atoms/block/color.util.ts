import styles from './index.module.css';

import { BlockProps, StyleResolver } from './types';

export const resolveColor: StyleResolver<
    Pick<
        BlockProps,
        | 'color'
        | 'colorTint'
        | 'colorHover'
        | 'colorTintHover'
        | 'textColor'
        | 'textColorTint'
    >
> = ({
    color,
    colorTint,
    colorHover,
    colorTintHover,
    textColor,
    textColorTint,
}) => {
    return {
        [styles[`background-color--${color}--${colorTint || 'regular'}`]]:
            Boolean(color),
        [styles[
            `background-color--${colorHover}--${
                colorTintHover || 'regular'
            }--hover`
        ]]: Boolean(colorHover),
        [styles[`text-color--${textColor}--${textColorTint || 'regular'}`]]:
            Boolean(textColor),
        [styles[`text-color`]]: Boolean(color),
    };
};
