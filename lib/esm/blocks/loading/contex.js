import { createContext, useContext } from 'react';
import { doNothing } from '../../util';
export var LoadingContext = createContext({
    loading: false,
    setLoading: doNothing,
});
export function useLoading() {
    var _a = useContext(LoadingContext), loading = _a.loading, setLoading = _a.setLoading;
    return [loading, setLoading];
}
