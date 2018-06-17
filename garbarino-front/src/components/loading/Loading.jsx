import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.css';

const Loading = () => (
    <div className="LoadingContainer">
        <ReactLoading type="spin" color="#cf0c1d" />
        <p>Cargando...</p>
    </div>
);

export default Loading;

