
import React, { Component } from "react"; //changed \

//it was originally set to ""import React from 'react';""

///////////////////////////////////////////////// This was all added to make it more like the doc that react generates with every
//new app, as thats how its set in the tutorial Im watching
class Finance extends Component {
  //
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
  propublica.post("Warren")
  .then(function(res){
    
  })
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

  

  render() { 
    return(//this could be a div, it just needs to display our results- one child of the return
        <React.Fragment>
            <div className="id-container">
                    {this.state.items.map(each => {//this works becuase this.state.items returns an array
                        return(
                        <div>
                            <p>{each.id}</p>

                            
                           
                        </div>)
                    })}
            </div>
        </React.Fragment>
    )
  }
}

export default Finance;
