import { faker } from "@faker-js/faker";
import { Component } from "react";
import { toast } from "react-toastify";
import Input from "../components/common/input";
import Select from "../components/common/select";
import { fakeGetGenres } from "../services";
import { fakeGetGenre } from "../services/fake-get-genres";

const genres = fakeGetGenres();
class AddMovie extends Component {
  state = {
    disabled: false,
    movie: {
      genre: "",
      title: "",
      dailyRentalRate: "",
      numberInStock: "",
      _id: this.props.location.state
        ? this.props.location.state.movie._id
        : faker.database.mongodbObjectId(),
    },
    errors: {},
  };

  validate = () => {
    const { title, dailyRentalRate, numberInStock } = this.state.movie;
    const errors = {};

    if (title.trim() === "") errors.title = "Title is required!";
    if (dailyRentalRate.trim() === "")
      errors.dailyRentalRate = "dailyRentalRate is required!";
    if (numberInStock.trim() === "")
      errors.numberInStock = "numberInStock is required!";

    return Object.values(errors).length ? errors : false;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const editMovie = this.props.location.state;
    this.setState({ disabled: true });

    const errors = this.validate();
    if (errors) {
      this.setState({ errors, disabled: false });
      return toast.error("Exist errors");
    }

    const { title, genre } = this.state.movie;

    editMovie && console.log(editMovie);
    setTimeout(() => {
      const movie = { ...this.state.movie };
      movie.genre = editMovie
        ? editMovie.movie.genre
        : fakeGetGenre(movie.genre);
      this.props.onAddMovie(movie);
      toast.success(`Added Movie, Genre: ${genre} Name: ${title}`);
      this.props.push("/movies");
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
    this.setState({ movie: { ...movie, [name]: value }, errors });
  };

  render() {
    const { disabled, movie, errors } = this.state;
    return (
      <>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Select
            name="genre"
            label="Genre Name"
            placeholder="Select Genre"
            value={movie.genre}
            onChange={this.handleChange}
            error={errors.genre}
            options={genres}
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
