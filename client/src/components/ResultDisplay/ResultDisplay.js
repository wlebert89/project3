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
                <div className="contact-info"><a href={props.website} target="_blank" rel="noopener noreferrer"><i className="fas fa-desktop contact-icon"></i>{props.website}</a></div>
                <a className="contact-info" href={"https://facebook.com/" + props.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square social-icon"></i></a>
                <a className="contact-info" href={"https://twitter.com/" + props.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square social-icon"></i></a>
            </div>
            <hr />
            <Link to={{
                pathname: '/profile', state: {
                    name: props.name,
                    image: props.image,
                    party: props.party,
                    role: props.role,
                    phone: props.phone,
                    website: props.website,
                    facebook: props.facebook,
                    twitter: props.twitter
                }
            }}>
                <button className="btn btn-primary btn-lg btn-main">View Profile</button>
            </Link>

        </div>
    )
}

export default ResultsDisplay;