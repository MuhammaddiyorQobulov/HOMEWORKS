import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import BankAccount from "./components/bank-account/bank-account";
import Details from "./components/details/details";
import Owner from "./components/owner/owner";
import Form from "./components/common/form";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Form {
  state = {
    data: [],
  };

  renderValues = (values) => {
    const { data } = this.state;
    console.log(values);
    this.setState({ ...data, ...values });
  };

  render() {
    const { renderValues } = this;
    console.log(this.state);
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/owner"
            render={(props) => <Owner renderValues={renderValues} {...props} />}
          />
          <Route
            exact
            path="/details"
            render={(props) => (
              <Details renderValues={renderValues} {...props} />
            )}
          />
          <Route
            exact
            path="/bank-account"
            render={(props) => (
              <BankAccount renderValues={renderValues} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
