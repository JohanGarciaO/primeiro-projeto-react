import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/logo.jpg';

function Header() {
    const location = useLocation();

    return (
        <header>
            <Link style={{ textDecoration: 'none' }} to='/'>
                <img id='logo' src={Logo} />
            </Link>
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <li style={location.pathname == "/" ? { color: '#d21617' } : {}}>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                        <li style={location.pathname == "/contato" ? { color: '#d21617' } : {}}>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/fotos'>
                        <li style={location.pathname == "/fotos" ? { color: '#d21617' } : {}}>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/comentarios'>
                        <li style={location.pathname == "/comentarios" ? { color: '#d21617' } : {}}>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;