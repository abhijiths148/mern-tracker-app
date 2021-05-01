import React, { Component } from "react";
import { addUser } from "../services/Exersice";
export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }
  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    addUser(user).then((data) => console.log(data));

    this.setState({
      username: "",
    });
  };

  render() {
    return (
      <div className="main-table">
        <h3 className="header">Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
