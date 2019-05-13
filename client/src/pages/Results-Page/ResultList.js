import React from 'react';
import { Helmet } from "react-helmet";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsDisplay from "../../components/ResultDisplay/ResultDisplay";
import Nav from "../../components/Nav/Nav"
import API from "../../API";
import Footer from "../../components/Footer/Footer";
import "./ResultsList.css";


class ResultList extends React.Component {
    state = {
        googleCivic: []
    }

    onSearchSubmit = address => {
        const query = address.split(" ").join('%20');
        const resArray = [];
        API.googleCivic("civicinfo/v2/representatives?key=AIzaSyDItSTpKpynNXJ7a7PBiM_U66zgssbKXzU&address=" + query)
            .then(response => {
                const offices = response.data.offices;
                const officials = response.data.officials;
                const all = [];

                offices.forEach(office => {
                    const reps = [];

                    office.officialIndices.forEach(i => {
                        const rep = {};
                        rep.name = officials[i].name;
                        rep.phone = officials[i].phones;
                        rep.party = officials[i].party;
                        rep.photoUrl = officials[i].photoUrl;
                        rep.urls = officials[i].urls;
                        rep.channels = officials[i].channels;
                        reps.push(rep);
                    });
                    reps.forEach(r => {
                        r.office = office.name;
                        all.push(r);
                    });
                });

                for (var i = 2; i < 5; i++) {
                    resArray.push(all[i]);
                }
                console.log(resArray);
                this.setState({
                    googleCivic: resArray
                });
                console.log(this.state.googleCivic);
            }).catch(err => {
                console.log(err);
            });
    }

    renderAbout() {
        return (
            <div>
                <h1 id="title">App Name Here</h1>
                <div id="about">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias explicabo voluptates exercitationem mollitia saepe, maxime incidunt non unde laboriosam ullam.
                    Voluptatum soluta eum, reprehenderit rerum consequuntur hic quia eius iure.
                </div>
            </div>
        );
    }

    renderResults() {
        return (
            <div className="results-container">
                {this.state.googleCivic.map(rep => {
                    return (
                        <ResultsDisplay
                            key={rep.name}
                            image={rep.photoUrl || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
                            name={rep.name || "Name not available"}
                            party={rep.party || "Party affiliation not available"}
                            role={rep.office || "Official role not available"}
                            phone={rep.phone[0] || "Phone number not available"}
                            website={rep.urls[0] || "Website not available"}
                            facebook={rep.channels[0].id}
                            twitter={rep.channels[1].id}
                        />
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <div>
                <Helmet>
                    <style>{'body { background-color: #f0f0f0;}'}</style>
                </Helmet>
                <Nav />
                <SearchBar
                    onSubmit={this.onSearchSubmit}
                    placeholder="Enter a full address..."
                />
                <div className="container">
                    {this.state.googleCivic.length === 0 ? this.renderAbout() : this.renderResults()}
                </div>
                <Footer />
            </div>
        )
    }
}

export default ResultList;