import styles from './index.module.css';

import { BlockProps, StyleResolver } from './types';

export const resolveTextDecoration: StyleResolver<
    Pick<BlockProps, 'textDecoration'>
> = ({ textDecoration }) => {
    if (!textDecoration) return {};
    switch (textDecoration) {
        case 'none':
            return { [styles['text-decoration--none']]: true };
        case 'underline':
            return { [styles['text-decoration--underline']]: true };
    }
};
