import React from 'react';
import { Link } from "react-router-dom"
import "./ResultDisplay.css";

function ResultsDisplay(props) {
    return (
        <div className="result">
            <div className="picture-display">
                <img className="picture" src={props.image} alt="" />
            </div>
            <div className="result-info">
                <div className="name">{props.name}</div>
                <div className="description"> {props.party} | {props.role}</div>
                <div className="contact-info"><i className="fas fa-phone contact-icon"></i>{props.phone}</div>
                <div className="contact-info"><i className="fas fa-desktop contact-icon"></i>{props.email}</div>
            </div>
            <hr />
            <Link to={{ pathname: '/profile', state: { name: props.name } }}>
                <button className="btn btn-primary btn-lg btn-main">View Profile</button>
            </Link>

        </div>
    )
}

export default ResultsDisplay;