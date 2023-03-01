import React from 'react';

import { Block } from '../atoms/block';
import { Button } from '../blocks/button';
import { Loading } from '../blocks/loading';
import { Buttons } from '../components/buttons';

interface Props {}

export const FormButtons: React.FunctionComponent<Props> = () => (
    <Block marginTop="1.5">
        <Buttons>
            <Button type="reset">Cancel</Button>
            <Button type="submit">
                <Loading.Spinner>Submit</Loading.Spinner>
            </Button>
        </Buttons>
    </Block>
);

FormButtons.displayName = 'Form.Buttons';
