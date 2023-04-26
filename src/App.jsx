import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home"; // eslint-disable-next-line
import Watch from "./pages/watch/Watch"; // eslint-disable-next-line
import Register from "./pages/register/Register";
import Login from "./pages/login/Login"; // eslint-disable-next-line
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    
      <Router>
       
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/watch">
            <Watch/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
