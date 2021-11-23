
import './Input.css';
import React from 'react'

const Input = ({text,result}) => {
    return (
        <div className='inputCloth'>
            <div className='result'>
                <h1 maxlength = "9"> {result}</h1>
            </div>

            <div className='text'>
                 <h1 maxlength = "9">{text} </h1>
            </div>
            
        </div>
    )
}

export default Input
