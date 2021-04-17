import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  state = {
    username: "",
  };

  usernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
    console.log(this.state.username);
  };

  buttonclickHandler = (data) => {
    data.preventDefault();
    const user = {
      username: this.state.username,
    };
    console.log(user);
    axios
      .post("http://localhost:5000/users/add", user)
      .then((result) => {
        alert("User has been created successfully");
        this.setState({
          username: "",
        });
      })
      .catch((err) => {
        alert(`User already exist`);
        this.setState({
          username: "",
        });
      });
  };

  render() {
    return (
      <div className="container">
        <h4>Create New User</h4>
        <form method="post" onSubmit={this.buttonclickHandler}>
          <div className="form-group">
            <label for="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              className="form-control"
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.usernameHandler}
            ></input>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Create User
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;
