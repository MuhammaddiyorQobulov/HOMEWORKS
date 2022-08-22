import React from "react";
import { toast } from "react-toastify";
import { object, string } from "yup";
import "./owner.scss";
import Form from "../common/form";
class Owner extends Form {
  state = {
    data: {
      firstname: "",
      lastname: "",
      email: "",
      country: "",
      role: "",
    },
    errors: {},
  };

  schema = object({
    firstname: string().min(2).required().label("Firstname"),
    lastname: string().min(2).required().label("Lastname"),
    email: string().email().required().label("Email"),
    country: string().min(6).required().label("Country"),
    role: string().min(6).required().label("Role"),
  });

  doSubmit = () => {
    console.log("data = ", this.state.data);
    const { email, firstname } = this.state.data;
    setTimeout(() => {
      toast.success(`Owner, user ${email} firstname ${firstname}`);
    }, 500);
  };

  render() {
    console.log(this.props);
    return (
      <div className="owner">
        <h1>Owner Form</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Firstname</legend>
            {this.renderInput("firstname")}
          </fieldset>
          <fieldset>
            <legend>Lastname</legend>
            {this.renderInput("lastname")}
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            {this.renderInput("email", "email")}
          </fieldset>
          <fieldset>
            <legend>Country</legend>
            {this.renderInput("country")}
          </fieldset>
          <fieldset>
            <legend>Your Role</legend>
            {this.renderInput("role")}
          </fieldset>
          {this.renderButton("Next", "/details")}
        </form>
      </div>
    );
  }
}

export default Owner;
