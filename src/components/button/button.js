import React from 'react';
import './styles.css'

function Button({ name, active, onClick }) {

    //const { name, active } = props

    return (
        <>
            <div className='containerButton'>
                <button onClick={() => onClick(0)} className={active ? 'button' : 'disabledButton'}>{name}</button>
                <span>Seus dados estão protegidos.</span>
            </div>
        </>
    )
}

export default Button;