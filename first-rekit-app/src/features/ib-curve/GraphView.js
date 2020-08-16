import React,{ Component } from "react";

export class GraphView extends Component {
    render() {
        console.log(this.props.currency);
        return (<div>{this.props.currency}</div>);
    }
}