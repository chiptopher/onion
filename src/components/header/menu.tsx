import React from 'react';

import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { block, Button, useTheme } from '../..';
import { Breakpoints } from '../../atoms/breakpoints';
import { Colors } from '../../atoms/colors';
import { isLessThan } from '../../atoms/media';
import { ChildrenOnlyProps } from '../../atoms/util';
import { ButtonProps } from '../../blocks/button';
import { HeaderContext, MenuContentContext } from './context';

export const HeaderMenu: React.FunctionComponent<Partial<ChildrenOnlyProps>> =
    ({ children, ...rest }) => {
        const breakpoints = useTheme().breakpoints;
        const [hamburgerOpen, setHamburgerOpen] = React.useState(false);
        const { setContent, setVisible } = React.useContext(MenuContentContext);

        React.useEffect(() => {
            setContent(children);
        }, []);

        React.useEffect(() => {
            setVisible(hamburgerOpen);
        }, [hamburgerOpen]);

        return (
            <Container {...rest} breakpoints={breakpoints}>
                {children}
                <a
                    aria-expanded="false"
                    aria-label="menu"
                    className="navbar-burger"
                    data-target="navbarBasicExample"
                    onClick={() => setHamburgerOpen(!hamburgerOpen)}
                    role="button"
                >
                    {hamburgerOpen ? (
                        <FontAwesomeIcon icon={faX} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </a>
            </Container>
        );
    };

HeaderMenu.displayName = 'Header.Menu';

const Container = styled.div<{ breakpoints: Breakpoints }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .navbar-burger {
        display: none;
        ${p => isLessThan(p.breakpoints.mobile.upper)} {
            display: block;
        }
    }

    ${p => isLessThan(p.breakpoints.mobile.upper)} {
        justify-content: flex-end;

        .header-menu-start,
        .header-menu-end {
            display: none;
        }
    }

    .header-menu-end {
        .menu-item {
            margin-left: ${block(2)};
        }
    }
`;

export interface HeaderNavContainerProps {
    children?: React.ReactNode;
    side: 'start' | 'end';
}

export const HeaderNavContainer: React.FunctionComponent<HeaderNavContainerProps> =
    ({ side, children, ...rest }) => {
        return (
            <div className={`header-menu-${side}`} {...rest}>
                {side === 'start'
                    ? children
                    : React.Children.toArray(children).map(
                          (child: any, index, array) => {
                              return React.cloneElement(child, {
                                  cta: index === array.length - 1,
                              });
                          }
                      )}
            </div>
        );
    };

HeaderNavContainer.displayName = 'Header.NavContainer';

export type HeaderMenuItemProps = {
    children: React.ReactNode;
    contrasting?: boolean;
    cta?: boolean;
} & Pick<ButtonProps, 'onClick'>;

export const HeaderMenuItem: React.FunctionComponent<HeaderMenuItemProps> = ({
    contrasting = false,
    cta,
    ...rest
}) => {
    const { inverted } = React.useContext(HeaderContext);
    let color: Colors | undefined;
    switch (true) {
        case inverted && !cta:
            color = 'text';
            break;
        case contrasting:
            color = 'light';
            break;
        case !contrasting:
            color = 'primary';
            break;
        default:
            color = undefined;
            break;
    }

    return (
        <span className="menu-item">
            <Button color={color} {...rest} />
        </span>
    );
};

HeaderMenuItem.displayName = 'Header.MenuItem';
