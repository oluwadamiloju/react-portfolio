import React from 'react'
import './AllArticles.css'

const AllArticles = (props) => {
    return (
        <div className="all-articles">
            <p className="smaller-paragraph">September 08, 2019</p>
            <h2>{props.title}<br/>{props.title2}</h2>
            <p>Reasoning, approach, and goals Goals Faster initial load times. Users only <br/>download the code they need for the features they are using. This…</p>
            <p className="smaller-paragraph">Read more...</p>
        </div>
    )
}

export default AllArticles
