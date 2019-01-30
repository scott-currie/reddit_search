import React, { Component } from 'react'

export default class SearchResultList extends Component {

    render() {
        return (
            <div className="results">
                <ul>
                {this.props.items.map(item => <li key={item.data.title}><a href={item.data.url}>{item.data.title}</a>{item.data.ups}</li>)}
                </ul>
            </div>
        )
    }
}
