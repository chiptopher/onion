import { createContext, useContext } from 'react';

interface State {
    loading: boolean;
    setLoading: (v: boolean) => void;
}

export const LoadingContext = createContext<State>({
    loading: false,
    setLoading: console.log,
});

export function useLoading(): [boolean, (value: boolean) => void] {
    const { loading, setLoading } = useContext(LoadingContext);
    return [loading, setLoading];
}
