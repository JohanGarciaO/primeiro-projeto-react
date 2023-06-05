import React from 'react';
import './styles.css';

function Comentario({ src, nome, desc, comentario }) {
    return (
        <div className='comment-card'>
            <div className='header-comment-card'>
                <div className='comment-profile'>
                    <img src={src} />
                </div>
                <div className='comment-details'>
                    <div className='profile-name'>{nome}</div>
                    <div className='profile-desc'>{desc}</div>
                    <div className='content-card'>
                        <p>{comentario}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Comentario;