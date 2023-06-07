import styles from './index.module.css';

import { BlockProps, StyleResolver } from './types';

export const resolveCursor: StyleResolver<Pick<BlockProps, 'cursor'>> = ({
    cursor,
}) => {
    if (!cursor) return {};
    switch (cursor) {
        case 'pointer':
            return { [styles['cursor--pointer']]: true };
        case 'not-allowed':
            return { [styles['cursor--not-allowed']]: true };
    }
};
