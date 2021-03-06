import React, { Component } from 'react';
import './App.css';
import SearchForm from './search-form/search-form';
import SearchResultList from './search-result-list/search-result-list';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(searchResults) {
    this.setState({results: searchResults})
  }


  render() {
    return (
      <div className="App">

        <SearchForm onSearch={this.handleSearch} />

        <SearchResultList items={this.state.results} />


      </div>
    )
  }
}

export default App;
