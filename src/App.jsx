import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Todos from "./components/todos";
import AddTodo from "./components/add-todo";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/add-todo"
          exact
          component={(props) => <AddTodo {...props} />}
        />
        <Route path="/" exact component={(props) => <Todos {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
