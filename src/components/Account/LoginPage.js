import React, { Component } from "react";
import { connect } from "react-redux";
import { api } from "../../services/Api";
import { Auth } from "../../actions/index";
import { Form, Button } from "semantic-ui-react";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };


  handleEmail = (data) => this.setState({ email: data });
  handlePassword = (data) => this.setState({ password: data });

  handleSubmit = (e) => {
    e.preventDefault();
      api.auth.login(this.state).then((data) => {
        localStorage.setItem("token", data.jwt);
        this.props.Auth(data);
      });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="login">
        <div className="container">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-email"
                label="email"
                // value={this.state.fields.email}
                onChange={(e) => this.handleEmail(e.target.value)}
              />
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-password"
                label="password"
                // value={this.state.fields.password}
                onChange={(e) => this.handlePassword(e.target.value)}
              />
              <button href="/" type="submit" className="loginbutton">
                login
              </button>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { Auth })(LoginPage);
