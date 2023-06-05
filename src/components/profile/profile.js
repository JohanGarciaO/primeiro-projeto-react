import React, { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';

function Profile() {
    const { login, data } = useContext(UserContext);

    return (
        <div>
            {login ? `${data.name}, você está logado com sucesso.` : 'Faça o login para ter acesso as suas informações.'}
        </div>
    )
}

export default Profile;