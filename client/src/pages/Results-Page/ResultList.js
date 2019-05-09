import React from 'react';
import { Helmet } from "react-helmet";
import zipcodes from "zipcodes";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsDisplay from "../../components/ResultDisplay/ResultDisplay";
import Nav from "../../components/Nav/Nav"
import API from "../../API";
import Footer from "../../components/Footer/Footer";
import "./ResultsList.css";


class ResultList extends React.Component {
    state = {
        openState: [],
        proPublica: []
    }

    onSearchSubmit = zipcode => {
        const data = zipcodes.lookup(zipcode);
        const state = data.state;
        const lat = data.latitude.toFixed(2);
        const lon = data.longitude.toFixed(2);

        const openStateQuery = "lat=" + lat + "&long=" + lon;

        API.getOpenStateData("api/v1/legislators/geo/?" + openStateQuery).then(OSresponse => {
            console.log("OSresponse:", OSresponse.data);
            this.setState({
                openState: OSresponse.data,
                // proPublica: PPresponse.data
            });
            // API.getProPublicaData("congress/v1/members/senate/" + state + "/current.json").then(PPresponse => {
            //     console.log("PPresponse:", PPresponse.data);
                
            // }).catch(err => console.log(err));
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
                    placeholder="Enter a zip code..."
                />
                <div className="container">
                    <div className="results-container">
                        {this.state.openState.map(rep => {
                            return (
                                <ResultsDisplay
                                    key={rep.id}
                                    image={rep.photo_url || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
                                    name={rep.full_name}
                                    party={rep.party || "Party affiliation not available"}
                                    id={rep.id || "Member ID not available"}
                                    phone={rep.offices[0].phone || "Phone number not available"}
                                    email={rep.email || "Email not available"}
                                    address={rep.offices[0].address.replace(/;/g, " ") || "Address not available"}
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