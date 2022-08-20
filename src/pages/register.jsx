import { Component } from "react";
import { toast } from "react-toastify";
import Input from "../components/common/input";

class Register extends Component {
  state = {
    disabled: false,
    user: {
      username: "Muhammaddiyor",
      email: "username777@domain.com",
      password: "123123",
      confirmpassword: "123123",
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ disabled: true });
    const { password, confirmpassword, email } = this.state.user;
    const errors = this.validate();

    if (errors) {
      this.setState({ errors, disabled: false });
      return toast.error("Exist errors");
    }
    if (password !== confirmpassword) {
      this.setState({ errors, disabled: false });
      return toast.error("Passwords Is Not The Same");
    }

    setTimeout(() => {
      toast.success(`Register, user ${email} password ${password}`);
      this.setState({ disabled: false });
    }, 2000);
  };

  validateField = (value, name) => {
    const errors = { ...this.state.errors };
    if (value.trim() === "") errors[name] = name.toCapital() + " is required!";
    else delete errors[name];
    if (
      (name === "confirmpassword" || name === "password") &&
      this.state.user.password !== this.state.user.confirmpassword
    ) {
      errors.confirmpassword = name.toCapital() + " is not same password ";
    } else delete errors.confirmpassword;
    return errors;
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    const { user } = this.state;

    const errors = this.validateField(value, name);

    this.setState({ user: { ...user, [name]: value }, errors });
  };

  render() {
    const { disabled, user, errors } = this.state;
    console.log(this.state);
    return (
      <>
        <h1>Register Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='username'
            label='Username'
            placeholder='Enter your username'
            value={user.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name='email'
            label='Email'
            placeholder='Enter your email'
            type='email'
            value={user.email}
            onChange={this.handleChange}
            error={errors.email}
          />
          <Input
            name='password'
            label='Password'
            placeholder='Enter your password'
            // type="password"
            value={user.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <Input
            name='confirmpassword'
            label='Confirm Password'
            placeholder='Confirm password'
            // type="password"
            value={user.confirmpassword}
            onChange={this.handleChange}
            error={errors.confirmpassword}
          />

          <button className='btn btn-primary' disabled={disabled}>
            Register
          </button>
        </form>
      </>
    );
  }
}

export default Register;
