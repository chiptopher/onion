"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoading = exports.LoadingContext = void 0;
var react_1 = require("react");
exports.LoadingContext = (0, react_1.createContext)({
    loading: false,
    setLoading: console.log,
});
function useLoading() {
    var _a = (0, react_1.useContext)(exports.LoadingContext), loading = _a.loading, setLoading = _a.setLoading;
    return [loading, setLoading];
}
exports.useLoading = useLoading;
