import React, { Component } from "react";
import { api } from "../../services/Api";
import { Form } from "semantic-ui-react";

class SignUpPage extends Component {
  render() {
    return (
      <div className="signup">
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-email"
              label="email"
              placeholder="email"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-password"
              label="password"
              placeholder="password"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SignUpPage;
