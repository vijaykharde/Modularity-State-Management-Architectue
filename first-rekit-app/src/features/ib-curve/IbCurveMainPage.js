import  React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { AppBarDrawer } from './AppBarDrawer';
import { GridGraphView } from './GridGraphView';
import PubSub from 'pubsub-js';
import { HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';
import { withStyles } from '@material-ui/core';
const styles = theme => ({
    root: {
        display: 'flex'
    },
    GridGrafCSS: {
        marginTop: 64,
        marginLeft: 5,
        display: 'flex',
        overflowX: 'auto'
    }
});
export class IbCurveMainPage extends Component {
    hubConnection = null;
    componentDidMount() {
        this.hubConnection = new HubConnectionBuilder().withUrl('/RealTimeData', HttpTransportType.WebSockets | HttpTransportType.LongPolling).build();
        this.hubConnection.on('setCurveData', receivedMessage => {
            console.log(receivedMessage);
            PubSub.publish('REAL_TIME_DATA', JSON.parse(receivedMessage));
            this.props.actions.updateRealTimeData('CHF', JSON.parse(receivedMessage));
        });

        //this.hubConnection.start().then(() => { console.log("COnnection started"); }).catch((err) => { console.log(err); });
    }

    render() {
        //return(<div>Hello, World!!!</div>);
        const { classes } = this.props;
        const currList = Object.keys(this.props.ibCurve.currList).filter(item => {
            return this.props.ibCurve.currList[item];
        });
        return (
            <div className={classes.root}>
                <AppBarDrawer {...this.props} />
                <div className={classes.GridGrafCSS}>
                    {
                        currList.map(cur => {
                            return <GridGraphView key={cur} currency={cur} />;
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //console.log(state);
    return {
        ibCurve: state.ibcurve
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...actions }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(IbCurveMainPage));