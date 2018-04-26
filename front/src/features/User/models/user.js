const user = {
  email: '',
  name: '',
  password: '',
  password_confirmation: ''
}

export const createUser = props => ({
  ...user,
  ...props
})
