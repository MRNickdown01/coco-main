import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// pages
import ProfilePage from "./ProfilePage";
import HomePage from "./Pages/HomePages/HomePage";
import ShoppingPage from "./ShoppingPage";
import RegisterPage from "./RegisterPage";
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
              <HomePage />
              {/* <Card /> */}
            </Route>
            <Route exact path="/login">
              <ShoppingPage />
            </Route>
            <Route exact path="/update-profile">
              <ProfilePage />
            </Route>
            <Route exact path="/Register">
              <RegisterPage />
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
