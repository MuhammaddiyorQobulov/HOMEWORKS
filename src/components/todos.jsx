import { Component } from "react";
import axios from "axios";
import TodoTable from "./todo-table";

const URL = "http://10.10.1.243:8080/todos";

class Todos extends Component {
  state = {};

  componentDidMount() {
    const todos = axios.get(URL);
    console.log(todos);
  }

  render() {
    return (
      <div>
        <TodoTable />
      </div>
    );
  }
}

export default Todos;
