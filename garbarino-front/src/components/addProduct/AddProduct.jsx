import React from 'react';
import './AddProduct.css';

const data = [
  {
    id: 'name',
    name: 'Nombre'
  }, {
    id: 'price',
    name: 'Precio'
  }, {
    id: 'list_price',
    name: 'Precio de lista'
  }, {
    id: 'brand',
    name: 'Marca'
  }, {
    id: 'category_id',
    name: '# de Categoria'
  }
];

class AddProduct extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: '',
      list_price: '',
      brand: '',
      category_id: ''
    };
  }

  render() {
    return (
      <div className="ModalContainer">
        <h4> Agregar Producto </h4>
        <div className="ModalFormContainer">
          <form>
            {data.map(input =>
              <div className="ModalInputContainer">
                <p>{input.name}</p>
                <input
                  type="text"
                  placeholder={input.name}
                  name={input.id}
                />
              </div>
            )}
            <div className="ButtonContainer">
              <button type="submit" value="Add">
                <p>Agregar</p>
                <img src="/img/add-product.svg" alt="agregar"/>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default AddProduct;
