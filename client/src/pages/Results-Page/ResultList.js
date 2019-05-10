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
        // openState: [],
        googleCivic: [],
        //
    }

    onSearchSubmit = address => {

        // GOOGLE CIVIC SEARCH

        const query = address.split(" ").join('%20');
        const resArray = [];
        API.googleCivic("civicinfo/v2/representatives?key=AIzaSyDItSTpKpynNXJ7a7PBiM_U66zgssbKXzU&address=" + query)
        .then(response => {
            console.log(response.data);
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

        //OPEN STATE && PROPUBLICA SEARCH

        // const data = zipcodes.lookup(address);
        // const state = data.state;
        // // const lat = data.latitude.toFixed(2);
        // // const lon = data.longitude.toFixed(2);
        // // const openStateQuery = "lat=" + lat + "&long=" + lon;
        // // API.openState("api/v1/legislators/geo/?" + openStateQuery).then(OSresponse => {
        // //     console.log("OSresponse:", OSresponse.data);
        // //     this.setState({
        // //         openState: OSresponse.data,
        // //     });
        // // });

        // API.proPublica("congress/v1/members/senate/" + state + "/current.json").then(PPresponse => {
        //     console.log("PPresponse:", PPresponse.data);
        //     // this.setStateP({
        //     //     proPublica: PPresponse
        //     // });
        // }).catch(err => console.log(err));
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
                        {/* {this.state.openState.map(rep => {
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
                        })} */}
                        {this.state.googleCivic.map(rep => {
                            return (
                                <ResultsDisplay
                                    // key={rep.id}
                                    image={rep.photoUrl || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
                                    name={rep.name}
                                    party={rep.party || "Party affiliation not available"} 
                                    // role={}
                                    phone={rep.phones[0] || "Phone number not available"}
                                    email={rep.urls[0]|| "Email not available"}
                                    // address={"rep.address" || "Address not available"}
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