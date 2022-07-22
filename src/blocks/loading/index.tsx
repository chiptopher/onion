import React from 'react';

import { ChildrenOnlyProps } from '../../atoms/util';
import {LoadingContext} from './contex';
import {LoadingSpinner} from './spinner';


export const Loading: React.FunctionComponent<ChildrenOnlyProps> & {
    Spinner: React.FunctionComponent<ChildrenOnlyProps>;
} = ({ children }) => {
    const [loading, setLoading] = React.useState(false);
    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export function withLoading(Component: any) {
    // eslint-disable-next-line react/display-name
    return (props: any) => (
        <Loading>
            <Component {...props} />
        </Loading>
    );
}

Loading.Spinner = LoadingSpinner;
