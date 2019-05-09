import React from "react";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "./landing.css";

function LandingPage() {
    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #1c3559; }'}</style>
            </Helmet>
            <Nav />
            <div id="landing-main">
                <div id="title">Project Overthrow.</div>
                <div className="landing-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Fugit ut tempora fugiat sit molestiae veniam alias doloremque magni error est aliquam necessitatibus recusandae culpa vel, cupiditate debitis iure. 
                    Hic, quod.
                </div>
                <div className="circle-bkg">
                    <i className="user icon"></i>
                </div>
                <div className="landing-description">
                    Search by name.
                </div>
                <div className="circle-bkg">
                    <i className="address card icon"></i>
                </div>
                <div className="landing-description">
                    Search by zip code.
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;