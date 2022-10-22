import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// pages
import Card from "./loginPage";
import ProfilePage from "./ProfilePage";
import LandingPage from "./landingPage";
import ShoppingPage from "./ShoppingPage";
import Home from "./Home";
import CompleteProfile from "./CompleteProfile";
function App() {
  return (
    <div className="App">
      {/* <Card />
      <ProfilePage /> */}
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <LandingPage />
              {/* <Card /> */}
            </Route>
            <Route exact path="/login">
              <ShoppingPage />
            </Route>
            <Route exact path="/update-profile">
              <ProfilePage />
            </Route>
            <Route exact path="/Register">
              <Home />
            </Route>
            <Route exact path="/completeprofile">
              <CompleteProfile />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
