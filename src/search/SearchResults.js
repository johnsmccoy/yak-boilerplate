import React, { Component } from "react"


export default class SearchResults extends Component {

    render() {
        return (
            <div>
                <h1>Search Results</h1>
                {this.props.terms}
            </div>

        )
    }
}
