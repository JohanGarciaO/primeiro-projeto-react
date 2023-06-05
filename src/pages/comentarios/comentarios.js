import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Comentario from '../../components/comentario/comentario';
import './styles.css';
import Comment1 from '../../assets/comments/alan-ritchson.jpg';
import Comment2 from '../../assets/comments/rita-moreno.jpg';
import Comment3 from '../../assets/comments/vin-diesel.jpg';

function Comentarios() {
    return (
        <>
            <Header />
            <div className='comment-container'>
                <div className='comment-content'>
                    <h2>Comentários</h2>
                    <Comentario
                        src={Comment1}
                        nome='Alan Ritchson'
                        desc='Ator conhecido por papéis nas séries Titãs e Reacher,
                        também foi confirmado no elenco de Velozes e Furiosos 10'
                        comentario='"Realmente espero que isso não interfira no meu seguro do carro",
                        brincou Ritchson em publicação no Instagram.'
                    />
                    <Comentario
                        src={Comment2}
                        nome='Vin Diesel'
                        desc='Ator, roteirista e produtor de cinema norte-americano.  
                        Ele ganhou fama internacional com seu papel como Dominic Toretto na franquia The Fast and the 
                        Furious'
                        comentario='"Há muito tempo eu sonho em trabalhar com Rita Moreno e o fato dela estar aqui, 
                        interpretando minha avó, faz minha alma sorrir," disse o ator em um divertido vídeo no Instagram.'
                    />
                    <Comentario
                        src={Comment3}
                        nome='Rita Moreno'
                        desc='A atriz é uma personalidade icônica de Hollywood e ganhou o Oscar 
                        pelo filme Amor, Sublime Amor (1961)'
                        comentario='"Minha idade avançada estava esperando pelo seu convite [...] Não só irei participar, 
                        estou empolgada para isso!" disse a atriz em meio a sorrisos sem esconder a felicidade.'
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Comentarios;