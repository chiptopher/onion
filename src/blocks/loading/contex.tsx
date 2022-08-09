import { createContext, useContext } from 'react';

import { doNothing } from '../../util';

interface State {
    loading: boolean;
    setLoading: (v: boolean) => void;
}

export const LoadingContext = createContext<State>({
    loading: false,
    setLoading: doNothing,
});

export function useLoading(): [boolean, (value: boolean) => void] {
    const { loading, setLoading } = useContext(LoadingContext);
    return [loading, setLoading];
}
