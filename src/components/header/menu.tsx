import React from 'react';

import styles from './index.module.css';

import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '../..';
import { Colors } from '../../atoms/colors';
import { ChildrenOnlyProps } from '../../atoms/util';
import { ButtonProps } from '../../blocks/button';
import { HeaderContext, MenuContentContext } from './context';

export const HeaderMenu: React.FunctionComponent<
    Partial<ChildrenOnlyProps>
> = ({ children, ...rest }) => {
    const [hamburgerOpen, setHamburgerOpen] = React.useState(false);
    const { setContent, setVisible } = React.useContext(MenuContentContext);

    React.useEffect(() => {
        setContent(children);
    }, []);

    React.useEffect(() => {
        setVisible(hamburgerOpen);
    }, [hamburgerOpen]);

    return (
        <div {...rest} className={styles['onion-header-menu']}>
            {children}
            <a
                aria-expanded="false"
                aria-label="menu"
                className={styles['navbar-burger']}
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
        </div>
    );
};

HeaderMenu.displayName = 'Header.Menu';

export interface HeaderNavContainerProps {
    children?: React.ReactNode;
    side: 'start' | 'end';
}

export const HeaderNavContainer: React.FunctionComponent<
    HeaderNavContainerProps
> = ({ side, children, ...rest }) => {
    return (
        <div className={styles[`header-menu-${side}`]} {...rest}>
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
    contrasting?: boolean;
    cta?: boolean;
} & Exclude<ButtonProps, 'color'>;

export const HeaderMenuItem: React.FunctionComponent<HeaderMenuItemProps> = ({
    contrasting = false,
    cta,
    ...buttonProps
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
        <span className={styles['menu-item']}>
            <Button color={color} {...buttonProps} />
        </span>
    );
};

HeaderMenuItem.displayName = 'Header.MenuItem';
