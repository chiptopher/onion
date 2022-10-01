import React from 'react';

import { ChildrenOnlyProps } from '../../atoms/util';
import { LoadingContext } from './contex';
import { LoadingSpinner } from './spinner';
import { LoadingText } from './text';

interface Props {
    children?: React.ReactNode;
    initialState?: boolean;
}

export const Loading: React.FunctionComponent<Props> & {
    Spinner: React.FunctionComponent<ChildrenOnlyProps>;
    Text: React.FunctionComponent<ChildrenOnlyProps>;
} = ({ children, initialState = false }) => {
    const [loading, setLoading] = React.useState(initialState);
    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export function withLoading<T>(Component: React.FunctionComponent<T>) {
    // eslint-disable-next-line react/display-name
    return (props: any) => (
        <Loading>
            <Component {...props} />
        </Loading>
    );
}

Loading.Spinner = LoadingSpinner;
Loading.Text = LoadingText;
