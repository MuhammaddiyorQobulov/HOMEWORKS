import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Login, Movies, Register } from "./pages";
import { NavBar } from "./components";
import AddMovie from "./pages/add-movie";
import { fakeGetMovies } from "./services";

class App extends Component {
  state = {
    movies: fakeGetMovies(),
  };

  handleAddMovie = (movie) => {
    let editMovieIdx = this.state.movies.findIndex((m) => m._id === movie._id);
    console.log(editMovieIdx);
    this.state.movies[editMovieIdx] = movie;
    const movies = [...this.state.movies, editMovieIdx > 0 && movie];
    this.setState({ movies });
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="container pt-4 wrapper">
          <Switch>
            {/* <Route exact path="/" component={() => <h1>Zetflix</h1>} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/add-movie"
              component={(props) => (
                <AddMovie
                  {...props}
                  push={props.history.push}
                  onAddMovie={this.handleAddMovie}
                />
              )}
            />
            <Route
              path="/"
              component={(props) => (
                <Movies {...props} movies={this.state.movies} />
              )}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
