import React from 'react';
import { Button } from '../blocks/button';
import { Loading } from '../blocks/loading';
import { Buttons } from '../components/buttons';
export var FormButtons = function () { return (React.createElement(Buttons, null,
    React.createElement(Button, { type: "reset" }, "Cancel"),
    React.createElement(Button, { type: "submit" },
        React.createElement(Loading.Spinner, null, "Submit")))); };
FormButtons.displayName = 'Form.Buttons';
