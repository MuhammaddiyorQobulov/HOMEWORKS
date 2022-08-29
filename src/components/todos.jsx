import { Component } from "react";
import { Link } from "react-router-dom";
import { createTodo, deleteTodo, getTodos } from "../services/todos";

class Todos extends Component {
  state = {
    todos: [],
  };

  componentDidMount = async () => {
    const todos = (await getTodos()).data;
    this.setState({ todos });
  };

  handleAdd = async () => {
    const { todos } = this.state;
    const todo = (
      await createTodo({
        title: "wkelgnweng",
        description: "wekgmweg",
      })
    ).data;
    todos.push(todo);
    this.setState({ todos });
  };

  handleDelete = async (todoID) => {
    const { todos } = this.state;
    const newTodos = todos.filter(({ _id }) => _id !== todoID);
    const a = (await deleteTodo(todoID)).data;
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Link to="/add-todo">
          <button>Create Todo</button>
        </Link>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, idx) => (
              <tr key={idx}>
                <th>{todo._id}</th>
                <th>{todo.title}</th>
                <th>{todo.description}</th>
                <th>
                  <Link
                    to={{
                      pathname: "/add-todo",
                      state: { todo },
                    }}
                  >
                    <button className="btn btn-primary">Edit</button>
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(todo._id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Todos;
