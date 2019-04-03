import React from 'react';
import { storiesOf } from '@storybook/react';
import TextField from './'
import {ButtonShape, ButtonSize} from "../../00-atoms/button";

storiesOf('Molecules/TextField', module).add("Default", () => <TextField>First Name: </TextField>)
    .add('Example - Big', () =>  <TextField width={'100'} height={'5'}>First Name: </TextField>)
;

