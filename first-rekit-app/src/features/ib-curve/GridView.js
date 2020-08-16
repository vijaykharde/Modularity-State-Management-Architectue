import React,{ Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { withStyles } from '@material-ui/styles';
import { PropTypes } from 'prop-types';
import { AgGridReact } from 'ag-charts-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const styles = theme => ({
    content: {
        flexGrow: 1,
        height: 1000,
        width: `calc(100%-240px)`,
        marginLeft: 240
    }
});

export class GridView extends Component {
    render() {
        return (<div>Grid View</div>);
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
GridView.propTypes = {
    classes: PropTypes.object.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(GridView));