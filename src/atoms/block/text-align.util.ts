import styles from './index.module.css';

import { BlockProps, StyleResolver } from './types';

export const resolveTextAlgin: StyleResolver<Pick<BlockProps, 'textAlign'>> = ({
    textAlign,
}) => {
    switch (textAlign) {
        case undefined:
            return {};
        case 'left':
            return { [styles['text-align--left']]: true };
        case 'right':
            return { [styles['text-align--right']]: true };
        case 'center':
            return { [styles['text-align--center']]: true };
    }
};
