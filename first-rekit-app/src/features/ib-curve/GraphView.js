import React, { Component } from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { cloneDeep } from 'lodash';
import { AgChartsReact } from "ag-charts-react";

export class GraphView extends Component {

    graphOptions = {
        autoSize: true,
        data: [],
        title: { text: 'Tenor v. Bid/Ask' },
        axes: [
            {
                type: 'number',
                position: 'left',
                max: 4
            },
            {
                type: 'category',
                position: 'bottom'
            }
        ],
        series: [
            {
                xKey: 'tenor',
                yKey: 'bid',
                yName: 'bid'
            },
            {
                xKey: 'tenor',
                yKey: 'ask',
                yName: 'ask',
                stroke: 'black',
                marker: {
                    fill: 'gray',
                    stroke: 'black'
                }
            }
        ],
        legend: { spacing: 40 }
    };

    updateState(data) {
        let neopt = { ...this.state.options };
        neopt.data = data;

        this.setState({ options: neopt });
    }

    render() {
        console.log(this.props.currency);
        const data = this.props.currency in this.props.ibCurve.data ? this.props.ibCurve.data[this.props.currency] : [];
        this.graphOptions.data = data;
        return <AgChartsReact options={this.graphOptions} />;
    }
}

function mapStateToProps(state) {
    return {
        ibCurve: state.ibcurve
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...actions }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphView);