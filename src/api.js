import React, { Component } from 'react';

const api key = restaurant => 'e5c7724171fab5d6d9d4099dfcaf985a'

class RestoAPI extends Component {
    constructor(props)
    super(props)
    this.state = {}
}

componentDidMount() {

    fetch(url(this.props.breed))
    .then(d => d.json())
    .then(d => {
        this.setState({
            RestaurantData: d
        });
    });
};


render() {
    if(!this.state.RestaurantData) return <p> Loading .... </p>
    return (
        <div>
            <h1> API </h1>
            <h2>{this.props.RestaurantData}
            <img
            src={this.state.RestaurantData.message}
            alt={this.props.Restaurant}
            width=""
            height=""
        </div>
    )
}

export default RestoAPI;



https://facebook.github.io/react-native/releases/0.27/docs/sample-application-movies.html 

https://stackoverflow.com/questions/38742334/what-is-right-way-to-do-api-call-in-react-js 

https://github.com/Shopify/storefront-api-examples/tree/master/react-js-buy

https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/
