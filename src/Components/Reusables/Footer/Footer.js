import React from 'react'
import './Footer.css'
import {RiTwitterFill} from "react-icons/ri"
import {VscGithubInverted} from "react-icons/vsc"
import {SiHackerrank} from "react-icons/si"

const Footer = () => {
    return (
        <div className="footer">
            <p>Designed and developed by Ryan Warner originally,<br/> re-implemented by Sarah Akinkunmi. <br/> Buit with React. Hosted on Netlify. Typeset in Jost.</p>
            <p><RiTwitterFill color="white"/>    <VscGithubInverted/>    <SiHackerrank color="white"/></p>
        </div>
    )
}

export default Footer
