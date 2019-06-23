import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Racer from '../components/Racer';
import Block from '../components/Block';
import Maze from '../components/Maze';
import mazeData from '../mock.json';

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    ));

storiesOf('Maze', module)
    .add('racer', () => <Racer />)
    .add('wall', () => <Block />)
    .add('maze', () => <Maze grid={mazeData.map} />);
