import React, { Component } from "react";
import { connect } from 'react-redux';
import { api } from "../../services/Api";
import { Auth } from '../../actions/index'
import { Form, Button } from "semantic-ui-react";

class LoginPage extends Component {
  state = {
    fields: {
      email: "",
      password: "",
    },
  };

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.value]: e.target.value}
    this.setState({
        fields: newFields
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // api.auth.login(this.state.fields).then((res) => {
    //     this.props.onLogin(res)
    // })
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
                placeholder="email"
                value={this.state.fields.email}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-password"
                label="password"
                placeholder="password"
                value={this.state.fields.password}
                onChange={this.handleChange}
              />
              <button href="/" type="submit" className="ui basic black button">
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

const mapStateToProps = state => {
    console.log(state)
}

export default connect(mapStateToProps)(LoginPage);
