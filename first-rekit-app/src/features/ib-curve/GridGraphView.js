import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { GridView } from "./GridView";
import { GraphView } from "./GraphView";
export class GridGraphView extends Component {
    render() {
        return (
            <Grid container spacing={1}>
                <Grid item sm={6}>
                    <GridView currency={this.props.currency}/>
                </Grid>
                <Grid item sm={6}>
                    <GraphView currency={this.props.currency}></GraphView>
                </Grid>
            </Grid>
        );
    }
}