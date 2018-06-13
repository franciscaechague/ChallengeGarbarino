import React from 'react';
import './SearchBar.css';

const searchTags = [
  {
    name: 'Televisores',
    img: '/img/television.svg'
  }, {
    name: 'Celulares',
    img: '/img/smartphone.svg'
  }, {
    name: 'Electrodom.',
    img: '/img/fridge.svg'
  }, {
    name: 'Casa y Jardín',
    img: '/img/livingroom.svg'
  }, {
    name: 'Salud y Belleza',
    img: '/img/hairdryer.svg'
  }, {
    name: 'Bebés y Niños',
    img: '/img/puzzle.svg'
  }, {
    name: 'Deportes',
    img: '/img/soccer-ball.svg'
  }, {
    name: 'Más Categorías',
    img: '/img/plus.svg'
  }
];

class SearchBar extends React.Component {

  render() {
    return (
      <div className="SearchBarContainer">
        {searchTags.map(tag =>
          <div className="Categoria">
            <img src={tag.img} alt=""/>
            {/*<p>{tag.name}</p>*/}
          </div>
        )}
      </div>
    );
  }
}

export default SearchBar;
