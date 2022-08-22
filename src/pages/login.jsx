import { Component } from "react";
import { toast } from "react-toastify";
import Input from "../components/common/input";
import { object, number, string } from "yup";
const schema = object({
  email: string().email().required("Email is Required"),
  password: string().min(4).required("Password is Required"),
});
class Login extends Component {
  state = {
    disabled: false,
    user: {
      email: "example@gmail.com",
      password: "134",
    },
    errors: {},
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ disabled: true });

    const formData = await schema.validate(this.state.user).catch((err) => {
      console.log("err = ", JSON.parse(JSON.stringify(err)));
      console.log(err.errors[0]);
      this.state.errors[err.path] = err.errors[0];
    });

    if (formData) {
      const { email, password } = this.state.user;
      setTimeout(() => {
        toast.success(`Login, user ${email} password ${password}`);
        this.setState({ disabled: false, errors: {} });
      }, 2000);
    } else {
      this.setState({ disabled: false });
      return toast.error("Exist errors");
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    const { user } = this.state;
    this.setState({ user: { ...user, [name]: value } });
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
