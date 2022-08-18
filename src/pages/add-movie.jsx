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

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ disabled: true });

    const { title, genre } = this.state.movie;
    setTimeout(() => {
      toast.success(`Added Movie, Genre: ${genre} Name: ${title}`);
      this.setState({ disabled: false });
    }, 2000);
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    const { movie } = this.state;
    this.setState({ movie: { ...movie, [name]: value } });
  };

  render() {
    const { disabled, movie } = this.state;
    return (
      <>
        <h1>Add Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="title"
            label="Movie Name"
            placeholder="Enter new  Movie Name"
            value={movie.title}
            onChange={this.handleChange}
          />
          <Input
            name="id"
            label="Movie ID"
            placeholder="Enter Movie ID"
            value={movie.id}
            onChange={this.handleChange}
          />
          <Input
            name="rate"
            label="Movie Rate"
            placeholder="Enter Movie Rate"
            value={movie.rate}
            onChange={this.handleChange}
          />
          <Input
            name="stock"
            label="Movie Stock"
            placeholder="Enter Movie Stock"
            value={movie.stock}
            onChange={this.handleChange}
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
