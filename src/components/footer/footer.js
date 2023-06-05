import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/logo.jpg';

function Footer() {

    const data = new Date();
    const ano = data.getFullYear();
    const location = useLocation();

    return (
        <footer>
            <Link style={{ textDecoration: 'none' }} to='/'>
                <img id='logo' src={Logo} />
            </Link>
            <span><span className='copy'>© </span>{ano} Copyright - Todos os direitos reservados</span>
            <span>Desenvolvido por <a className="cta-johan" href="https://github.com/JohanGarciaO"
                target="_blank">Johan Garcia</a></span>
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
        </footer>
    )
}

export default Footer;