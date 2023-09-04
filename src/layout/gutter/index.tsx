import React, { PropsWithChildren } from 'react';

import styles from './index.module.css';

import classnames from 'classnames';

import { Size } from '../../atoms/size';
import { Breakpoints, ForBreakpoints } from '../../atoms/types';

type P<T> = Partial<Pick<Record<keyof Breakpoints, T>, 'desktop' | 'mobile'>>;
type I = Extract<Size, 'large' | 'regular' | 'none'>;

export type GutterSize = ForBreakpoints<I, 'desktop' | 'mobile'>;

interface GutterProps extends PropsWithChildren {
    size?: GutterSize;
}

function dynamicPropsForSize(size?: GutterSize) {
    const result = {
        desktop: {
            large: false,
            none: false,
            regular: false,
        },
        mobile: { large: false, none: false, regular: false },
    };

    if (!size) {
        result.desktop.regular = true;
        result.mobile.regular = true;
    }

    if (typeof size === 'string') {
        switch (size) {
            case 'large':
                result.desktop.large = true;
                result.mobile.large = true;
                break;
            case 'regular':
                result.desktop.regular = true;
                result.mobile.regular = true;
                break;
            case 'none':
                result.desktop.none = true;
                result.mobile.none = true;
                break;
        }
    } else {
        const cast = size as P<I>;

        if (cast.desktop) {
            switch (cast.desktop) {
                case 'large':
                    result.desktop.large = true;
                    break;
                case 'regular':
                    result.desktop.regular = true;
                    break;
                case 'none':
                    result.desktop.none = true;
                    break;
            }
        } else {
            result.desktop.regular = true;
        }

        if (cast.mobile) {
            switch (cast.mobile) {
                case 'large':
                    result.mobile.large = true;
                    break;
                case 'regular':
                    result.mobile.regular = true;
                    break;
                case 'none':
                    result.mobile.none = true;
                    break;
            }
        } else {
            result.mobile.regular = true;
        }
    }
    return result;
}

export const Gutter: React.FunctionComponent<GutterProps> = ({
    children,
    size = 'regular',
}) => {
    const result = dynamicPropsForSize(size);
    return (
        <div>
            <div
                className={classnames('outer-gutter', styles['onion-gutter'], {
                    [styles[`onion-desktopsize--large`]]: result.desktop.large,
                    [styles[`onion-desktop-size--regular`]]:
                        result.desktop.regular,
                    [styles[`onion-desktop-size--none`]]: result.desktop.none,
                    [styles[`onion-mobile-size--large`]]: result.mobile.large,
                    [styles[`onion-mobile-size--regular`]]:
                        result.mobile.regular,
                    [styles[`onion-mobile-size--none`]]: result.mobile.none,
                })}
            >
                <div className={styles['onion-inner-gutter']}>{children}</div>
            </div>
        </div>
    );
};
