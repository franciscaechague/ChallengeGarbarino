import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import ProductList from './components/productList/ProductList';
import response from './components/FakeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <ProductList productList={response} />
      </div>
    );
  }
}

export default App;
