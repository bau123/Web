import React from 'react';
import {storiesOf} from '@storybook/react';
import DefaultPage from "./";


storiesOf("Templates/Default Page", module).add("Standard", () =>
    <DefaultPage>
    </DefaultPage>);