import styles from './index.module.css';

import { BlockProps, StyleResolver } from './types';

export const resolveListStyleType: StyleResolver<
    Pick<BlockProps, 'listStyleType'>
> = ({ listStyleType }) => {
    switch (listStyleType) {
        case undefined:
            return {};
        case 'none':
            return { [styles['list-style-type--none']]: true };
    }
};
