import React from "react";
import { Component } from "react";
import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

class CreateExercise extends Component {
  state = {
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  };

  componentDidMount = () => {
    axios.get("http://localhost:5000/users/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map((user) => user.username),
          username: response.data[0].username,
        });
      }
    });
  };

  usernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
    console.log(this.state.username);
  };

  descriptionHandler = (event) => {
    this.setState({
      description: event.target.value,
    });
    console.log(this.state.description);
  };

  durationHandler = (event) => {
    this.setState({
      duration: event.target.value,
    });
    console.log(this.state.duration);
  };

  dateHandler = (Date) => {
    this.setState({
      date: Date.target.value,
    });
    console.log(this.state.date);
  };

  buttonclickHandler = (data) => {
    data.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((result) => console.log(result.data))
      .catch((err) => {
        throw err;
      });

    window.location = "/";
  };

  render() {
    return (
      <div className="container">
        <h4>Create New Exercise Log</h4>
        <form method="post" onSubmit={this.buttonclickHandler}>
          <div className="form-group">
            <label for="username" className="form-label">
              Username
            </label>
            {/* <input
              id="username"
              className="form-control"
              type="text"
              name="username"
              onChange={this.usernameHandler}
            ></input> */}
            <select
              className="form-control"
              id="username"
              value={this.state.username}
              onChange={this.usernameHandler}
            >
              {this.state.users.map((user) => {
                return <option key={user}>{user}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label for="des" className="form-label">
              Description
            </label>
            <input
              id="des"
              className="form-control"
              type="text"
              value={this.state.description}
              name="description"
              onChange={this.descriptionHandler}
            ></input>
          </div>
          <div className="form-group">
            <label for="duration" className="form-label">
              Duration (in minutes)
            </label>
            <input
              id="duration"
              value={this.state.duration}
              className="form-control"
              type="text"
              name="duration"
              onChange={this.durationHandler}
            ></input>
          </div>
          <div className="form-group">
            <label for="date" className="form-label">
              Date
            </label>
            <input
              id="date"
              className="form-control"
              type="date"
              value={this.state.date}
              name="date"
              onChange={this.dateHandler}
            ></input>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Create Exercise Log
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateExercise;
