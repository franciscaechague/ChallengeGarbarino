import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import ProductListContainer from './components/productList/ProductListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <ProductListContainer />
      </div>
    );
  }
}

export default App;
