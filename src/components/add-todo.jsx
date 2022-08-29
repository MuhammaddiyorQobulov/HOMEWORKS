import React, { Component } from "react";
import { createTodo, updateTodo } from "../services/todos";
class AddTodo extends Component {
  state = {
    todo: {
      title: "",
      description: "",
    },
    isEdit: false,
    id: "",
  };
  handleChange = (e) => {
    const { todo } = this.state;
    const { value, name } = e.target;
    this.setState({ todo: { ...todo, [name]: value } });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.isEdit) {
      await updateTodo(this.state.id, { ...this.state.todo });
    } else {
      await createTodo({ ...this.state.todo });
    }

    this.props.history.push("/");
  };

  componentDidMount() {
    let { isEdit } = this.state;
    isEdit = this.props.location.state;
    isEdit && console.log(isEdit.todo);
    isEdit && this.setState({ isEdit, todo: isEdit.todo, id: isEdit.todo._id });
  }

  render() {
    const { title, description } = this.state.todo;
    return (
      <>
        <h1>UUU</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group my-2">
            <label htmlFor="title">Title</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              id="title"
              name="title"
              value={title}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="description">Description</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              id="description"
              name="description"
              value={description}
            />
          </div>
          <button type="submit">Add Todo</button>
        </form>
      </>
    );
  }
}

export default AddTodo;
