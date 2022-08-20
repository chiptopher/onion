import React from 'react';

interface HeaderContextState {
    inverted: boolean;
}

export const HeaderContext = React.createContext<HeaderContextState>({
    inverted: false,
});
