import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { GridView } from "./Grid/GridView";
import { GraphView } from "./Graph/GraphView";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
export class GridGraphView extends Component {
    render() {
        return (
            <Grid container spacing={1}>
                <Grid item sm={6}>
                    <GridView currency={this.props.currency}  {...this.props}/>
                </Grid>
                <Grid item sm={6}>
                    <GraphView currency={this.props.currency}  {...this.props}></GraphView>
                </Grid>
            </Grid>
        );
    }
}
function mapStateToProps(state) {
    return {
        ibcurve: state.ibcurve
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...actions }, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(GridGraphView);