import React from 'react';

import { ChildrenOnlyProps } from '../atoms/util';
import { Body } from '../blocks/typography/body';
import { Callout } from '../components/callout';

export const FormErrorMessage: React.FunctionComponent<ChildrenOnlyProps> = ({
    children,
}) => (
    <Callout color="danger">
        <Body>{children}</Body>
    </Callout>
);

FormErrorMessage.displayName = 'Form.ErrorMessage';
