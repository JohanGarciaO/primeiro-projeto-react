import React from 'react';
import './styles.css';
import Video from '../../assets/trailer.mp4';
import PosterTrailer from '../../assets/poster-trailer.jpg';

function Trailer() {
    return (
        <div id='trailer-container'>
            <div className='content'>
                <video controls className='trailer' poster={PosterTrailer}>
                    <source src={Video} />
                    Seu navegador não possui suporte para vídeos
                </video>
                <div id='sinopse'>
                    <p className='description'>
                        Dom Toretto e sua família devem lidar com o adversário mais letal que já enfrentaram.
                        Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado para destruir
                        o mundo de Dom e todos que ele ama.
                    </p>
                    <button className='button'>Comprar ingresso</button>
                </div>
            </div>
        </div>
    )
}

export default Trailer;