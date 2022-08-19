import React from 'react';
import { Body } from '../blocks/typography/body';
import { Callout } from '../components/callout';
export var FormErrorMessage = function (_a) {
    var children = _a.children;
    return (React.createElement(Callout, { color: "danger" },
        React.createElement(Body, null, children)));
};
FormErrorMessage.displayName = 'Form.ErrorMessage';
