import React from 'react';
import "./profile.css";
import NavBar from "../../components/Nav/Nav";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import Pie from "../../components/PieChart/pie";
import API from "../../API";

class Profile extends React.Component {
    state = {
        newsResults: [],
        contributionResults: [],
        billsResults: [],
        financeData: []
    };

    componentDidMount() {
        console.log(this.props.location.state.name);
        const name = this.props.location.state.name;
        const lastName = name.substr(name.indexOf(" ") + 1);
        console.log(lastName);
        API.proPublica("/campaign-finance/v1/2016/candidates/search.json?query=" + lastName)
            .then(res => {
                if (res.data.results[0].candidate.id) {
                    var memberId = res.data.results[0].candidate.id
                    console.log("Member ID: " + memberId);
                    API.proPublica("/campaign-finance/v1/2016/candidates/" + memberId + ".json")
                        .then(res2 => {
                            const contributionArr = []
                            const individual = res2.data.results[0].total_from_individuals
                            const pac = res2.data.results[0].total_from_pacs
                            contributionArr.push(individual, pac);
                            console.log("Contributions: " + contributionArr);
                            API.proPublica("/congress/v1/bills/search.json?query=" + lastName)
                                .then(res3 => {
                                    console.log("Bills: " +res3.data.results[0].bills);
                                });
                        });
                }
            });
    }

    render() {
        return (
            <div>
                <Helmet>
                    <style>{'body { background-color: #f0f0f0;}'}</style>
                </Helmet>
                <NavBar />
                <div className="container profile-container">
                    <div className="row profile-header">
                        <div className="col-md-4 text-center">
                            <img src="http://static1.squarespace.com/static/501b147ae4b07cab1f91ea20/57f47decbe65944d4a761b9b/57f45eb3e3df28be9827fa7f/1475632979683/?format=1500w" alt="Politician Name" />
                        </div>

                        <div className="col-md-8 header-info">
                            <h2>Dwayne Herbert Mountain Dew Camacho</h2>
                            <h3>President | Green Party</h3>
                            <p>P: 919-867-5309 | F: 919-867-5309 | <a href="mailto:dcamacho@us.gov">dcamacho@us.gov</a></p>
                            <p>@elPresidente | Facebook Page</p>
                            <button className="btn btn-primary btn-lg btn-main" data-toggle="modal" data-target="#letter-modal">Send a Letter</button>
                        </div>
                    </div>

                    <div className="row content-row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12 chart-section">
                                    <div className="inner">
                                        <Pie
                                            financeData={this.state.financeData}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 bills">
                                    <div className="inner bills">
                                        <h2>Bills</h2>
                                        <h5>E.L.E.C.T.R.O.L.Y.T.E.S. Act</h5>
                                        <h6>Introduced 4/20/2019 | <a href="https://chrisglass.com/journal/downloads/TPSreport.pdf" target="_blank">PDF Link</a></h6>
                                        <p>Electrolytes are what plants crave, so like, uh, let's
                                            give them some right? Then we'll have as much as we
                                            can eat and they'll be super hydrating!</p>
                                        <br></br>
                                        <h5>Bill Name</h5>
                                        <h6>Introduced 4/20/2019 | <a href="https://chrisglass.com/journal/downloads/TPSreport.pdf" target="_blank">PDF Link</a></h6>
                                        <p>Short summary here about the bill and how it manages to
                                            do something or enact some law or something, you know.</p>
                                        <br></br>
                                        <h5>Bill Name</h5>
                                        <h6>Introduced 4/20/2019 | <a href="https://chrisglass.com/journal/downloads/TPSreport.pdf" target="_blank">PDF Link</a></h6>
                                        <p>Short summary here about the bill and how it manages to
                                            do something or enact some law or something, you know.</p>
                                        <br></br>
                                        <h5>Bill Name</h5>
                                        <h6>Introduced 4/20/2019 | <a href="https://chrisglass.com/journal/downloads/TPSreport.pdf" target="_blank">PDF Link</a></h6>
                                        <p>Short summary here about the bill and how it manages to
                                            do something or enact some law or something, you know.</p>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 news">
                            <div className="inner">
                                <h2>News</h2>
                                <h6>Article Title/Link</h6>
                                <p>A short summary about the article. Maybe he
                                    took a bribe, maybe he punched a reporter.</p>
                                <br></br>
                                <h6>Article Title/Link</h6>
                                <p>A short summary about the article. Maybe he
                                    took a bribe, maybe he punched a reporter.</p>
                                <br></br>
                                <h6>Article Title/Link</h6>
                                <p>A short summary about the article. Maybe he
                                    took a bribe, maybe he punched a reporter.</p>
                                <br></br>
                                <h6>Article Title/Link</h6>
                                <p>A short summary about the article. Maybe he
                                    took a bribe, maybe he punched a reporter.</p>
                                <br></br>
                                <h6>Article Title/Link</h6>
                                <p>A short summary about the article. Maybe he
                                    took a bribe, maybe he punched a reporter.</p>
                                <br></br>
                                <h6>Article Title/Link</h6>
                                <p>A short summary about the article. Maybe he
                                    took a bribe, maybe he punched a reporter.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}


export default Profile;