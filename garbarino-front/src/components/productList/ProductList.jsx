import React from 'react';
import ProductItem from './ProductItem';
import AddProduct from '../addProduct/AddProduct';
import './ProductList.css';

class ProductList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const productList = this.props.productList;
    return (
      <div className="ProductListContainer">
        <div className="ProductListCardContainer">
          {productList.map(product =>
            <ProductItem key={`${product.name}_item`} product={product} />
          )}
          <div className="AddProductCard" onClick={this.showModal}>
            <img src="/img/add-product.svg" alt=""/>
            <p> Agregar Producto </p>
          </div>
          <Modal show={this.state.show} handleClose={this.hideModal} >
            <AddProduct />
          </Modal>
        </div>
      </div>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button onClick={handleClose} className="CloseModal">
          <img src="/img/cancel.svg" alt=""/>
        </button>
      </section>
    </div>
  );
};

export default ProductList;
