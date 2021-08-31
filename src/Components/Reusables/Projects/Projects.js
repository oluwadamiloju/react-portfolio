import React from 'react'
import Button from '../Button/Button'
import './Projects.css'

const Projects = (props) => {
    return (
        <div className={props.className} style={props.style}>
            <h2 className="project-names">{props.header}</h2>
            <p>{props.paragraph}</p>
            <br/>
            <p><Button title="Button" /></p>
        </div>
    )
}

export default Projects
