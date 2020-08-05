import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";
const mapStateToProps = (state) => {
    console.log(state);
    return state;
}
const mapDispatchToProps = {
    loadData
}
const filterProducts = (products = [], category) =>
    (!category || category === "All")
        ? products
        : products.filter(p => p.category.toLowerCase() === category.toLowerCase());

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
            return <Switch>
                <Route path="/shop/products/:category?"
                    render={
                        (routeProps) => {
                            //console.log(routeProps);
                            //console.log(this.props);
                            //return (<div>Hello, World!!!</div>);
                            return (<Shop {...this.props} {...routeProps}
                                products={
                                    filterProducts(this.props.products, routeProps.match.params.category)
                                } />)
                        }
                    } />
                <Redirect to="/shop/products" />
            </Switch>
        }
        componentDidMount() {
            debugger;
            this.props.loadData(DataTypes.CATEGORIES);
            this.props.loadData(DataTypes.PRODUCTS);
        }
    }
)