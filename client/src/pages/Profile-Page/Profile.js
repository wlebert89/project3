import React from 'react';
import "./profile.css";
import NavBar from "../../components/Nav/Nav";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import Pie from "../../components/PieChart/pie";
import API from "../../API";
import Bills from "../../components/Bills/Bills";
import News from "../../components/News/news";
import TopBar from "../../components/TopBar/TopBar";

class Profile extends React.Component {
    state = {
        news: [],
        bills: [],
        financeData: []
    };

    getLastName = fullName => {
        const name = fullName.split(" ");
        return name[name.length - 1];
    }

    componentDidMount() {
        console.log(this.props.location.state.name);
        const name = this.props.location.state.name;
        const lastName = this.getLastName(name);
        console.log(lastName);
        const queryName = name.split(" ").join("+");
        API.proPublica("/campaign-finance/v1/2016/candidates/search.json?query=" + lastName)
            .then(res => {
                console.log(res);
                const relativeURI = res.data.results[0].candidate.relative_uri;
                API.proPublica("/campaign-finance/v1/2016" + relativeURI)
                    .then(res2 => {
                        const contributionArr = []
                        const individual = res2.data.results[0].total_from_individuals
                        const pac = res2.data.results[0].total_from_pacs
                        contributionArr.push(individual, pac);
                        console.log("Contributions: " + contributionArr);
                        API.proPublica("/congress/v1/bills/search.json?query=" + lastName)
                            .then(res3 => {
                                console.log(res3.data.results[0].bills);
                                API.news("/v2/everything?q=" + queryName)
                                    .then(res4 => {
                                        console.log("res4.data"+res4.data);
                                        this.setState({
                                            news: res4.data.articles,
                                            bills: res3.data.results[0].bills,
                                            financeData: contributionArr
                                        });
                                    });
                            });
                    });
            });
    }

    render() {
        return (
            <div>
                <Helmet>
                    <style>{'body { background-color: #f0f0f0;} h3 {text-align: left;}'}</style>
                </Helmet>
                <NavBar />
                <TopBar />
                <div className="container profile-container">
                    <div className="row profile-header">
                        <div className="col-md-4 text-center">
                            <img src={this.props.location.state.image} alt={this.props.location.state.name} />
                        </div>

                        <div className="col-md-8 header-info">
                            <h2>{this.props.location.state.name}</h2>
                            <h3>{this.props.location.state.role} | {this.props.location.state.party}</h3>
                            <p>{this.props.location.state.phone} | <a href={this.props.location.state.website}>{this.props.location.state.website}</a></p>
                            <div className="social-links">
                                <a href={"https://facebook.com/" + this.props.location.state.facebook}><i className="fab fa-facebook-square social-icon"></i></a>
                                <a href={"https://twitter.com/" + this.props.location.state.twitter}><i className="fab fa-twitter-square social-icon"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="row content-row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6 chart-section">
                                    <div className="inner">
                                        <Pie
                                            financeData={this.state.financeData}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6 rating-section">
                                    <div className="inner">
                                        <h2 className="section-title">User Rating</h2>
                                        <div className="text-center">
                                            <button type="button" class="btn btn-primary rating-button">Like</button>
                                            <button type="button" class="btn btn-primary rating-button">Fuck You</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 bills">
                                    <div className="inner bills">
                                        <h2 className="section-title">Sponsored/Co-Sponsored Bills</h2>
                                        {this.state.bills.map(bill => {
                                            return (
                                                <Bills
                                                    key={bill.bill_id}
                                                    title={bill.primary_subject}
                                                    date={bill.introduced_date}
                                                    link={bill.gpo_pdf_uri}
                                                    description={bill.title}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 news">
                            <div className="inner news">
                                <h2 className="section-title">News</h2>
                                {this.state.news.map(article => {
                                    return (
                                    <News
                                        key={article.title}
                                        title={article.title}
                                        link={article.url}
                                        description={article.description}
                                    />
                                    );
                                })}
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