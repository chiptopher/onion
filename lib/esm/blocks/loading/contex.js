import { createContext, useContext } from 'react';
export var LoadingContext = createContext({
    loading: false,
    setLoading: console.log,
});
export function useLoading() {
    var _a = useContext(LoadingContext), loading = _a.loading, setLoading = _a.setLoading;
    return [loading, setLoading];
}
