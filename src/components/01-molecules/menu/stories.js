import React from 'react'

import { storiesOf } from '@storybook/react';

import Menu from './'

const exampleData = ["Example 1", "Example3", "Example 3", "Example 4"];

storiesOf('Molecules/Menu', module).add('Menu', () =>
    <Menu list={exampleData}>
        <Menu.Header>Header</Menu.Header>
    </Menu>

    );
