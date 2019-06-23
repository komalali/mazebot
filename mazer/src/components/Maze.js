import React, { Component } from 'react';
import Grid from './Grid';

export default class Maze extends Component {
    state = {
        current: this.props.start,
        path: [this.props.start],
        map: this.props.map,
        solution: '',
        solved: false,
    };

    render() {
        return <Grid grid={this.state.map} />;
    }
}
