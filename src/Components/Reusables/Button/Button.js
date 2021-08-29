import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <div>
            <button style={props.style}>{props.logo}  {props.title}</button>
        </div>
    )
}

export default Button
