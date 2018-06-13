import React from 'react';
import './Header.css';

class Header extends React.Component {

  render() {
    return (
      <div className="HeaderContainer">
        <img className="HeaderLogo" src="/img/garbaLogo.svg" alt="logo"/>
        <div className="HeaderSearchBar">
          <input type="text" placeholder="¿Qué estás buscando?"/>
          <img src="/img/magnifying-glass.svg" alt="search"/>
        </div>
      </div>
    );
  }
}

export default Header;

