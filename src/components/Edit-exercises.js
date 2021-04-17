import React, { Component } from "react";
import axios from "axios";

class EditExercise extends Component {
  state = {
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/exercises/" + this.props.match.params.id)
      .then((response) => {
        console.log(response.data);
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: response.data.date,
        });
        console.log(this.state);
      })
      .catch((err) => {
        throw console.log(err);
      });

    axios.get("http://localhost:5000/users/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map((user) => user.username),
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
      .patch(
        "http://localhost:5000/exercises/update/" + this.props.match.params.id,
        exercise
      )
      .then((result) => console.log(result.data))
      .catch((err) => {
        throw err;
      });

    window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Edit New Exercise Log</h3>
        <form method="post" onSubmit={this.buttonclickHandler}>
          <div className="form-group">
            <label for="username">Username</label>
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
            <label for="des">Description</label>
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
            <label for="duration">Duration (in minutes)</label>
            <input
              id="duration"
              className="form-control"
              type="text"
              value={this.state.duration}
              name="duration"
              onChange={this.durationHandler}
            ></input>
          </div>
          <div className="form-group">
            <label for="date">Date</label>
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
              Edit Exercise Log
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditExercise;
