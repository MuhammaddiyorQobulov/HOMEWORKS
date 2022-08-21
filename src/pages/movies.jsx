import { Component } from "react";
import { toast } from "react-toastify";
import _ from "lodash";
import { fakeGetGenres } from "../services";
import { paginate } from "../helpers/paginate";
import { MoviesTable, Genres, Loader, Total } from "../components";
import { Link } from "react-router-dom";
/**
 * @imports
 * ✅ packages
 * ✅ functions(utils|helpers)
 * ✅ components
 * ✅ assets -> images -> styles
 *
 */
class Movies extends Component {
  state = {
    loading: true,
    movies: [],
    genres: [],
    genreID: "all",
    currentPage: 1,
    pageSize: 3,
    columnSort: {
      path: "title",
      order: "asc",
    },
  };

  handleSelectGenre = (newGenreID) => {
    this.setState({ genreID: newGenreID, currentPage: 1 });
  };

  handlePageChange = (newPage) => {
    this.setState({ currentPage: newPage });
  };

  handleLike = (movieID) => {
    const movies = [...this.state.movies];
    const movie = movies.find((movie) => movie._id === movieID);

    movie.isLiked = !movie.isLiked;
    this.setState({ movies });
  };

  handleDeleteMovie = (movieID) => {
    const locMovies = JSON.parse(localStorage.getItem("newMovies"));

    const filterLocMovie = locMovies.filter((movie) => movie.id !== movieID);
    localStorage.setItem("newMovies", JSON.stringify(filterLocMovie));
    const movies = this.state.movies.filter((movie) => movie._id !== movieID);

    this.setState({ movies });
    toast.error(`Deleted Movie = ${movieID}`);
  };

  componentDidMount() {
    let movies = this.props.movies;
    const genres = fakeGetGenres();
    genres.unshift({ name: "All", _id: "all" });
    setTimeout(() => this.setState({ loading: false, movies, genres }), 1000);
  }

  handleEditmovie = (movieID) => {
    const { movies } = this.state;
    const movie = movies.find((movie) => movie._id === movieID);
  };

  render() {
    if (this.state.loading) return <Loader />;

    const { movies, genres, genreID, pageSize, currentPage, columnSort } =
      this.state;

    const filteredMovies = movies.filter(
      (movie) => genreID === "all" || movie.genre._id === genreID
    );

    const sortedMovies = _.orderBy(
      filteredMovies,
      columnSort.path,
      columnSort.order
    );

    const paginatedMovies = paginate(filteredMovies, pageSize, currentPage);

    const total = filteredMovies.length;

    return (
      <div className="row d-flex">
        <Genres
          genres={genres}
          genreID={genreID}
          onSelect={this.handleSelectGenre}
        />
        <div className="col">
          <Link to="/add-movie">
            <button className="btn btn-primary my-2 d-block">Add Movie</button>
          </Link>
          <Total total={total} />
          <MoviesTable
            currentPage={currentPage}
            pageSize={pageSize}
            total={total}
            movies={paginatedMovies}
            onDeleteMovie={this.handleDeleteMovie}
            onPageChange={this.handlePageChange}
            onLike={this.handleLike}
            onEdit={this.handleEditmovie}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
