/// <reference types="react" />
interface State {
    loading: boolean;
    setLoading: (v: boolean) => void;
}
export declare const LoadingContext: import("react").Context<State>;
export declare function useLoading(): [boolean, (value: boolean) => void];
export {};
