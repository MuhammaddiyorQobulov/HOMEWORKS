import { Component } from "react";
import { toast } from "react-toastify";
import Input from "../components/common/input";
import Select from "../components/common/select";

class AddMovie extends Component {
  editMovieArr = this.props.location.state;
  state = {
    disabled: false,
    movie: {
      genreId: this.editMovieArr ? this.editMovieArr.movie.genre._id : "",
      title: this.editMovieArr ? this.editMovieArr.movie.title : "",
      dailyRentalRate: this.editMovieArr
        ? this.editMovieArr.movie.dailyRentalRate
        : "",
      numberInStock: this.editMovieArr
        ? this.editMovieArr.movie.numberInStock
        : "",
    },
    errors: {},
  };

  validate = () => {
    const { title, dailyRentalRate, numberInStock } = this.state.movie;
    const errors = {};

    if (title.trim() === "") errors.title = "Title is required!";
    // if (dailyRentalRate.trim() === "")
    //   errors.dailyRentalRate = "dailyRentalRate is required!";
    // if (numberInStock.trim() === "")
    //   errors.numberInStock = "numberInStock is required!";

    return Object.values(errors).length ? errors : false;
  };

  handleSubmit = (e) => {
    const { onEditMovie, onPostMovie, location, push } = this.props;
    e.preventDefault();
    this.setState({ disabled: true });

    const errors = this.validate();
    if (errors) {
      this.setState({ errors, disabled: false });
      return toast.error("Exist errors");
    }

    setTimeout(() => {
      const movie = { ...this.state.movie };
      location.state ? onEditMovie(movie) : onPostMovie(movie);
      push("/movies", movie);
    }, 2000);
  };

  validateField = (value, name) => {
    const errors = { ...this.state.errors };
    if (value.trim() === "") errors[name] = name.toCapital() + " is required!";
    else delete errors[name];
    return errors;
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    const { movie } = this.state;
    const errors = this.validateField(value, name);
    const genre = this.props.genres.find((genre) => genre._id === value);
    if (name === "genreId") {
      this.setState({ movie: { ...movie, ["genreId"]: genre._id } });
    } else {
      this.setState({ movie: { ...movie, [name]: value }, errors });
    }
  };

  render() {
    const { disabled, movie, errors } = this.state;
    return (
      <>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Select
            name="genreId"
            label="Genre Name"
            placeholder="Select Genre"
            value={movie.genreId}
            onChange={this.handleChange}
            error={errors.genreId}
            options={this.props.genres}
          />
          <Input
            name="title"
            label="Movie Name"
            placeholder="Enter new  Movie Name"
            value={movie.title}
            onChange={this.handleChange}
            error={errors.title}
          />
          <Input
            name="dailyRentalRate"
            label="Movie Rate"
            placeholder="Enter Movie Rate"
            value={movie.dailyRentalRate}
            onChange={this.handleChange}
            error={errors.dailyRentalRate}
          />
          <Input
            name="numberInStock"
            label="Movie Stock"
            placeholder="Enter Movie Stock"
            value={movie.numberInStock}
            onChange={this.handleChange}
            error={errors.numberInStock}
          />
          <button className="btn btn-primary" disabled={disabled}>
            Save
          </button>
        </form>
      </>
    );
  }
}

export default AddMovie;
