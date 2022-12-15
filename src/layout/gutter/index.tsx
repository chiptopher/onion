import React, { PropsWithChildren } from 'react';

import classnames from 'classnames';
import styled from 'styled-components';

import { block } from '../..';
import { Breakpoints } from '../../atoms/breakpoints';
import { isLessThan } from '../../atoms/media';
import { Size } from '../../atoms/size';
import { useTheme } from '../../theme';

type P<T> = Partial<Pick<Record<keyof Breakpoints, T>, 'desktop' | 'mobile'>>;
type ForBreakpoints<T> = T | P<T>;
type I = Extract<Size, 'regular' | 'none'>;
type GutterSize = ForBreakpoints<I>;

interface Props extends PropsWithChildren {
    size?: GutterSize;
}

function dynamicPropsForSize(size?: GutterSize) {
    const result = {
        desktop__none: false,
        desktop__regular: false,
        mobile__none: false,
        mobile__regular: false,
    };
    if (!size) {
        result.desktop__regular = true;
        result.mobile__regular = true;
    }
    if (typeof size === 'string') {
        switch (size) {
            case 'regular':
                result.desktop__regular = true;
                result.mobile__regular = true;
                break;
            case 'none':
                result.desktop__none = true;
                result.mobile__none = true;
                break;
        }
    } else {
        const cast = size as P<I>;

        if (cast.desktop) {
            switch (cast.desktop) {
                case 'regular':
                    result.desktop__regular = true;
                    break;
                case 'none':
                    result.desktop__none = true;
                    break;
            }
        } else {
            result.desktop__regular = true;
        }

        if (cast.mobile) {
            switch (cast.mobile) {
                case 'regular':
                    result.mobile__regular = true;
                    break;
                case 'none':
                    result.mobile__none = true;
                    break;
            }
        } else {
            result.mobile__regular = true;
        }
    }

    return result;
}

export const Gutter: React.FunctionComponent<Props> = ({
    children,
    size = 'regular',
}) => {
    const theme = useTheme();
    return (
        <Container breakpoints={theme.breakpoints} size={size}>
            <div
                className={classnames('outer-gutter', {
                    ...dynamicPropsForSize(size),
                })}
            >
                <div className="inner-gutter">{children}</div>
            </div>
        </Container>
    );
};

const Container = styled.div<{ breakpoints: Breakpoints; size: GutterSize }>`
    .desktop__regular {
        margin: 0 auto;
        width: 1024px;
    }

    .desktop__none {
    }

    .desktop__none,
    .desktop__regular {
        ${p => isLessThan(p.breakpoints.desktop.upper)} {
            width: 100%;

            &.mobile__regular {
                .inner-gutter {
                    padding: 0 ${block(2)};
                }
            }
        }
    }
`;
