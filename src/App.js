import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// pages
import HomePage from "./Pages/HomePages/HomePage";
import ShoppingPages from "./Pages/ShoppingPages/ShoppingPage";
import RegisterPage from "./Pages/CoustomerRegister/RegisterPage";
import CompleteProfile from "./Pages/CoustomerRegister/CompleteProfile";
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
            </Route>
            <Route exact path="/shopping">
              <ShoppingPages />
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
