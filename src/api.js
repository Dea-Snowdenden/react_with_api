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