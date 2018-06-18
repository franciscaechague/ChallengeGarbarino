import React from 'react';

const AddProductForm  = ({ product, handleChange, handleSubmit }) => (
  <div className="ModalContainer">
    <h4> Agregar Producto </h4>
    <div className="ModalFormContainer">
      <form onSubmit={handleSubmit}>
        <div className="ModalInputContainer">
          <p>Nombre</p>
          <input
            type="text"
            name= "name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="ModalInputContainer">
          <p>Precio</p>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="ModalInputContainer">
          <p>Precio de lista</p>
          <input
            type="text"
            name="list_price"
            value={product.list_price}
            onChange={handleChange}
          />
        </div>
        <div className="ModalInputContainer">
          <p>Marca</p>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
          />
        </div>
        <div className="ModalInputContainer">
          <p># de Categoría</p>
          <input
            type="text"
            name="category_id"
            value={product.category_id}
            onChange={handleChange}
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

export default AddProductForm;
