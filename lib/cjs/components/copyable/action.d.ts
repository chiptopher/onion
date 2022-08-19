import React from 'react';
export interface CopyableActionProps {
    style: 'text' | 'icon';
}
export declare const CopyableAction: React.FunctionComponent<CopyableActionProps>;
interface SprecificActionProps {
    onClick: () => void;
}
export declare const IconAction: React.FunctionComponent<SprecificActionProps>;
export {};
