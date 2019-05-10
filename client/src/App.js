import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile-Page/Profile";
import ResultList from "./pages/Results-Page/ResultList";
import NoMatch from "./pages/404-Page/NoMatch";
<<<<<<< HEAD
import Finance from "./API/Finance"
=======
import Letters from "./pages/Letter-Page/letters"
>>>>>>> master

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ResultList} />
          <Route exact path="/profile" component={Profile} />
<<<<<<< HEAD
          <Route exact path="/finance" component={Finance} />
=======
          <Route exact path="/letters" component={Letters} />
>>>>>>> master
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
