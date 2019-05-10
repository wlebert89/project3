import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile-Page/Profile";
import ResultList from "./pages/Results-Page/ResultList";
// import LandingPage from "./pages/Landing-Page/LandingPage";
import NoMatch from "./pages/404-Page/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Route exact path="/" component={ResultList} />
          <Route exact path="/profile" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
