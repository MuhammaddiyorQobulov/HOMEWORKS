import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Login, Movies, Register } from "./pages";
import { NavBar } from "./components";
import AddMovie from "./pages/add-movie";

class App extends Component {
  state = {
    newMovies: JSON.parse(localStorage.getItem("newMovies")),
  };

  addMovie = (arr) => {
    const newMovies = this.state.newMovies;
    newMovies.push(arr);
    localStorage.setItem("newMovies", JSON.stringify(newMovies));
  };

  render() {
    if (!localStorage.hasOwnProperty("newMovies")) {
      localStorage.setItem("newMovies", JSON.stringify([]));
    }
    console.log(localStorage.hasOwnProperty("newMovies"));

    return (
      <>
        <NavBar />
        <div className="container pt-4 wrapper">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/add-movie"
              component={() => <AddMovie addMovie={this.addMovie} />}
            />
            <Route path="/" component={Movies} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
