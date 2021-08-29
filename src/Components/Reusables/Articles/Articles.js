import React from 'react'
import './Articles.css'

const Articles = (props) => {
    return (
        <div>
            <p><span>{props.logo}</span>  {props.text}</p>
            <p className="article-date">{props.date}</p>
        </div>
    )
}

export default Articles
