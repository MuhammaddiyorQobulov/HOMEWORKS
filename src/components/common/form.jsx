import { Component } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Input from "./input";

class Form extends Component {
  validate = () => {
    const errors = {};

    try {
      this.schema.validateSync(this.state.data, { abortEarly: false });
    } catch ({ inner }) {
      for (let { path, message } of inner) errors[path] = message;
      // console.log("errors = ", errors);
    }

    return Object.values(errors).length ? errors : false;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (errors) {
      this.setState({ errors, disabled: false });
      return toast.error("Exist errors");
    }
    this.doSubmit();
    this.props.renderValues(this.state.data);
  };

  validateField = (value, name) => {
    const errors = { ...this.state.errors };

    try {
      this.schema
        .pick([name])
        .validateSync({ [name]: value }, { abortEarly: false });
      delete errors[name];
    } catch ({ inner }) {
      for (let { path, message } of inner) errors[path] = message;
      // console.log("errors = ", errors);
    }

    return Object.values(errors).length ? errors : false;
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    const errors = this.validateField(value, name);

    const { data } = this.state;
    this.setState({ data: { ...data, [name]: value }, errors });
  };

  renderInput = (name, type = "text") => {
    return (
      <Input
        name={name}
        type={type}
        value={this.state.data[name]}
        onChange={this.handleChange}
        error={this.state.errors[name]}
      />
    );
  };

  renderButton = (title, path, type) => {
    return (
      <Link
        to={path}
        style={{
          color: "white",
          fontWeight: "700",
          textDecoration: "none",
          fontSize: "24px",
        }}
      >
        <input className="btn btn-primary" value="Next" type="submit" />
        {title}
      </Link>
    );
  };
}

export default Form;
