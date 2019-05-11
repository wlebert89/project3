import React from "react";
import "./Bills.css";

function Bills(props) {
    return (
        <div>
            <h5>{props.title}</h5>
            <h6>{props.date} | <a href={props.link} target="_blank" rel="noopener noreferrer">PDF Link</a></h6>
            <p>{props.description}</p>
            <br/>
        </div>
    );
}

export default Bills;