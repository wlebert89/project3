import React from 'react';
import "./letters.css";
import NavBar from "../../components/Nav/Nav";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import TopBar from "../../components/TopBar/TopBar";

class Letters extends React.Component {
    render(){
        return(
            <div>
                <Helmet>
                    <style>{'body { background-color: #f0f0f0;}'}</style>
                </Helmet>
                <NavBar />
                <TopBar />
                <div className="container">
                    <div className="row templates-row">
                        <div className="col-md-12">
                            <h3>Copy one of our templates:</h3>
                            <div id="letter-templates">
                                <p>The Honorable (full name)</p>
                                <p>U.S. House of Representatives</p>
                                <p>Washington, D.C. 20515</p>
                                <br></br>
                                <p>Dear Representative (last name):</p>
                                <br></br>
                                <p>The legislation addressing (describe issue concisely, or use exact 
                                    name of bill before legislature) is of paramount interest to me 
                                    because I am a (Certified Academic Language Therapist, parent, 
                                    teacher, etc.) This issue directly impacts (my students, my profession, 
                                    the way we as professionals will be able to function effectively, 
                                    my child, etc.)</p>

                                <p>I am primarily concerned about (describe major specific concern within 
                                    the larger issue) because (state reasons or examples briefly, with only 
                                    as many relevant details as necessary to make your point clearly.) Other 
                                    aspects of this same issue that affect (my student, profession, child) 
                                    are (describe briefly any secondary concerns and supporting situations, 
                                    reasons, examples, etc.)</p>

                                <p>Although I have read reports of your position in the newspapers, I realize 
                                    this may not fully represent your viewpoint. Therefore, I will look forward 
                                    to your reply expressing your opinions, and your current stance on the issue.</p>

                                <p>Thank you for your consideration of my viewpoint on this matter. I believe it is an 
                                    important issue, and would like to see the legislation (pass, fail, or be amended) 
                                    to ensure effective educational services for the students involved.</p>
                                <br></br>
                                <p>Sincerely,</p>

                                <p>Your name</p>
                                <p>Address</p>
                                <p>Phone Number</p>
                                <p>Email</p>    
                            </div>
                        </div>
                    </div> 
                </div>
                <Footer />
            </div>
        );
    }
}

export default Letters;