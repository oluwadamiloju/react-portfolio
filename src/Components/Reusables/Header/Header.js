import React from 'react'
import { BsFillHeartFill } from "react-icons/bs"
import './Header.css'
import Button from '../Button/Button'

const Header = () => {
    return (
        <header>
            <div className="first-navbar heart-icon">
                <BsFillHeartFill/>  <span className="author-name">Sarah Akinkunmi</span> 
            </div>
            <div className="second-navbar">
                <a href="./Articles/ArticlePage">Articles</a>
                <a href="Snippets/Page/Page">Snippets</a>
                <a href="About/Page/Page">About</a>
                <Button title="Contact"></Button>
            </div>
            
        </header>
    )
}

export default Header
