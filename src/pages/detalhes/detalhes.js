import React from 'react';
import { useParams } from 'react-router-dom';

function Detalhes() {

    const params = useParams();

    return (
        <div>
            Detalhes do {Object.keys(params)}: {Object.values(params)}
        </div>
    )
}

export default Detalhes;