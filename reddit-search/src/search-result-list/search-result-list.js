import React, { Component } from 'react'

export default class SearchResultList extends Component {

    render() {
        return (
            <div className="results">
                <ul>
                {this.props.items.map(item =>
                    <li key={item.data.title}>
                        <a href={item.data.url}>
                            <h3>{item.data.title}</h3>
                            <p>{item.data.ups}</p>
                        </a>
                    </li>)}
                </ul>
            </div>
        )
    }
}
