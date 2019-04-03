import React from 'react';

import { storiesOf } from '@storybook/react';
import Label, {fontSize} from './'

const text = 'Sollicitudin habitasse sodales aenean eleifend faucibus felis sociosqu elementum ipsum dictumst per eleifend';

storiesOf('Atoms/Label', module)
    .add('Standard', () => <Label>{text}</Label>)




