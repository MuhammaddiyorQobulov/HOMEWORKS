import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Todos from "./components/todos";
import AddTodo from "./components/add-todo";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/" exact component={(props) => <Todos {...props} />} />
        <Route
          to="/add-todo"
          exact
          component={(props) => <AddTodo {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
