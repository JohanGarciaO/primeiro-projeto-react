import React from 'react';
import './styles.css';

function Form() {
    return (
        <>
            <div className='form-container'>
                <div className='form-content'>
                    <form>
                        <h2>Formulário para contato</h2>

                        <div className='inputs'>
                            <div className="input">
                                <input id="name" type="text" name="name" placeholder="Seu nome" required />
                            </div>
                            <div className="input">
                                <input id="email" type="email" name="email" placeholder="Seu e-mail" required />
                            </div>
                            <div className="input">
                                <select id="assunto" name="assunto">
                                    <option>Não consigo comprar o ingresso</option>
                                    <option>Não sei onde assistir</option>
                                    <option>Estou tendo problemas com a página</option>
                                    <option>Estou adorando a página</option>
                                    <option selected>Quero dar um feedback</option>
                                    <option>Outro assunto</option>
                                </select>
                            </div>
                            <div className="input">
                                <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" required></textarea>
                            </div>
                        </div>

                        <button className='button' type='submit'>Enviar mensagem</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form;