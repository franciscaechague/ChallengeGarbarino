import React from 'react';
import { addProduct } from '../../methods';
import './AddProduct.css';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
      const name = event.target[0].value;
      const price = event.target[1].value;
      const list_price= event.target[2].value;
      const brand = event.target[3].value;
      const category_id = event.target[4].value;
    this.setState({ name, price, list_price, brand, category_id });
    addProduct(this.state);
  }

  render() {
    return (
      <div className="ModalContainer">
        <h4> Agregar Producto </h4>
        <div className="ModalFormContainer">
          <form onSubmit={this.handleSubmit}>
              <div className="ModalInputContainer">
                <p>Nombre</p>
                <input
                  type="text"
                  name= "name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            <div className="ModalInputContainer">
              <p>Precio</p>
              <input
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>
            <div className="ModalInputContainer">
              <p>Precio de lista</p>
              <input
                type="text"
                name="list_price"
                value={this.state.list_price}
                onChange={this.handleChange}
              />
            </div>
            <div className="ModalInputContainer">
              <p>Marca</p>
              <input
                type="text"
                name="brand"
                value={this.state.brand}
                onChange={this.handleChange}
              />
            </div>
            <div className="ModalInputContainer">
              <p># de Categoría</p>
              <input
                type="text"
                name="category_id"
                value={this.state.category_id}
                onChange={this.handleChange}
              />
            </div>

            <div className="ButtonContainer">
              <button type="submit" value="Submit">
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


// const data = [
//   {
//     id: 'name',
//     name: 'Nombre'
//   }, {
//     id: 'price',
//     name: 'Precio'
//   }, {
//     id: 'list_price',
//     name: 'Precio de lista'
//   }, {
//     id: 'brand',
//     name: 'Marca'
//   }, {
//     id: 'category_id',
//     name: '# de Categoria'
//   }
// ];


// render() {
//   return (
//     <div className="ModalContainer">
//       <h4> Agregar Producto </h4>
//       <div className="ModalFormContainer">
//         <form>
//           {data.map(input =>
//             <div className="ModalInputContainer">
//               <p>{input.name}</p>
//               <input
//                 type="text"
//                 name={input.id}
//                 value={input.id}
//                 onChange={this.handleChange}
//               />
//             </div>
//           )}
//           <div className="ButtonContainer">
//             <button type="submit" value="Submit">
//               <p>Agregar</p>
//               <img src="/img/add-product.svg" alt="agregar"/>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

