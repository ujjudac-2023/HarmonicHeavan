import React, { Component } from "react";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      error: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          user: response.data
        });
      },
      error => {
        this.setState({
          error:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    const { user, error } = this.state;

    return (
      <div className="container">
        {error && <div className="alert alert-danger">{error}</div>}
        {user && (
          <div>
            <header className="jumbotron">
            </header>
            <div>
            <h3>User Information</h3>
             
            </div>
          </div>
        )}
      </div>
    );
  }
}
