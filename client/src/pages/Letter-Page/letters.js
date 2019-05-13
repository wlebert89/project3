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
                <div className="container letter-content">
                    <div className="row">
                        <div className="col-md-12 letter-title">
                            <h3>Copy one of our templates:</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">        
                            <div className="letter">
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
                                    to (goal you would like accomplished).</p>
                                <br></br>
                                <p>Sincerely,</p>

                                <p>Your name</p>
                                <p>Address</p>
                                <p>Phone Number</p>
                                <p>Email</p>    
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="letter">
                                <p>Month, Day, Year</p>
                                <p>The Honorable (first name, last name)</p>
                                <p>(Office Address)</p>
                                <br></br>
                                <p>RE: (state the topic or include the bill number, 
                                    author, and subject if you are writing to support 
                                    or oppose a particular legislative bill)</p>
                                <br></br>    
                                <p>Dear (Assembly Member/Senator)(Last name),</p>
                                <br></br>
                                <p>My name is (your name) and I am a (advocate/community 
                                    member/family member/other title) who resides in your district</p>
                                <p>(State why you support or oppose the bill/issue here. Choose up 
                                    to three of the strongest points that support your position and 
                                    state them clearly.)
                                </p>
                                <p>(Include a personal story here. Tell your representative why the issue 
                                    is important to you and how it affects you, your family, and your 
                                    community.)
                                </p>
                                <p>(Tell your representative how you want him/her to vote on this issue and 
                                    ask for a response. Be sure to include your name and address on both 
                                    your letter and envelope.)
                                </p>
                                <p>Sincerely,</p>
                                <p>SIGN YOUR NAME HERE</p>
                                <br></br>
                                <p>Print your name</p>
                                <p>Street address</p>
                                <p>City, State, Zip Code</p>
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