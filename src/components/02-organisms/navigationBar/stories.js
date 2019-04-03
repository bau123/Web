import React from 'react';
import {storiesOf} from '@storybook/react';
import NavigationBar from './';


const exampleData = ["Example 1", "Example3", "Example 3", "Example 4"];



storiesOf("Organisms/Navigation Bar", module).add("Default", () =>
    <NavigationBar>

        <NavigationBar.Menu>
            Option 1
        </NavigationBar.Menu>
        <NavigationBar.Menu>
            Option 2
        </NavigationBar.Menu>
        <NavigationBar.Menu>
            Option 3
        </NavigationBar.Menu>


    </NavigationBar>

);