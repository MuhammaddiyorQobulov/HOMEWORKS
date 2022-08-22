import Form from './common/form'
import { toast } from 'react-toastify'
import { object, string } from 'yup'

class Owner extends Form {
  state = {
    data: {
      email: 'ars@domain.com',
      password: '',
    },
    errors: {},
  }

  schema = object({
    email: string().email().required().label('Email'),
    password: string().min(6).required().label('Password'),
  })

  doSubmit = () => {
    console.log('data = ', this.state.data)
    const { email, password } = this.state.data
    setTimeout(() => {
      toast.success(`Owner, user ${email} password ${password}`)
    }, 500)
  }

  render() {
    return (
      <>
        <h1>Owner Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('email', 'Email', 'email')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Owner')}
        </form>
      </>
    )
  }
}

export default Owner
