import React from 'react';

import styled from 'styled-components';

import { block, Button } from '../..';
import { Colors } from '../../atoms/colors';
import { ChildrenOnlyProps } from '../../atoms/util';
import { ButtonProps } from '../../blocks/button';
import { HeaderContext } from './context';

export const HeaderMenu: React.FunctionComponent<Partial<ChildrenOnlyProps>> =
    props => {
        return <Container {...props} />;
    };

HeaderMenu.displayName = 'Header.Menu';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

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
