import React,{ Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { withStyles } from '@material-ui/styles';
import { PropTypes } from 'prop-types';
import { AgGridReact } from 'ag-charts-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


import PubSub from 'pubsub-js';

const styles = theme => ({
    content: {
        flexGrow: 1,
        height: 1000,
        width: `calc(100%-240px)`,
        marginLeft: 240
    }
});

export class GridView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                { headerName: 'Currency', field: 'currency', resizable: true, width: 150 },
                { headerName: 'Tenor', field: 'tenor', resizable: true, sortable: 150 },
                {
                    headerName: 'Bid', field: 'bid', cellRenderer: 'agAnimateShowChangeCellRenderer',
                    resizable: true, cellClass: 'align-right', valueFormatter: currencyFormatter
                },
                {
                    headerName: 'Ask', field: 'ask', cellRenderer: 'agAnimateShowChangeCellRenderer',
                    resizable: true, cellClass: 'align-right', valueFormatter: currencyFormatter
                }
            ]
        };
    }
    render() {
        const { classes } = this.props;
        var gridOptions = {
            getRowNodeId: data => {
                return data.id;
            },
            deltaRowDataMode: true
        };
        //const data = this.props.ibcurve.data[0];
        const data = this.props.currency in this.props.ibcurve.data ? this.props.ibcurve.data[this.props.currency] : [];
        var gridHeight = window.innerHeight;
        console.log(this.props.ibcurve.data[0]);
        return (
            <div className="ag-theme-alpine" style={{ height: 280, width: '100%' }}>
                <AgGridReact
                    enableCellChangeFlash={false}
                    columnDefs={this.state.columnDefs}
                    rowData={data}
                    gridOptions={gridOptions}
                    ref={this.mGrid}
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
        );
        //return (
        //    <div className="ag-theme-alpine" style={{ height: 280, width: '100%' }}>
        //       GridView
        //    </div>
        //);
    }

    evtSource = null;
    gridApi = null;
    columnApi = null;
    mGrid = React.createRef();

    updateGrid = (msg, data) => {
        if (data.currency === this.props.currency) {
            if (this.mGrid.current) {
                const api = this.mGrid.current.api;
                if (data.bid < 0.5) {
                    let nd = api.getRowNode(data.id);
                    if (nd) {
                        api.flashCells({ rowNodes: [nd] });
                        setTimeout(() => {
                            api.updateRowData({
                                remove: [nd]
                            });
                        }, 1000);
                    }
                }
            }
        }
    };

    onGridReady = params => {
        this.columnApi = params.columnApi;
    };

    token = null;
    componentDidMount() {
        this.token = PubSub.subscribe('REAL_TIME_DATA', this.updateGrid);
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
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

function currencyFormatter(params) {
    return formatNumber(params.value);
}

function formatNumber(number) {
    return (Math.round(number * 100) / 100).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,1');
}

GridView.propTypes = {
    classes: PropTypes.object.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(GridView));