import React from 'react';

import { Button } from '../blocks/button';
import { Loading } from '../blocks/loading';
import { Buttons } from '../components/buttons';

interface Props {}

export const FormButtons: React.FunctionComponent<Props> = () => (
    <Buttons>
        <Button type="reset">Cancel</Button>
        <Button type="submit">
            <Loading.Spinner>Submit</Loading.Spinner>
        </Button>
    </Buttons>
);

FormButtons.displayName = 'Form.Buttons';
