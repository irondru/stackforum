import React from 'react'

class UserLogin extends React.Component {

  onSubmit (event) {
    event.preventDefault();
    let fields = {}
    Array.from(event.target).forEach(field => fields[field.name] = field.value)

    console.log(fields);
    };

  render() {
   return (
    <div>
      <form onSubmit={this.onSubmit}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <input type="submit" name="submit" />
      </form>
    </div>
  )
  }
}

export default UserLogin;
