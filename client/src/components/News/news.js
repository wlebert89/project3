import React from "react";
import "./News.css";

function News(props) {
    return (
        <div className="article">
            <h6 ><a className="news-title" href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a></h6>
            <p>{props.description}</p>
            <br/>
        </div>
    );
}

export default News;