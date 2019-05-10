import React from 'react';
import "./profile.css";
import NavBar from "../../components/Nav/Nav";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import Pie from "../../components/PieChart/pie";
// import Finance from "../../API/Finance";

class Profile extends React.Component {
    state = {
        newsResults: [],
        contributionResults: [],
        billsResults: [],
        financeData: [2, 1]
    };
  

    hideModal(){
        console.log("Saving...");
        // $.ajax({
        //     method: "POST",
        //     url: 
        // })
    };

    constructor(props) {
        //Constructor is making attributing state to the component while props is used to "send data to components"
        super(props); //this binds "this" to the parent constructor, ie ProPublica
        this.state = {
          //defining that object state of our component
          items: []
        };
      }

    componentDidMount() {
        //runs after the render method then updates the render method
    
        fetch("https://api.propublica.org/campaign-finance/v1/2016/candidates/search.json?query=Warren", {
            headers: {
              //confirmed this url and key in Postman
              "X-API-Key": "P7tVdzc7MzKiD6JU1DDfadW9kSCbxJU8Tj03yK8w"
              // "Content-Type": "application/x-www-form-urlencoded",
            } //
          })
            .then(entireResponse => entireResponse.json())
            .then(data => {
                this.setState({
                    items: data
                  }); 
                  if(this.state.items.results[0].candidate.id){
                      var thisId = this.state.items.results[0].candidate.id
                  } else {console.log("Id unavailble")}
                  
            
    
            
            fetch("https://api.propublica.org/campaign-finance/v1/2016/candidates/" + thisId + ".json", {
                headers: {
                  //confirmed this url and key in Postman
                  "X-API-Key": "P7tVdzc7MzKiD6JU1DDfadW9kSCbxJU8Tj03yK8w"
                  // "Content-Type": "application/x-www-form-urlencoded",
                } //
              })
                .then(entireResponse => entireResponse.json())
                .then(data => {
                    this.setState({
                        items: data
                      }); 
                      console.log(this.state.items);
                });} 
            )};
    
    render(){
        return (
            <div>
                <Helmet>
                    <style>{'body { background-color: #f0f0f0;}'}</style>
                </Helmet>
                <NavBar />
                <SearchBar 
                    placeholder="Search by Representative Name"
                />
                <div className="container profile-container">
                    <div className="row profile-header">
                        <div className="col-md-4 text-center">
                            <img src="http://static1.squarespace.com/static/501b147ae4b07cab1f91ea20/57f47decbe65944d4a761b9b/57f45eb3e3df28be9827fa7f/1475632979683/?format=1500w" alt="Politician Name"/>
                        </div>

                        <div className="col-md-8 header-info">
                            {this.state.items.map(each => {
                                return(
                                    <div>
                                        <p>{each.id}</p>
                                    </div>
                                )
                            })}
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

                    <div className="modal fade" id="letter-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Letter Templates</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <h6 id="template-header">Copy one of our templates:</h6>
                                    <div id="letter-templates"></div>
                                    <form id="letters">
                                        <div className="form-group">
                                            <label for="letter-form">Or submit your own template here:</label>
                                            <textarea className="form-control" id="letter-form" rows="10"></textarea>
                                        </div>
                                    </form>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.hideModal}>Save Template</button>
                                </div>
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