import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            Eu sou a outra página.
            <Link to= "/"> Voltar para home </Link>
        </div>
    );
};
