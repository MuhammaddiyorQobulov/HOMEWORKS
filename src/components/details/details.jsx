import React from "react";
import { toast } from "react-toastify";
import { object, string } from "yup";
import Form from "../common/form";
import "./details.scss";
class Details extends Form {
  state = {
    data: {
      brandName: "",
      website: "",
      category: "",
      brandColor: "",
    },
    errors: {},
  };
  schema = object({
    brandName: string().min(2).required().label("Brandname"),
    website: string().min(2).required().label("WebSite URL"),
    category: string().required().label("Categoty"),
    brandColor: string().min(6).required().label("Brand Color"),
  });

  doSubmit = () => {
    console.log("data = ", this.state.data);
    const { website, brandName } = this.state.data;
    setTimeout(() => {
      toast.success(`Details, Website ${website} Brand Name ${brandName}`);
    }, 500);
  };

  render() {
    return (
      <div className="details">
        <h1>Details Form</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Brand Name</legend>
            {this.renderInput("brandName")}
          </fieldset>
          <fieldset>
            <legend>Web Site</legend>
            {this.renderInput("website")}
          </fieldset>
          <fieldset>
            <legend>Category</legend>
            {this.renderInput("category")}
          </fieldset>
          <fieldset>
            <legend>Brand Color</legend>
            {this.renderInput("brandColor")}
          </fieldset>
          {this.renderButton("Back", "/owner")}
          {this.renderButton("Next", "/bank-account")}
        </form>
      </div>
    );
  }
}

export default Details;
