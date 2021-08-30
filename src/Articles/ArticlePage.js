import React from 'react'
import Header from '../Components/Reusables/Header/Header'
import AllArticles from '../Components/Reusables/AllArticles'
import Footer from '../Components/Reusables/Footer/Footer'
import './ArticlePage.css'

const ArticlePage = () => {
    return (
        <div>
            <Header/>
            <br/>
            <h1>Articles</h1><br/>
            <AllArticles title="Code splitting & lazy loading a server side" title2="rendered React app"/>
            <br/>
            <AllArticles title="Easy project switching with Itermocil & command" title2="line shortcuts"/>        
            <br/>
            <AllArticles title="Code splitting & lazy loading a server side" title2="rendered React app"/>
            <br/>
            <AllArticles title="Easy project switching with Itermocil & command" title2="line shortcuts"/>  
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}

export default ArticlePage
