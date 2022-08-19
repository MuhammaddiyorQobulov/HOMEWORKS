import { Component } from "react";
import { toast } from "react-toastify";
import Input from "../components/common/input";

String.prototype.toCapital = function () {
  const first = this[0];
  return first.toUpperCase() + this.substring(1);
};

class AddMovie extends Component {
  state = {
    disabled: false,
    movie: {
      genre: "Detective",
      title: "Break Out",
      id: "123123",
      rate: "2",
      stock: "150",
    },
    errors: {},
  };

  validate = () => {
    const { genre, title, id, rate, stock } = this.state.movie;
    const errors = {};

    if (genre.trim() === "") errors.genre = "Genre is required!";
    if (title.trim() === "") errors.title = "Email is required!";
    if (id.trim() === "") errors.id = "Email is required!";
    if (rate.trim() === "") errors.rate = "Email is required!";
    if (stock.trim() === "") errors.stock = "Email is required!";

    return Object.values(errors).length ? errors : false;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ disabled: true });
    this.props.addMovie(this.state.movie);
    const errors = this.validate();
    if (errors) {
      this.setState({ errors, disabled: false });
      return toast.error("Exist errors");
    }

    const { title, genre } = this.state.movie;
    setTimeout(() => {
      toast.success(`Added Movie, Genre: ${genre} Name: ${title}`);
      this.setState({ disabled: false });
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
        <h1>Add Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="genre"
            label="Genre Name"
            placeholder="Enter new Genre Name"
            value={movie.genre}
            onChange={this.handleChange}
            error={errors.genre}
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
            name="id"
            label="Movie ID"
            placeholder="Enter Movie ID"
            value={movie.id}
            onChange={this.handleChange}
            error={errors.id}
          />
          <Input
            name="rate"
            label="Movie Rate"
            placeholder="Enter Movie Rate"
            value={movie.rate}
            onChange={this.handleChange}
            error={errors.rate}
          />
          <Input
            name="stock"
            label="Movie Stock"
            placeholder="Enter Movie Stock"
            value={movie.stock}
            onChange={this.handleChange}
            error={errors.stock}
          />

          <button className="btn btn-primary" disabled={disabled}>
            Add Movie
          </button>
        </form>
      </>
    );
  }
}

export default AddMovie;
