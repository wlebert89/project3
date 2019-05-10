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
                            <h2>Copy one of our templates:</h2>
                            <div id="letter-templates"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">  
                            <h2>Or Submit Your Own:</h2>  
                            <form id="letters">
                                <div class="form-group">
                                    <label className="letter" for="letter-title">Title</label>
                                    <input type="text" class="form-control" id="letter-title" />
                                </div>

                                <div className="form-group">
                                    <label className ="letter" for="letter-form">Letter Body</label>
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