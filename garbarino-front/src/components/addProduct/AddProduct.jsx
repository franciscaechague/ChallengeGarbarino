import React from 'react';
import { addProduct } from '../../methods';
import AddProductForm from './AddProductForm';
import './AddProduct.css';

class AddProduct extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      productSaved: false,
      product: {
        name: '',
        price: '',
        list_price: '',
        brand: '',
        category_id: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newProduct = Object.assign({}, this.state.product, { [event.target.name]: event.target.value });
    this.setState({ product: newProduct });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });

    addProduct(this.state.product)
      .then((res) => {
        console.log(res);
        this.setState({ loading: false, productSaved: true });
        this.props.onProductAdded();
      })
      .catch((error) => {
        this.setState({ loading: false, error: error });
      });
  }

  render() {
    const { product, loading } = this.state;
    if (loading) {
      return (
        <loading />
      )
    }
    return (
      <AddProductForm
        product={product}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}


export default AddProduct;


