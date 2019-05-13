import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import "./landing.css";

function LandingPage() {
    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #427a9e; }'}</style>
            </Helmet>
            <div id="landing-main">
                <div id="title">Freedom of Information App</div>
                <div className="landing-quote">
                    “Such is the irresistible nature of truth, that all it asks, and all it wants, is the liberty of appearing.”
                    <br />
                    <br />
                    -Thomas Paine
                </div>
                <div className="landing-description">
                    In order to further a more open and transparent democracy, the Freedom of Information App provides citizens with relevant information pertaining to their federal representatives.
                    Enter your full address to gain a deeper insight into who represents you.
                </div>
                <div className="circle-bkg">
                    <i className="address card icon"></i>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;