import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Login, Movies, Register } from "./pages";
import { NavBar } from "./components";
import AddMovie from "./pages/add-movie";

class App extends Component {
  
  render() {
    return (
      <>
        <NavBar />
        <div className="container pt-4 wrapper">
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/add-movie" component={AddMovie} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
