import './Button.css';

import React from 'react'

const Button = ({symbol, color,handleChange}) => {
    return (
        <button 
            className='press' 
            style={{backgroundColor:color}} 
            onClick={()=> handleChange(symbol)}>
            {symbol}
        </button>
    )
}

export default Button
