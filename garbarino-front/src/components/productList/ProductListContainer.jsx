import React from 'react';
import _ from 'lodash';
import { getAllProducts } from '../../methods';
import MensajeError from '../mensajeError/MensajeError';
import Loading from '../loading/Loading';
import ProductList from "./ProductList";

class ProductListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      loading: true,
      error: false
    };
  }

  componentWillMount() {
    this.getAllProducts();
  }

  getAllProducts = () => {
    const newState = Object.assign({}, this.state, { loading: false });
    this.setState({ loading: true });

    getAllProducts()
      .then((data) => {
        if (_.isEmpty(data)) {
          newState.error = true;
        } else {
          newState.error = false;
          newState.data = data;
        }
        this.setState(newState);
      })
      .catch((error) => {
        console.log('Error', error);
        this.setState({ loading: false, error: true });
      });
  };

  retry = () => {
    this.getAllProducts();
  };

  render() {
    const { loading, error, data } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <MensajeError retry={this.retry} />;
    }

    return <ProductList productList={data} />;
  }
}

export default ProductListContainer;
