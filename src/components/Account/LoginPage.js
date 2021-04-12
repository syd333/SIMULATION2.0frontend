import React, { Component } from "react";
import { connect } from "react-redux";
import { api } from "../../services/Api";
import { Auth } from "../../actions/index";
import { Form, Button } from "semantic-ui-react";

class LoginPage extends Component {
  state = {
      email: "",
      password: ""
  };

  //   login = (data) => {
  //     }

  handleEmail = data => this.setState({email: data})
  handlePassword = data => this.setState({password: data})

//   handleChange = (e) => {
//     const newFields = {
//       ...this.state.fields,
//       [e.target.value]: e.target.value,
//     };
//     this.setState({
//       fields: newFields,
//     });
//   };

  handleSubmit = (e, data) => {
    e.preventDefault();
    localStorage.setItem("token", data.jwt);
    const token = localStorage.token;
    if (token && token !== "undefined") {
      this.props.history.push("/");
    }
    console.log(this.state);
    api.auth.login(this.state.fields).then((data) => {
      this.props.Auth(data);
    });
  };

  render() {
    return (
      <div className="login">
        <div className="container">
          {/* <h2 className="ui-login-header">login to write a miss</h2> */}
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-email"
                label="email"
                // value={this.state.fields.email}
                onChange={e => this.handleEmail(e.target.value)}
              />
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-password"
                label="password"
                // value={this.state.fields.password}
                onChange={e => this.handlePassword(e.target.value)}
              />
              <button href="/" type="submit" className="loginbutton">
                login
              </button>
              {/* <button class="ui button">Click Here</button> */}
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
