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
            for (var i = 2; i < 5; i++){
                resArray.push(response.data.officials[i]);
            }
            console.log(resArray);
            this.setState({
                googleCivic: resArray
            });

        }).catch(err => {
            console.log(err);
        });
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
                    <div className="results-container">
                        {this.state.googleCivic.map(rep => {
                            return (
                                <ResultsDisplay
                                    key={rep.name}
                                    image={rep.photoUrl || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
                                    name={rep.name}
                                    party={rep.party || "Party affiliation not available"} 
                                    // role={}
                                    phone={rep.phones[0] || "Phone number not available"}
                                    website={rep.urls[0] || "Website not available"}
                                    facebook={rep.channels[0].id}
                                    twitter={rep.channels[1].id}
                                />
                            );
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ResultList;