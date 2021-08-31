import React from 'react'
import { BsFillHeartFill } from "react-icons/bs"
import './Header.css'
import Button from '../Button/Button'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="first-navbar heart-icon">
                <Link to="/"><BsFillHeartFill color="#82F9A1"/>  <span className="author-name">Sarah Akinkunmi</span></Link>
            </div>
            <div className="second-navbar">
                <Link to="/src/Articles/ArticlePage.js">Articles</Link>
                <span>Snippets</span>
                <Link to="/src/About/AboutPage.js">About</Link>
                <Button title="Contact"></Button>
            </div>
            
        </header>
    )
}

export default Header
