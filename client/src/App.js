import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile-Page/Profile";
import ResultList from "./pages/Results-Page/ResultList";
import NoMatch from "./pages/404-Page/NoMatch";
import Letters from "./pages/Letter-Page/letters"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ResultList} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/letters" component={Letters} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
