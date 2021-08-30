import React from 'react'
import Header from '../../Components/Reusables/Header/Header'
import Articles from '../../Components/Reusables/Articles/Articles'
import Projects from '../../Components/Reusables/Projects/Projects'
import Button from '../../Components/Reusables/Button/Button'
import Footer from '../../Components/Reusables/Footer/Footer'
import './HomePage.css'
import {HiOutlineChevronDoubleRight} from "react-icons/hi"
import {SiJavascript, SiReact, SiStorybook} from "react-icons/si"
import {MdChatBubbleOutline} from "react-icons/md"


const HomePage = () => {
    return (
        <div>
           <Header/>
           <br/>
           <h1>I'm Sarah, software engineer <br></br>and mechanical engineer.</h1>
           <p className="first-paragraph">I specialize in building web applications with HTML/CSS/Js <br/>and React, other backend applications with Java, Python <br/>and data analysis with R and Python. I talk about my journey <br/>on <a href="https://twitter.com" className="twitter-link">Twitter</a>, commit code to <a href="https://www.github.com/oluwadamiloju" className="github-link">Github</a>, and learn on <a href="https://www.hackerrank.com/" className="hackerrank-link">Hackerrank</a>.</p>
           <div className="article">
               <h2>Latest Articles</h2>
               <a className="article-link" href="Articles/Page/Page"><span>All articles</span> <HiOutlineChevronDoubleRight/></a>
           </div>
           <div className="each-article">
                <Articles logo = {<SiJavascript color="#F7DF1E"/>}  text="Reducing cognitive load by theming my tools" date="September 08, 2019" />
            </div>
            <div className="each-article">
                <Articles logo = {<SiReact color="#61DAFB"/>}  text="Code splitting & lazy loading a server side rendered React app" date="September 08, 2019" />
            </div>
            <div className="each-article">
                <Articles logo = {<SiStorybook color="#FF4785"/>}  text="Easy project switching with Itermocil & command line shortcuts" date="September 08, 2019" />
            </div>
            <h2 className="projects">Projects</h2>
            <Projects style={{ borderLeft: '8px solid #CCA9F4', width: '100%', height:'230px' }} header="Yawnch" paragraph="An online coworking community for indie hackers, entrepreneurs, and founders. Chat live with app developers, designers, and mentors. Access video courses and tutorials."/><br/>
            <div className="projects-below">
                <Projects className="first-project" style={{ borderLeft: '8px solid #81F59B', width: '40%', height:'230px' }} header="Stockstream.tv" paragraph="On a mission to democratize investing knowledge. My partner and I bootstrapped this company with zero funding."/>
                <Projects className="second-project" style={{ borderLeft: '8px solid #D9534D', width: '40%', height:'230px' }} header="All Turtles" paragraph="I lead web development full time at All Turtles, an AI startup studio."/>
            </div>
            <br/><br/>
            <section className="chat-section">
                <h1>What are you working on?</h1>
                <p>Let’s have a conversation! I’d love to hear about what you’re <br/> working on and find a way to work together.</p>
                <p><Button className="chat-button" style={{backgroundColor: '#83F9A2', color: '#111A20', border: 'none', fontWeight: '800'}} logo={<MdChatBubbleOutline color="#111A20"/>} title="Chat"/></p>
            </section>
            <Footer /> 
        </div>
    )
}

export default HomePage
