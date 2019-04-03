import React from 'react';

import { storiesOf } from '@storybook/react';
import Button, {ButtonShape, ButtonSize} from './'


storiesOf('Atoms/Button/Default', module)
    .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
    .add('Small', () => <Button className={"btn-default-small"}>Small Button</Button>)
    .add('Medium', () => <Button shape={ButtonShape.DEFAULT} size={ButtonSize.MEDIUM} className={"btn-default-medium"}>Medium Button</Button>)
    .add('Large', () => <Button shape={ButtonShape.DEFAULT} size={ButtonSize.LARGE} className={"btn-default-large"}>Large Button</Button>);


storiesOf('Atoms/Button/Round', module)
    .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
    .add('Small', () => <Button shape={ButtonShape.ROUND} size={ButtonSize.SMALL} className={"btn-round-small"}>Small Button</Button>)
    .add('Medium', () => <Button shape={ButtonShape.ROUND} size={ButtonSize.MEDIUM} className={"btn-round-medium"}>Medium Button</Button>)
    .add('Large', () => <Button shape={ButtonShape.ROUND} size={ButtonSize.LARGE} className={'btn-round-large'}>Large Button</Button>);

