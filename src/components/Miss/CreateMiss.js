import React, { Component } from "react";
import { api } from "../../services/Api";
import { connect } from "react-redux";
import { Form, Button } from "semantic-ui-react";

class CreateMiss extends Component {
  state = {};

  handleTitle = (data) => this.setState({ title: data });
  handleMessage = (data) => this.setState({ message: data });

  handleSubmit = (e) => {};

  render() {
    return (
      <div className="createmiss">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="subject"
              placeholder="subject"
              onChange={(e) => this.handleTitle(e.target.value)}
            />
            {/* <Form.Input fluid label="Last name" placeholder="Last name" /> */}
            <Form.TextArea
              label="message"
              onChange={(e) => this.handleMessage(e.target.value)}
            />
            <Form.Checkbox label="I agree to the Terms and Conditions" />
            <button href="/" type="submit" className="createmissbutton">
              submit
            </button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default CreateMiss;
