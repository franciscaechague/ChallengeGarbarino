import React from 'react';
import PropTypes from 'prop-types';
import './ErrorMensaje.css';

const MensajeError = ({ retry }) => (
  <div className="MensajeErrorContainer">
      <img src="/img/warning.svg" alt="Warning"/>
    <p>Ha ocurrido un error, intente nuevamente más tarde</p>
    {retry ? <button onClick={retry}>Reintentar</button> : ''}
  </div>
);

MensajeError.propTypes = {
  retry: PropTypes.func
};

export default MensajeError;
