import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Login, Movies, Register } from "./pages";
import { Loader, NavBar } from "./components";
import AddMovie from "./pages/add-movie";
import axios from "axios";
import { toast } from "react-toastify";

const moviesEndPoint = "http://localhost:8000/api/movies";
const genresEndPoint = "http://localhost:8000/api/genres";

class App extends Component {
  state = {
    movies: [],
    genres: [],
    submitting: false,
    loading: true,
  };

  handlePostMovie = async (movie) => {
    const movies = [...this.state.movies];
    this.setState({ submitting: true });

    const newMovie = (await axios.post(moviesEndPoint, movie)).data;
    toast.success(`success added Movie = ${newMovie.title}`);
    this.setState({
      movies: [newMovie, ...movies],
      submitting: false,
    });
  };

  handleDeleteMovie = async (movieID) => {
    const movies = [...this.state.movies];
    const newMovies = movies.filter(({ _id }) => _id !== movieID);
    this.setState({ movies: newMovies });

    try {
      await axios.delete(`${moviesEndPoint}/${movieID}`);
      toast.success(`success delete Movie = ${movieID}`);
      this.setState({ submitting: false });
    } catch (err) {
      toast.warning(`not found todo ${movieID}`);
      this.setState({ movies, submitting: false });
    }
  };

  handleEditMovie = async (movie) => {
    this.setState({ submitting: true });

    let isExistIdx = this.state.movies.findIndex((m) => m._id === movie._id);
    this.state.movies[isExistIdx] = movie;

    const movies = [...this.state.movies];

    await axios
      .put(moviesEndPoint + `/${movie._id}`, movie)
      .catch(() => this.setState({ submitting: false }));
    toast.success(`success update Movie = ${movie._id}`);
    this.setState({ movies, submitting: false });
  };

  async componentDidMount() {
    const movies = [...(await axios.get(moviesEndPoint)).data];
    const genres = (await axios.get(genresEndPoint)).data;
    this.setState({ movies, genres, loading: false });
  }

  render() {
    const { movies, genres, submitting, loading } = this.state;
    if (loading) return <Loader />;
    return (
      <>
        <NavBar />
        {submitting && <Loader full />}
        <div className="container pt-4 wrapper">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/add-movie"
              component={(props) => (
                <AddMovie
                  push={props.history.push}
                  onPostMovie={this.handlePostMovie}
                  genres={this.state.genres}
                  onEditMovie={this.handleEditMovie}
                  {...props}
                />
              )}
            />
            <Route
              path="/"
              component={(props) => (
                <Movies
                  {...props}
                  movies={[...movies]}
                  genres={[...genres]}
                  onDeleteMovie={this.handleDeleteMovie}
                />
              )}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
