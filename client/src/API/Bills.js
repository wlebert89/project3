
import React, { Component } from "react"; //changed \

//it was originally set to ""import React from 'react';""

///////////////////////////////////////////////// This was all added to make it more like the doc that react generates with every
//new app, as thats how its set in the tutorial Im watching
class Bills extends Component {
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

    fetch("https://api.propublica.org/congress/v1/members/W000802/bills/introduced.json", {
        headers: {
          //confirmed this url and key in Postman
          "X-API-Key": "S7rXcvNNyKCQjMyHjzug6HChVXuoEYRtYGEBsEaF"
          // "Content-Type": "application/x-www-form-urlencoded",
        } //
      })
        .then(entireResponse => entireResponse.json())
        .then(data => {
            this.setState({
                items: data
              }); 
              console.log(this.state.items);
        });
  }

  render() { 
    //returns the element we are creating, below is where we say
    //"use/show" it in this specific way

    return(//this could be a div, it just needs to display our results- one child of the return
        <React.Fragment>
            <div className="bill-container">
                      }
            </div>
        </React.Fragment>
    )
  }
}

export default Bills;
