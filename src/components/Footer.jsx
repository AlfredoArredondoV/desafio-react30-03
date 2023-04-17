import React from 'react'
import './Footer.css';

const Footer = (props) => {
    return (
        <div className='container'>
            <p className='fs-2'>{props.titulo}</p>
            
        </div>
    )
}

export default Footer