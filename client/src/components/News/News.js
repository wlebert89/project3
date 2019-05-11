import React from "react";
import "./News.css";

function News(props) {
    return (
        <div>
            <h6><a href={props.link}>{props.title}</a></h6>
            <p>{props.description}</p>
            <br/>
        </div>
    );
}

export default News;