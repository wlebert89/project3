import React from 'react';
import "./ResultDisplay.css";

function ResultsDisplay(props) {
    return (
        <div className="result">
            <div className="picture-display">
                <img className="picture" src={props.image} alt="" />
            </div>
            <div className="result-info">
                <div className="name">{props.name}</div>
                <div className="description"> {props.party} | {props.id}</div>
                <div className="contact-info"><i className="fas fa-phone contact-icon"></i>{props.phone}</div>
                <div className="contact-info"><i className="fas fa-envelope contact-icon"></i>{props.email}</div>
                <div className="contact-info"><i className="fas fa-mail-bulk contact-icon"></i>{props.address}</div>
            </div>
            <hr />
            <button className="btn btn-primary btn-lg btn-main">View Profile</button>
        </div>
    )
}

export default ResultsDisplay;