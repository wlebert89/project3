
import React, { Component } from "react"; //changed \
import API from "../API"
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
    let name = "Warren"
  API.proPublica("/campaign-finance/v1/2016/candidates/search.json?query="+name)
  .then(function(res){
    console.log(res);
    if(res.data.results[0].candidate.id){
      var thisId = res.data.results[0].candidate.id
      API.proPublica("/campaign-finance/v1/2016/candidates/" + thisId + ".json",)
  .then(function(res2){
    console.log(res2);})

  } else {console.log("Id unavailble")}
  
  })
  }
  

  render() { 
    return(//this could be a div, it just needs to display our results- one child of the return
        <React.Fragment>
            <div className="id-container">
            </div>

        </React.Fragment>
    )
  }
}

export default Finance;
