import React from 'react';
import "./Nav.css";

function Nav() {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/"><h2 id="brand">Overthrow</h2></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav-collapse">
                    <ul className="navbar-nav ml-auto text-right float-right">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/profile">Profile Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/resultlist">Address Search</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;