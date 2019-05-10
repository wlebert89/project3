import React from 'react';
import "./letters.css";
import NavBar from "../../components/Nav/Nav";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";

class Letters extends React.Component {
    render(){
        return(
            <div>
                <Helmet>
                    <style>{'body { background-color: #f0f0f0;}'}</style>
                </Helmet>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h6>Copy one of our templates:</h6>
                            <div id="letter-templates"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">    
                            <form id="letters">
                                <div className="form-group">
                                    <label for="letter-form">Or submit your own template here:</label>
                                    <textarea className="form-control" id="letter-form" rows="10"></textarea>
                                </div>
                                <button type="button" className="btn btn-primary" id="save-template">Save Template</button>
                            </form>
                        </div>    
                    </div>  
                </div>
                <Footer />
            </div>
        );
    }
}

export default Letters;