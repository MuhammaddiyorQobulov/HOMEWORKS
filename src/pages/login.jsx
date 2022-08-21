import { Component } from "react";
import { toast } from "react-toastify";
import Input from "../components/common/input";
import { object, number, string } from "yup";

class Login extends Component {
  state = {
    disabled: false,
    user: {
      email: "example@gmail.com",
      password: "12341234",
    },
    errors: {},
  };

  validate = () => {
    const { email, password } = this.state.user;
    const errors = {};
    if (email.trim() === "") errors.email = "Email is required!";

    if (password.trim() === "") errors.password = "Password is required!";

    return Object.values(errors).length ? errors : false;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ disabled: true });

    const errors = this.validate();

    const schema = object({
      email: string().email().required(),
      password: string().min(4).required(),
    });

    const formData = await schema.isValid(this.state.user);
    console.log(formData);

    if (errors) {
      this.setState({ errors, disabled: false });
      return toast.error("Exist errors");
    }

    const { email, password } = this.state.user;
    setTimeout(() => {
      toast.success(`Login, user ${email} password ${password}`);
      this.setState({ disabled: false });
    }, 2000);
  };

  validateField = (value, name) => {
    const errors = { ...this.state.errors };
    if (value.trim() === "") errors[name] = name.toCapital() + " is required!";
    else delete errors[name];

    return errors;
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    const errors = this.validateField(value, name);

    const { user } = this.state;
    this.setState({ user: { ...user, [name]: value }, errors });
  };

  render() {
    const { disabled, user, errors } = this.state;

    return (
      <>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={user.email}
            onChange={this.handleChange}
            error={errors.email}
          />
          <Input
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={user.password}
            onChange={this.handleChange}
            error={errors.password}
          />

          <button className="btn btn-primary" disabled={disabled}>
            Login
          </button>
        </form>
      </>
    );
  }
}

export default Login;
